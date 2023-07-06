import React, { SyntheticEvent } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import { usePopularCoursesFetch } from 'query/hooks/Main/index';
import { defaultErrorImage } from 'constants/index';
import CourseHeader from './CourseHeader';

interface ICourseListProps {
	headerText: string;
	headerColor: string;
}

const CourseList = ({ headerText, headerColor }: ICourseListProps) => {
	const router = useRouter();
	const { data: popularCourses, isLoading } = usePopularCoursesFetch();

	const handleClick = (id: number) => {
		router.push(`/courses/${id}`);
	};

	const handleImgError = (e: SyntheticEvent<HTMLImageElement>) => {
		(e.target as HTMLImageElement).src = defaultErrorImage;
	};

	if (isLoading) return <div>Loading...</div>;
	return (
		<div>
			<CourseHeader title={headerText} color={headerColor} />
			<div className="grid gap-x-4 gap-y-4 py-5 px-[35px] grid-cols-5">
				{popularCourses?.slice(0, 5).map((course, idx) => (
					<div
						key={idx}
						className="relative overflow-hidden rounded-lg transition hover:scale-[1.03] cursor-pointer bg-[#f2f2f2]"
						onClick={() => handleClick(course.id)}
					>
						<Image
							width={'300px'}
							height={'200px'}
							src={course.thumbnail}
							onError={handleImgError}
							alt="course thumbnail"
						/>
						<div className="px-3 h-30">
							<div className="font-bold">{course.title}</div>
							<div className="text-xs opacity-[0.6]">
								{course.description} description 내용이 없음
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default CourseList;
