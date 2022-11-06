import React from 'react';
import styled from 'styled-components';
import MainBanner from '@components/Main/MainBanner';
// 1920px 기준임. width별로 다르게 나와야함.
import LectureList from '@components/Main/LectureList';
import MidBanner from '@components/Main/MidBanner';
import { RecentLecture } from '@components/Main/RecentLecture';
import { selectIsLoggined } from 'store/feature/common/commonSelector';
import { useSelector } from 'react-redux';
import { userLoginAuthState } from 'constants/commonState';
/*
TODO. <img> 컴포넌트 next에서 지원하는 Image로 변경 (장점 공부 후에 적용)
1. 로그인 케이스
	1.1. 최근 들은 강좌가 1개라도 있는경우 -> 그것 노출.
	1.2. 최근 들은 강좌가 0개인 경우 -> 인기강의 노출할지.. 아니면 아무것도 안보여줄지

2. 비로그인 케이스
	2.1. 인기강의 노출

한번만 더 유튜브썸네일 같은 컴포넌트 사용시, 재사용 가능하게 하나 공통으로 만들기
 
1. 로그인 여부 확인. 로그인 되어있으면 보여주면 됨. 강좌 개수 체크
*/
const Index = () => {
	const isLoggined = useSelector(selectIsLoggined);

	return (
		<>
			<MainBanner />
			<Wrapper>
				{!!isLoggined && isLoggined === userLoginAuthState.LOGGINED && (
					<RecentLecture />
				)}
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
