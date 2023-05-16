import React, { ReactElement, SyntheticEvent } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { defaultErrorImage } from 'constants/index';
import { ICourse } from 'types/Main';
import { usePopularCoursesFetch } from 'query/hooks/Main/index';

interface ICourseListProps {
	headerText: string;
	headerColor: string;
}
interface ICommonHeaderProps {
	text: string;
	color: string;
}
interface ICourseCardProps {
	course: ICourse;
}

export const CommonHeader = ({
	text,
	color,
}: ICommonHeaderProps): ReactElement => {
	return (
		<div className="w-full text-[2rem] font-bold pb-3 pl-[45px] pt-[60px] border-b-2 border-b-solid border-b-black/[0.2]">
			<div className="relative">
				<div
					className={'w-[20px] h-[2px] absolute top-[-2] left-[3px] ${color}'}
				/>
				{text}
			</div>
		</div>
	);
};

const CourseCard = ({ course }: ICourseCardProps) => {
	const router = useRouter();

	const handleImgError = (e: SyntheticEvent<HTMLImageElement>) => {
		(e.target as HTMLImageElement).src = defaultErrorImage;
	};

	const handleClick = (id: number) => {
		router.push(`/courses/${id}`);
	};

	return (
		<div
			className="cursor-pointer w-full overflow-hidden relative"
			onClick={() => handleClick(course.id)}
		>
			<Image
				width={'300px'}
				height={'200px'}
				src={course.thumbnail}
				onError={handleImgError}
				alt="course thumbnail"
			/>
			<div className="font-bold">{course.title}</div>
			<div className="text-xs opacity-[0.6]">{course.description}</div>
		</div>
	);
};

const CourseList = ({
	headerText,
	headerColor,
}: ICourseListProps): ReactElement => {
	const { data: popularCourses, isLoading } = usePopularCoursesFetch();

	if (isLoading) return <div>Loading...</div>;

	return (
		<div>
			<CommonHeader text={headerText} color={headerColor} />
			<div className="grid gap-x-4 gap-y-4 py-5 px-[35px] grid-cols-5">
				{popularCourses?.slice(0, 5).map((course, idx) => (
					<CourseCard key={idx} course={course} />
				))}
			</div>
		</div>
	);
};

export default CourseList;
