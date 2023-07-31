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
			<div className="bg-[var(--color-mrgreen-9)] w-full py-4">
				{/* <BreadCrumb
					category={'MY PAGE'}
					menu={menu}
					containerPadding={'1rem 0'}
				/> */}
			</div>
			{/* <MyPageTitle title={MYPAGE_MENU.RECENT_WATCHING_LECTURES} /> */}
			<div className="bg-[var(--color-mrgreen-9)]  w-full ">
				<div className="bg-[var(--color-Surface)] rounded-tl-lg">
					<div className="grid grid-cols-4 p-5 mx-56 mb-32 tbl:mx-auto dt:grid-cols-3 tbl:grid-cols-3 mbl:grid-cols-1 gap-x-4 gap-y-4">
						{latestLectures.slice(0, 20).map((elem, index) => {
							const percentage = getProgressPercentage(
								elem.lastTime,
								elem.lecture.duration,
							);

							return (
								<div
									className="rounded-md w-full mt-5 overflow-hidden relative cursor-pointer transition hover:scale-[1.03]  bg-white"
									onClick={handleClick(elem.lecture.course.id, elem.lecture.id)}
									key={index}
								>
									<img
										className="w-full aspect-video"
										src={elem.lecture.course.thumbnail}
									/>
									<p className="p-1">
										<div className="absolute bottom-[50px] right-0 left-0 h-1 bg-[#717171]">
											<div
												className={`absolute w-[${percentage}%] h-full bg-[#ff0000]`}
											></div>
										</div>
										<div className="overflow-hidden text-base text-ellipsis whitespace-nowrap">
											{elem.lecture.title}
										</div>
										<div className="text-ellipsis overflow-hidden whitespace-nowrap text-black/[0.5]">
											{showTimeProgress(elem.lastTime, elem.lecture.duration)}
										</div>
									</p>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</MyPageLayout>
	);
};

export default History;
