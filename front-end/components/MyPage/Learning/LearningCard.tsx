import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

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
}: PropsType): JSX.Element => {
	const router = useRouter();

	const handleClick = (courseId: number) => () => {
		router.push(`/courses/${courseId}`);
	};

	return (
		<div className="grid w-full min-h-full grid-cols-5 grid-rows-4 p-20 gap-x-12 gap-y-12">
			{courses.slice(0, 20).map((elem, index) => (
				<div
					className="relative w-full overflow-hidden cursor-pointer hover:scale-[1.01] transition"
					onClick={handleClick(elem.course.id)}
					key={index}
				>
					<Image
						className="w-full rounded-tl-lg rounded-tr-lg aspect-video"
						src={elem.course.thumbnail}
						width={300}
						height={300}
						alt="Learning Card Img"
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
