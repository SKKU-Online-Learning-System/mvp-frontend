import React, { SyntheticEvent } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import { useRecommendedCoursesFetch } from 'query/hooks/Main/index';
import { defaultErrorImage } from 'constants/index';
import CourseHeader from './CourseHeader';

interface PropsType {
	headerText: string;
	headerColor: string;
	order: number;
}

const CourseList = ({ headerText, headerColor, order }: PropsType) => {
	const router = useRouter();
	const recommendedCoursesList = useRecommendedCoursesFetch(order);

	const handleClick = (id: number | undefined) => {
		if (typeof id === 'undefined') {
			alert('잠시 후 다시 클릭해주세요.');
			return;
		}
		router.push(`/courses/${id}`);
	};

	const handleImgError = (e: SyntheticEvent<HTMLImageElement>) => {
		(e.target as HTMLImageElement).src = defaultErrorImage;
	};

	if (recommendedCoursesList[0].isLoading) return <div>Loading...</div>;
	return (
		<div>
			<CourseHeader title={headerText} color={headerColor} />
			<div className="grid gap-x-4 gap-y-4 py-5 px-[35px] grid-cols-5">
				{recommendedCoursesList.map((course, idx) => (
					<div
						key={idx}
						className="relative overflow-hidden rounded-lg transition hover:scale-[1.03] cursor-pointer bg-[var(--color-Surface)]"
						// onClick={() => handleClick(course.data![0].courseId)}
					>
						{/* <Image
							width={'300'}
							height={'180'}
							src={course.data![0].thumbnailLink}
							onError={handleImgError}
							alt="course thumbnail"
						/> */}
						<div className="px-3 pt-2 pb-3 h-30">
							<div className="font-bold">Course Title</div>
							<div className="text-xs opacity-[0.6] mt-2 overflow-ellipsis">
								{/* {course.data[0]!.description} */}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default CourseList;
