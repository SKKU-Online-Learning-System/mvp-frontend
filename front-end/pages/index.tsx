import React, { useEffect } from 'react';
import styled from 'styled-components';
import MainBanner from '@components/Main/MainBanner';
import Notice from '@components/Main/Notice';
// 1920px 기준임. width별로 다르게 나와야함.
import LectureList from '@components/Main/LectureList';
import MidBanner from '@components/Main/MidBanner';
import MidCategory from '@components/Main/MidCategory';
import axiosInstance from 'apis';
import { useAppDispatch } from '../store/app/hooks';
import { setIsLoggined } from 'store/feature/auth/userAuthSlice';
import { userLoginAuthState } from 'constants/userAuthState';

const Index = () => {
	const dispatch = useAppDispatch();

	// useEffect(() => {
	// 	axiosInstance
	// 		.get('/auth/temp-login')
	// 		.then((res) => dispatch(setIsLoggined(userLoginAuthState.LOGGINED)));
	// }, []);

	return (
		<>
			<MainBanner />
			<Wrapper>
				{/* <Notice /> */}
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
		</>
	);
};

export default Index;

const Wrapper = styled.div`
	width: 1440px;
	margin: auto;
	font-family: Noto Sans KR;
`;
