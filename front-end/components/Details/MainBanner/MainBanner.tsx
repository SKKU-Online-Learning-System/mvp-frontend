import React from 'react';
import styled from 'styled-components';
import MainText from './MainText';

const MainBanner = () => {
	return (
		<Container>
			<LectureImg />
			<MainText />
		</Container>
	);
};

export default MainBanner;

const Container = styled.div`
	display: flex;
	width: 100%;
	height: 25vw;
	//TO DO:  responsible
	background-color: #063f80;
	padding: 0 40px 0 40px;
`;
const LectureImg = styled.img`
	height: 100%;
	width: 50%;
	background-image: url(images/main_img.jpg);
	background-size: cover;
	background-position: center 50%;
`;
