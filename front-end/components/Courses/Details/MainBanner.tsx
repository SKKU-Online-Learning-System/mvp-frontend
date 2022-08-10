import React from 'react';
import { useAppSelector } from 'store/app/hooks';
import { RootState } from 'store/app/store';
import styled from 'styled-components';
import MainText from './MainText';

const MainBanner = ({ imgUrl }: any) => {
	const { thumbnail } = useAppSelector(
		(state: RootState) => state.courseDetail.course,
	);
	imgUrl = process.env.NEXT_PUBLIC_API_SERVER + thumbnail;

	return (
		<Container>
			<LectureImg>
				<img crossOrigin="anonymous" src={imgUrl} alt="#" height="100%" />
			</LectureImg>
			<MainText />
		</Container>
	);
};

export default MainBanner;

const Container = styled.div`
	display: flex;
	width: 100%;
	height: 25rem;
	//TO DO:  responsible
	background-color: #063f80;
	padding: 0 40px 0 40px;
`;
const LectureImg = styled.div`
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
	background-repeat: no-repeat;
	background-size: cover;
`;
