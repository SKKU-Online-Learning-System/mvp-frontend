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
	const { data: recommendedCoursesList, isLoading } =
		useRecommendedCoursesFetch(order);

	if (isLoading) return <div>Loading...</div>;

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

	if (!recommendedCoursesList || recommendedCoursesList.length === 0) {
		return (
			<div>
				<p>Failed to find recommended courses . . .</p>
			</div>
		);
	}

	return (
		<div>
			<CourseHeader title={headerText} color={headerColor} />
			<div className="grid gap-x-4 gap-y-4 py-5 px-[35px] grid-cols-5">
				{recommendedCoursesList.map((course, idx) => (
					<div
						key={idx}
						className="relative overflow-hidden rounded-lg transition hover:scale-[1.03] cursor-pointer bg-[var(--color-Surface)]"
						onClick={() => handleClick(course.courseId)}
					>
						<Image
							width={'300'}
							height={'180'}
							src={course.thumbnail}
							onError={handleImgError}
							alt="course thumbnail"
						/>
						<div className="px-3 pt-2 pb-3 h-30">
							<div className="font-bold">{course.title}</div>
							<div className="text-xs opacity-[0.6] mt-2 overflow-ellipsis">
								{/* {course.description} */}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default CourseList;
