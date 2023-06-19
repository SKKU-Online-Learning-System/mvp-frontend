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
			<div className="w-[1280px] m-auto font-['Noto Sans KR']">
				{!!isLoggined && isLoggined === userLoginAuthState.LOGGINED && (
					<RecentLecture />
				)}
				<CourseList headerText={'인기 컨텐츠'} headerColor={'red'} />
				<CourseList headerText={'신규 컨텐츠'} headerColor={'purple'} />
				<CourseList
					headerText={'인기카테고리1 컨텐츠'}
					headerColor={'#df4bff'}
				/>
				<CourseList
					headerText={'인기카테고리2 컨텐츠'}
					headerColor={'#df4bff'}
				/>
			</div>
		</>
	);
};

export default Index;
