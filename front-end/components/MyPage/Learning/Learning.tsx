import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { useCurrentLeaningCourseListFetch } from 'query/hooks/MyPage';
import LearningCard from './LearningCard';

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
	if (!currentLearningCourseList || !currentLearningCourseList.length)
		return <div>강좌가 존재하지 않습니다</div>;

	return (
		<div className="min-h-screen bg-white">
			<div className="grid grid-cols-5 grid-rows-4 p-20 gap-x-12 gap-y-12">
				<LearningCard
					courses={currentLearningCourseList}
					learningLectureCount={learningLectureCount}
					showLectureProgressStatus={showLectureProgressStatus}
				/>
			</div>
		</div>
	);
};

export default Learning;
