import React from 'react';
import styled from 'styled-components';
import MainBanner from '@components/Main/MainBanner';
// 1920px 기준임. width별로 다르게 나와야함.
import LectureList from '@components/Main/LectureList';
import MidBanner from '@components/Main/MidBanner';
const Index = () => {
	return (
		<>
			<MainBanner />
			<Wrapper>
				<LectureList headerText={'인기 강의'} headerColor={'red'} />
				<MidBanner />
				<LectureList
					headerText={'프로그래밍 분야 인기 강의 모음'}
					headerColor={'purple'}
				/>
				<LectureList
					headerText={'보안 분야 인기 강의 모음'}
					headerColor={'#df4bff'}
				/>
			</Wrapper>
		</>
	);
};

export default Index;

const Wrapper = styled.div`
	width: 1440px;
	margin: auto;
	font-family: Noto Sans KR;
`;
