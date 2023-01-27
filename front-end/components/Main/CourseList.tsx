import { SyntheticEvent } from 'react';
import styled from 'styled-components';
import { defaultErrorImage } from 'constants/index';
import { useRouter } from 'next/router';
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

export const CommonHeader = ({ text, color }: ICommonHeaderProps) => {
	return (
		<Wrapper>
			<div style={{ position: 'relative' }}>
				<div
					style={{
						width: '20px',
						height: '2px',
						background: color,
						position: 'absolute',
						top: -2,
						left: '3px',
					}}
				/>
				{text}
			</div>
		</Wrapper>
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
		<CourseCardWrapper onClick={() => handleClick(course.id)}>
			<img width={'100%'} src={course.thumbnail} onError={handleImgError} />
			<div style={{ fontWeight: 'bold' }}>{course.title}</div>
			<div style={{ fontSize: '12px', opacity: '0.6' }}>
				{course.description}
			</div>
		</CourseCardWrapper>
	);
};

const CourseList = ({ headerText, headerColor }: ICourseListProps) => {
	const { data: popularCourses, isLoading } = usePopularCoursesFetch();

	if (isLoading) return <div>Loading...</div>;

	return (
		<div>
			<CommonHeader text={headerText} color={headerColor} />
			{/* TypeError: popularCourses.slice(...).map is not a function 에러 발생
			에너 발생 이유 파악 중 */}
			{/* <GridWrapper>
				{popularCourses?.slice(0, 5).map((course, idx) => (
					<CourseCard key={idx} course={course} />
				))}
			</GridWrapper> */}
		</div>
	);
};

export default CourseList;

const Wrapper = styled.div`
	width: 100%;
	font-size: 32px;
	font-weight: bold;
	border-bottom: 2px solid rgba(0, 0, 0, 0.2);
	padding-bottom: 12px;
	padding-left: 45px;
	padding-top: 60px;
`;

const GridWrapper = styled.div`
	display: grid;
	grid-column-gap: 16px;
	grid-row-gap: 16px;
	grid-template-columns: repeat(5, 1fr);
	padding: 20px 35px;
`;

const CourseCardWrapper = styled.div`
	cursor: pointer;
	width: 100%;
	overflow: hidden;
	position: relative;
`;
