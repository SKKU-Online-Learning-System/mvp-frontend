import React from 'react';
import { useRouter } from 'next/router';

import { ICourseInfo } from 'types/MyPage';

interface ILectureStatusCount {
	finishedLectureCount: number;
	maxLectureCount: number;
}

type PropsType = {
	courses: ICourseInfo[];
	learningLectureCount: ILectureStatusCount[] | undefined;
	showLectureProgressStatus: Function;
};

const LearningCard = ({
	courses,
	learningLectureCount,
	showLectureProgressStatus,
}: PropsType) => {
	const router = useRouter();

	const handleClick = (courseId: number) => () => {
		router.push(`/courses/${courseId}`);
	};

	return courses.slice(0, 20).map((elem, index) => (
		<div
			className="relative w-full overflow-hidden cursor-pointer hover:scale-[1.02] transition"
			onClick={handleClick(elem.course.id)}
			key={index}
		>
			<img className="w-full aspect-video" src={elem.course.thumbnail}></img>
			<div className="overflow-hidden text-base text-ellipsis whitespace-nowrap">
				{elem.course.title}
			</div>
			<div className="text-ellipsis overflow-hidden whitespace-nowrap text-black/[0.5]">
				{learningLectureCount &&
					showLectureProgressStatus(learningLectureCount[index])}
			</div>
		</div>
	));
};

export default LearningCard;
