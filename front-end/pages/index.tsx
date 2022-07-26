import React, { useState, useEffect } from 'react';
import Layout from '@components/Layout';
import styled from 'styled-components';
import MainBanner from '@components/Main/MainBanner';
import Notice from '@components/Main/Notice';
import Dashboard from '@components/Main/Dashboard';
// 1920px 기준임. width별로 다르게 나와야함.
import LectureList from '@components/Main/LectureList';
import MidBanner from '@components/Main/MidBanner';
import MidCategory from '@components/Main/MidCategory';
import axios from 'axios';

const Index = () => {
	useEffect(() => {
		axios
			.get(`${process.env.NEXT_PUBLIC_API_SERVER}auth/temp-login`)
			.then((res) => console.log(res.data));
	}, []);

	console.log(process.env.NEXT_PUBLIC_API_SERVER);
	return (
		<Wrapper>
			<MainBanner />
			<Notice />
			{/* <Dashboard /> */}
			<LectureList
				headerText={'추천 강의(카테고리 무관)'}
				headerColor={'red'}
			/>
			<MidBanner />
			{/* <LectureList headerText={'최근 강의 이어보기'} headerColor={'orange'} /> */}
			<MidCategory />
			<LectureList
				headerText={'프로그래밍 분야 인기 강의 모음'}
				headerColor={'purple'}
			/>
			<LectureList
				headerText={'보안 분야 인기 강의 모음'}
				headerColor={'#df4bff'}
			/>
		</Wrapper>
	);
};

export default Index;

const Wrapper = styled.div`
	font-family: Noto Sans KR;
`;
