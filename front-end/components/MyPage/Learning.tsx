import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { useCurrentLeaningCourseListFetch } from 'query/hooks/MyPage';
import { MYPAGE_MENU } from 'constants/MyPage';

const menu = [MYPAGE_MENU.CURRENT_WATCHING_LECTURES];

interface ILectureStatusCount {
	finishedLectureCount: number;
	maxLectureCount: number;
}

const Learning = () => {
	const router = useRouter();

	const [learningLectureCount, setLearningLectureCount] =
		useState<ILectureStatusCount[]>();

	const result = useCurrentLeaningCourseListFetch();
	const [currentLearningCourseList, finishedLectureList, lectureCountList] = [
		result[1].data,
		result[2].data,
		result[3].data,
	];
	const isLoading = result.some((elem) => elem.isLoading);

	const handleClick = (courseId: number) => () => {
		router.push(`/courses/${courseId}`);
	};

	const showLectureProgressStatus = ({
		finishedLectureCount,
		maxLectureCount,
	}: {
		finishedLectureCount: number;
		maxLectureCount: number;
	}) => {
		if (!maxLectureCount) return;

		let percentage = ~~((finishedLectureCount / maxLectureCount) * 100);
		if (!finishedLectureCount) percentage = 0;

		return `${finishedLectureCount}개 / ${maxLectureCount}개 (${percentage}%)`;
	};

	useEffect(() => {
		if (isLoading) return;

		const learningLectureCount = currentLearningCourseList?.reduce(
			(prev: ILectureStatusCount[], cur) => {
				const id = cur.course.id;

				const maxLectureCount = +(
					lectureCountList?.find((value) => id === value.courseId)
						?.lectures_count ?? 0
				);
				const finishedLectureCount = +(
					finishedLectureList?.find((value) => id === value.courseId)
						?.finishedLecture ?? 0
				);

				prev.push({ finishedLectureCount, maxLectureCount });
				return prev;
			},
			[],
		);

		setLearningLectureCount(learningLectureCount);
	}, [isLoading]);

	if (isLoading) return <div>Loading...</div>;
	if (!currentLearningCourseList?.length)
		return <div>강좌가 존재하지 않습니다</div>;

	return (
		<div>
			<div className="grid grid-cols-4 grid-rows-3 p-5 gap-x-4 gap-y-4">
				{currentLearningCourseList.map((elem, index) => (
					<div
						className="relative w-full overflow-hidden cursor-pointer"
						onClick={handleClick(elem.course.id)}
						key={index}
					>
						<img
							className="w-full aspect-video"
							src={elem.course.thumbnail}
						></img>
						<div className="overflow-hidden text-base text-ellipsis whitespace-nowrap">
							{elem.course.title}
						</div>
						<div className="text-ellipsis overflow-hidden whitespace-nowrap text-black/[0.5]">
							{learningLectureCount &&
								showLectureProgressStatus(learningLectureCount[index])}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Learning;
