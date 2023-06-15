import React, { SyntheticEvent } from 'react';
import { useRouter } from 'next/router';

import { defaultErrorImage } from 'constants/index';
import { ICourseDetail } from 'types/Course/index';
import HashTagCard from './HashTagCard';

interface ILectureCard {
	course: ICourseDetail;
}

const LectureCard = ({ course }: ILectureCard) => {
	const router = useRouter();

	const handleImgError = (e: SyntheticEvent<HTMLImageElement>) => {
		(e.target as HTMLImageElement).src = defaultErrorImage;
	};

	const handleClick = (id: number) => {
		router.push(`/courses/${id}`);
	};

	return (
		<span
			className={`pr-4 cursor-pointer w-[${~~(1140 / 4)}]`}
			onClick={() => handleClick(course.id)}
			key={course.id}
		>
			<img
				width="100%"
				src={course.thumbnail}
				onError={handleImgError}
				alt="no"
			/>
			<div className="flex gap-1 overflow-auto">
				{course.hashtag.map((name: string, idx: number) => (
					<HashTagCard name={name} key={idx} />
				))}
			</div>
			<div className="font-bold text-ellipsis overflow-hidden">
				{course.title}
			</div>
			<div className="text-[#7d7d7d] text-[0.9rem] overflow-hidden h-[100px]">
				{course.description}
			</div>
		</span>
	);
};

export default LectureCard;
