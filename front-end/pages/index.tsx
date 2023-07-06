import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';

import MainBanner from '@components/Main/MainBanner';
import CourseList from '@components/Main/CourseList';
import { RecentLecture } from '@components/Main/RecentLecture';
import { selectIsLoggined } from 'store/feature/common/commonSelector';
import { userLoginAuthState } from 'constants/commonState';

// Todo: CourseList 별 headerColor 값 바꿀 것
const Index = (): ReactElement => {
	const isLoggined = useSelector(selectIsLoggined);

	return (
		<>
			<MainBanner />
			<div className="w-[1280px] m-auto font-['Noto Sans KR'] my-24">
				{!!isLoggined && isLoggined === userLoginAuthState.LOGGINED && (
					<RecentLecture />
				)}
				<CourseList headerText={'인기 컨텐츠'} headerColor="#ff0000" />
				<CourseList headerText={'신규 컨텐츠'} headerColor="#ff0000" />
				<CourseList headerText={'인기카테고리1 컨텐츠'} headerColor="#ff0000" />
				<CourseList headerText={'인기카테고리2 컨텐츠'} headerColor="#ff0000" />
			</div>
		</>
	);
};

export default Index;
