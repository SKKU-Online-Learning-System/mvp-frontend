import React from 'react';
import styled from 'styled-components';
import MainBanner from '@components/Main/MainBanner';
import CourseList from '@components/Main/CourseList';
import MidBanner from '@components/Main/MidBanner';
import { RecentLecture } from '@components/Main/RecentLecture';
import { selectIsLoggined } from 'store/feature/common/commonSelector';
import { useSelector } from 'react-redux';
import { userLoginAuthState } from 'constants/commonState';
/*
TODO. <img> 컴포넌트 next에서 지원하는 Image로 변경 (장점 공부 후에 적용)
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
				<CourseList headerText={'인기 강좌'} headerColor={'red'} />
				<MidBanner />
				<CourseList
					headerText={'프로그래밍 분야 인기 강좌 모음'}
					headerColor={'purple'}
				/>
				<CourseList
					headerText={'보안 분야 인기 강좌 모음'}
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
