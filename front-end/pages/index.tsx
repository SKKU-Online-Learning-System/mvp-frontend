import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';

import MainBanner from '@components/Main/MainBanner';
import CourseList from '@components/Main/CourseList';
import { RecentLecture } from '@components/Main/RecentLecture';
import CurationFloatingBar from '@components/Main/CurationFloatingBar';
import { selectIsLoggined } from 'store/feature/common/commonSelector';
import { userLoginAuthState } from 'constants/commonState';

const Index = (): ReactElement => {
	const isLoggined = useSelector(selectIsLoggined);

	return (
		<>
			<MainBanner />
			<CurationFloatingBar />
			<div className="relative w-[1280px] m-auto font-['Noto Sans KR'] mb-24">
				{!!isLoggined && isLoggined === userLoginAuthState.LOGGINED && (
					<RecentLecture />
				)}
				<CourseList headerText={'인기 컨텐츠'} order={0} />
				<CourseList headerText={'신규 컨텐츠'} order={1} />
				<CourseList headerText={'인공지능 컨텐츠'} order={2} />
				<CourseList headerText={'교양 컨텐츠'} order={3} />
			</div>
		</>
	);
};

export default Index;
