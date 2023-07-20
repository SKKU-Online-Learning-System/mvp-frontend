import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

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
			<CourseHeader title={'최근 수강 강의'} color={'#ff0000'} />
			<div className="grid gap-x-4 gap-y-4 grid-cols-5 py-5 px-[35px]">
				{recentLectures?.slice(0, 5).map((elem, index) => {
					const percentage = getProgressPercentage(
						elem.lastTime,
						elem.lecture.duration,
					);

					return (
						<div
							className="relative w-full overflow-hidden cursor-pointer rounded-lg transition hover:scale-[1.03] bg-[var(--color-Surface)]"
							onClick={handleClick(elem.lecture.course.id, elem.lecture.id)}
							key={index}
						>
							<Image
								className="w-full aspect-video"
								src={elem.lecture.course.thumbnail}
								alt="course thumbnail"
								width={300}
								height={180}
							/>
							<div
								className={`w-[${percentage}] absolute bottom-[84px] right-0 left-0 h-1 bg-[#717171]`}
							>
								<div className="absolute h-full bg-red-600"></div>
							</div>
							<div className="flex flex-col justify-around h-20 px-3 pt-2 pb-3">
								<div className="overflow-hidden text-base font-semibold text-ellipsis whitespace-nowrap">
									{elem.lecture.title}
								</div>
								<div className="text-ellipsis overflow-hidden whitespace-nowrap text-black/[0.5]">
									{showTimeProgress(elem.lastTime, elem.lecture.duration)}
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
};

{
	/* <div>
	<CourseHeader title={headerText} color={headerColor} />
	<div>
		{recommendedCoursesList.length !== 0 ? (
			<div className="grid gap-x-4 gap-y-4 py-5 px-[35px] grid-cols-5">
				{recommendedCoursesList.map((course, idx) => (
					<div
						key={idx}
						className="relative overflow-hidden rounded-lg transition hover:scale-[1.03] cursor-pointer bg-[var(--color-Surface)]"
						onClick={() => handleClick(course.courseId)}
					>
						<Image
							width={'300'}
							height={'180'}
							src={course.thumbnail}
							onError={handleImgError}
							alt="course thumbnail"
						/>
						<div className="flex flex-col justify-between px-3 pt-2 pb-3 h-30 h-[92px]">
							<div className="font-bold">{course.title}</div>
							<div className="text-xs opacity-[0.6] mt-2 overflow-ellipsis">
								{course.instructor}
							</div>
						</div>
					</div>
				))}
			</div>
		) : (
			<div className="flex items-center justify-center my-4">
				<span className="rounded-lg bg-[var(--color-green-700)] text-white py-4 px-8 font-semibold text-xl">
					해당 카테고리 강좌 정보가 없습니다.
				</span>
			</div>
		)}
	</div>
</div> */
}
