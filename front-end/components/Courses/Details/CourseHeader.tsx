import React, { SyntheticEvent } from 'react';
import { useAppSelector } from 'store/app/hooks';
import { RootState } from 'store/app/store';
import styled from 'styled-components';
import CourseInfo from './CourseInfo';
import { defaultErrorImage } from 'constants/index';
interface UrlProps {
	url: string;
}
const CourseHeader = () => {
	const { thumbnail, id } = useAppSelector(
		(state: RootState) => state.courseDetail.course,
	);
	console.log(thumbnail);
	const handleImgError = (e: SyntheticEvent<HTMLImageElement>) => {
		(e.target as HTMLImageElement).src = defaultErrorImage;
	};
	return (
		<Container>
			<LectureImg url={thumbnail} />
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

const LectureImg = styled.div<UrlProps>`
	height: 100%;
	width: 50%;
	background: linear-gradient(
			to right,
			rgba(6, 63, 128, 1) 0%,
			rgba(6, 63, 128, 0.7) 5%,
			rgba(6, 63, 128, 0.5) 10%,
			rgba(6, 63, 128, 0) 15%,
			rgba(6, 63, 128, 0) 85%,
			rgba(6, 63, 128, 0.5) 90%,
			rgba(6, 63, 128, 0.7) 95%,
			rgba(6, 63, 128, 1) 100%
		),
		url(${(props) => props.url});
	background-repeat: no-repeat;
	background-size: cover;
`;
