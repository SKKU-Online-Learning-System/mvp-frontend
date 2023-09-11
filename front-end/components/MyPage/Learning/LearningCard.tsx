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
	showLectureProgressStatus: (obj: ILectureStatusCount) => string | undefined;
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

	return (
		<div>
			{courses.slice(0, 20).map((elem, index) => (
				<div
					className="relative w-full overflow-hidden cursor-pointer hover:scale-[1.01] transition"
					onClick={handleClick(elem.course.id)}
					key={index}
				>
					<img
						className="w-full rounded-tl-lg rounded-tr-lg aspect-video"
						src={elem.course.thumbnail}
					/>
					<div className="px-4 py-2 pb-4 bg-[var(--color-Surface)] rounded-bl-lg rounded-br-lg">
						<div className="mb-2 overflow-hidden text-xl font-semibold text-ellipsis whitespace-nowrap">
							{elem.course.title}
						</div>
						<div className="text-ellipsis overflow-hidden whitespace-nowrap text-black/[0.5] font-semibold">
							{learningLectureCount &&
								showLectureProgressStatus(learningLectureCount[index])}
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default LearningCard;
