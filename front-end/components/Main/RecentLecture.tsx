import React from 'react';
import { useRouter } from 'next/router';

import { useRecentLecturesFetch } from 'query/hooks/Main/index';
import { durationToHhMmSs } from 'utils/durationToHhMmSs';
import CourseHeader from './CourseHeader';

export const RecentLecture = () => {
	const router = useRouter();
	const { data: recentLectures, isLoading } = useRecentLecturesFetch();

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

	return (
		<>
			<CourseHeader title={'최근 수강 강의'} color={'red'} />
			<div className="grid gap-x-4 gap-y-4 grid-cols-5 py-5 px-[35px]">
				{recentLectures?.slice(0, 5).map((elem, index) => {
					const percentage = getProgressPercentage(
						elem.lastTime,
						elem.lecture.duration,
					);

					return (
						<div
							className="relative w-full overflow-hidden cursor-pointer"
							onClick={handleClick(elem.lecture.course.id, elem.lecture.id)}
							key={index}
						>
							<img
								className="w-full aspect-video"
								src={elem.lecture.course.thumbnail}
							></img>
							<div
								className={`w-[${percentage}] absolute bottom-[50px] right-0 left-0 h-1 bg-[#717171]`}
							>
								<div className="absolute h-full bg-red-600"></div>
							</div>
							<div className="overflow-hidden text-base text-ellipsis whitespace-nowrap">
								{elem.lecture.title}
							</div>
							<div className="text-ellipsis overflow-hidden whitespace-nowrap text-black/[0.5]">
								{showTimeProgress(elem.lastTime, elem.lecture.duration)}
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
};
