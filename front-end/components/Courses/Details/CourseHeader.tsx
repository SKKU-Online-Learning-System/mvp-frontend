import React from 'react';
import { useAppSelector } from 'store/app/hooks';
import { RootState } from 'store/app/store';
import styled from 'styled-components';
import CourseInfo from './CourseInfo';

const CourseHeader = () => {
	const { thumbnail, id } = useAppSelector(
		(state: RootState) => state.courseDetail.course,
	);

	return (
		<Container>
			<CourseThumbnailBox>
				<img crossOrigin="anonymous" src={thumbnail} alt="#" />
			</CourseThumbnailBox>
			<CourseInfoBox>
				<CourseInfo />
			</CourseInfoBox>
		</Container>
	);
};

export default CourseHeader;

const Container = styled.div`
	display: flex;
	width: 100%;
	height: 25rem;
	//TO DO:  responsible
	background-color: #063f80;
	padding: 0 40px;
`;

const CourseThumbnailBox = styled.div`
	display: block;
	height: 100%;
	width: 50%;
	img {
		display: block;
		margin: 0 auto;
		height: 100%;
	}
`;

const CourseInfoBox = styled.div`
	display: flex;
	height: 100%;
	width: 50%;
`;
