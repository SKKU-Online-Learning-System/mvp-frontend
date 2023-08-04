import React, { SyntheticEvent } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import { useRecommendedCoursesFetch } from 'query/hooks/Main/index';
import { defaultErrorImage } from 'constants/index';
import CourseHeader from './CourseHeader';

interface PropsType {
	headerText: string;
	order: number;
}

const CourseList = ({ headerText, order }: PropsType) => {
	const router = useRouter();
	const { data: recommendedCoursesList, isLoading } =
		useRecommendedCoursesFetch(order);

	if (isLoading) return <div>Loading...</div>;

	const handleClick = (id: number) => {
		if (typeof id === 'undefined') {
			alert('잠시 후 다시 클릭해주세요.');
			return;
		}
		router.push(`/courses/${id}`);
	};

	const handleImgError = (e: SyntheticEvent<HTMLImageElement>) => {
		(e.target as HTMLImageElement).src = defaultErrorImage;
	};

	if (!recommendedCoursesList) {
		return (
			<div>
				<p>Failed to find recommended courses . . .</p>
			</div>
		);
	} else if (recommendedCoursesList.length === 0) {
		return (
			<div className="flex items-center justify-center my-4">
				<span className="rounded-lg bg-[var(--color-green-700)] text-white py-4 px-8 font-semibold text-xl">
					해당 카테고리 강좌 정보가 없습니다.
				</span>
			</div>
		);
	}

	return (
		<div>
			<CourseHeader title={headerText} />
			<div>
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
							<div className="flex flex-col justify-between px-3 pt-2 pb-3 h-[92px]">
								<div className="font-bold">{course.title}</div>
								<div className="text-xs opacity-[0.6] mt-2 overflow-ellipsis">
									{course.instructor}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default CourseList;
