import React, { SyntheticEvent } from 'react';
import Link from 'next/link';

import { defaultErrorImage } from 'constants/index';
import { ICourseInfo } from 'types/Course/index';
import Image from 'next/image';

const CourseCard = ({ course }: { course: ICourseInfo }): JSX.Element => {
	const handleImgError = (e: SyntheticEvent<HTMLImageElement>) => {
		(e.target as HTMLImageElement).src = defaultErrorImage;
	};

	return (
		<div>
			<Link href={`/courses/${course.id}`}>
				<div className="relative overflow-hidden rounded-md transition hover:scale-[1.02] cursor-pointer bg-[var(--color-Surface)]">
					<Image
						width={'300'}
						height={'180'}
						src={course.thumbnail}
						onError={handleImgError}
						alt="course thumbnail"
						layout="responsive"
					/>
					<div className="flex flex-col justify-around h-[120px] px-4 pt-1 pb-3">
						<div className="text-lg font-semibold">{course.title}</div>
						<div className="text-sm font-semibold">{course.summary}</div>
						<div className="text-sm font-semibold">
							{course.createdAt.split('T')[0]}
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default CourseCard;
// Todo: course.instructor에 정보가 없음
