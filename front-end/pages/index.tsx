import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';

import MainBanner from '@components/Main/MainBanner';
import CourseList from '@components/Main/CourseList';
import { RecentLecture } from '@components/Main/RecentLecture';
import { selectIsLoggined } from 'store/feature/common/commonSelector';
import { userLoginAuthState } from 'constants/commonState';

const Index = (): ReactElement => {
	const isLoggined = useSelector(selectIsLoggined);

	return (
		<>
			<MainBanner />
			<div className='w-[1440px] m-auto font-["Noto Sans KR"]'>
				{!!isLoggined && isLoggined === userLoginAuthState.LOGGINED && (
					<RecentLecture />
				)}
				<CourseList headerText={'인기 강좌'} headerColor={'red'} />
				<CourseList
					headerText={'프로그래밍 분야 인기 강좌 모음'}
					headerColor={'purple'}
				/>
				<CourseList
					headerText={'보안 분야 인기 강좌 모음'}
					headerColor={'#df4bff'}
				/>
			</div>
		</>
	);
};

export default Index;
