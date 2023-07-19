// 강좌리스트 페이지: 강좌 카드들
import React, { SyntheticEvent } from 'react';
import { useRouter } from 'next/router';

import { defaultErrorImage } from 'constants/index';
import { ICourseInfo } from 'types/Course/index';
import Image from 'next/image';

const LectureCard = ({ course }: { course: ICourseInfo }): JSX.Element => {
	const router = useRouter();

	const handleImgError = (e: SyntheticEvent<HTMLImageElement>) => {
		(e.target as HTMLImageElement).src = defaultErrorImage;
	};

	const handleClick = (id: number) => {
		router.push(`/courses/${id}`);
	};
	// console.log(course.instructor);
	return (
		<div className="px-1">
			{/* <div className=" gap-x-2 gap-y-4 py-5 px-[35px]"> */}
			<div
				// className={`pr-4 cursor-pointer w-[${~~(1140 / 4)}]`}
				className="relative overflow-hidden rounded-lg transition hover:scale-[1.03] cursor-pointer bg-[var(--color-Surface)]"
				onClick={() => handleClick(course.id)}
				key={course.id}
			>
				{/* 썸네일 이미지 */}
				<Image
					width={'300'}
					height={'180'}
					src={course.thumbnail}
					onError={handleImgError}
					alt="course thumbnail"
				/>
				{/* 썸네일 외 정보 */}
				<div className="flex flex-col justify-between px-3 pt-2 pb-3 h-30 h-[92px]">
					<div className="font-bold">{course.title}</div>
					<div className="text-xs opacity-[0.6] mt-2 overflow-ellipsis">
						{course.instructor}
					</div>
				</div>
			</div>
		</div>
	);
};

export default LectureCard;
