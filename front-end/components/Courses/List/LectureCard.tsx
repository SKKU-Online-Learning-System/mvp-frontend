// 강좌리스트 페이지: 강좌 카드들
import React, { SyntheticEvent } from 'react';
import { useRouter } from 'next/router';

import { defaultErrorImage } from 'constants/index';
import { ICourseInfo } from 'types/Course/index';
import Image from 'next/image';
import { usePopularCoursesFetch } from 'query/hooks/CourseList';

const LectureCard = ({ course }: { course: ICourseInfo }): JSX.Element => {
	const router = useRouter();
	const handleImgError = (e: SyntheticEvent<HTMLImageElement>) => {
		(e.target as HTMLImageElement).src = defaultErrorImage;
	};

	const { data: popularContents, isLoading } = usePopularCoursesFetch(
		course.id,
	);

	if (isLoading)
		return (
			<div role="status" className="animate-pulse">
				<div className="px-1">
					<div
						// className="max-w-sm p-4 rounded-md shadow md:p-6 "
						className="relative h-full px-3 overflow-hidden transition rounded-md"
					>
						{/* 그림 */}
						<div className="w-[300px] h-32 flex items-center justify-center mb-3 bg-gray-300 rounded-md dark:bg-gray-700"></div>
						{/* 썸네일 외 정보 */}
						<div className="flex flex-col justify-between h-20 pt-1 pb-3">
							{/* 제목 */}
							<div>
								<div className="h-3 mb-3 bg-gray-200 rounded-full w-44 dark:bg-gray-700"></div>
								<div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-36"></div>
							</div>
							{/* 강사, 명수 */}
							<div className="flex items-center justify-between">
								<div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-[20%]"></div>
								<div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-[15%]"></div>
							</div>
						</div>
					</div>
				</div>
				<span className="sr-only">Loading...</span>
			</div>
		);

	const handleClick = (id: number) => {
		router.push(`/courses/${id}`);
	};
	return (
		<div className="px-1">
			<div
				className="relative overflow-hidden rounded-md transition hover:scale-[1.03] cursor-pointer bg-[var(--color-Surface)]"
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
				<div className="flex flex-col justify-between h-24 px-2 pt-2 pb-3">
					<div className="font-bold">{course.title}</div>
					<div className="flex items-center justify-between">
						<div className="text-xs opacity-[0.6] mt-2 overflow-ellipsis">
							{popularContents?.instructorName}
						</div>
						<div className="flex flex-col justify-center items-center text-xs opacity-[0.6] mt-2 overflow-ellipsis">
							<span>+{popularContents?.enrollmentCount}명</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LectureCard;
