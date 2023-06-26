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
				{/* 위에 작은 하이픈 모양으로 색깔 있는 건데 지금 색 없어서 안 보임*/}
				<div className={`w-5 h-[2px] absolute top-[-2] left-1 bg-[${color}]`} />
				{/* 변경 예정
				인기강좌, 프로그래밍 분야 인기 강좌 모음, 보안 분야 인기 강좌 모음 => 
				인기 컨텐츠, 신규 컨텐츠, 인기카테고리1 컨텐츠, 인기카테고리2 컨텐츠 */}
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
			className="relative overflow-hidden rounded-lg cursor-pointer bg-[#f2f2f2]"
			onClick={() => handleClick(course.id)}
		>
			<div className="px-3 font-bold bg-[var(--color-green-700)] h-36 text-[var(--color-white-100)]">
				{course.title}
			</div>
			{/* <Image
				width={'300px'}
				height={'200px'}
				src={course.thumbnail}
				onError={handleImgError}
				alt="course thumbnail"
			/> */}
			<div className="px-3 h-36">
				<div className="font-bold">{course.title}</div>
				<div className="text-xs opacity-[0.6]">
					{course.description} description 내용이 없음
				</div>
			</div>
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
