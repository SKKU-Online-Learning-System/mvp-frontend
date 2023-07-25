import React from 'react';
import { useRouter } from 'next/router';

import { useRecentLecturesFetch } from 'query/hooks/Main/index';
import { durationToHhMmSs } from 'utils/durationToHhMmSs';
import MyPageLayout from '@components/MyPage/MyPageLayout';
import BreadCrumb from '@components/common/BreadCrumb';
import { MYPAGE_MENU } from 'constants/MyPage';
import { MyPageTitle } from './MyPageTitle';

const menu = [MYPAGE_MENU.RECENT_WATCHING_LECTURES];

const History = () => {
	const router = useRouter();

	const { data: latestLectures, isLoading } = useRecentLecturesFetch();

	const isValidate = (curTime: number, duration: number) => {
		return duration !== 0 && duration >= curTime;
	};

	const getProgressPercentage = (
		curTime: number = 0,
		duration: number = 0,
	): number => {
		if (!isValidate(curTime, duration)) return 0;

		return ~~((curTime / duration) * 100);
	};

	const showTimeProgress = (curTime: number = 0, duration: number = 0) => {
		if (!isValidate(curTime, duration)) return '';

		return `${durationToHhMmSs(curTime)} / ${durationToHhMmSs(
			duration,
		)} (${getProgressPercentage(curTime, duration)}%)`;
	};

	const handleClick = (courseId?: number, lectureId?: number) => () => {
		router.push({ pathname: `/lectures/${lectureId}`, query: { courseId } });
	};

	if (isLoading) return <div>Loading...</div>;
	if (!latestLectures?.length) return <div>강의가 존재하지 않습니다</div>;

	return (
		<MyPageLayout>
			{/* <BreadCrumb
				category={'MY PAGE'}
				menu={menu}
				containerPadding={'1rem 0'}
			/> */}
			<MyPageTitle title={MYPAGE_MENU.RECENT_WATCHING_LECTURES} />
			<div className="grid gap-x-4 gap-y-4 border-[1px] border-solid border-gray-700 grid-rows-3 grid-cols-4 p-5">
				{latestLectures.slice(0, 20).map((elem, index) => {
					const percentage = getProgressPercentage(
						elem.lastTime,
						elem.lecture.duration,
					);

					return (
						<div
							className="w-full overflow-hidden relative cursor-pointer"
							onClick={handleClick(elem.lecture.course.id, elem.lecture.id)}
							key={index}
						>
							<img
								className="aspect-video w-full"
								src={elem.lecture.course.thumbnail}
							></img>
							<div className="absolute bottom-[50px] right-0 left-0 h-1 bg-[#717171]">
								<div
									className={`absolute w-[${percentage}%] h-full bg-[#ff0000]`}
								></div>
							</div>
							<div className="text-base text-ellipsis overflow-hidden whitespace-nowrap">
								{elem.lecture.title}
							</div>
							<div className="text-ellipsis overflow-hidden whitespace-nowrap text-black/[0.5]">
								{showTimeProgress(elem.lastTime, elem.lecture.duration)}
							</div>
						</div>
					);
				})}
			</div>
		</MyPageLayout>
	);
};

export default History;
