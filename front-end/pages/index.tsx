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
				<CourseList
					headerText={'인기 컨텐츠'}
					headerColor="#ff0000"
					order={0}
				/>
				<CourseList
					headerText={'신규 컨텐츠'}
					headerColor="#ff0000"
					order={1}
				/>
				<CourseList
					headerText={'인공지능 컨텐츠'}
					headerColor="#ff0000"
					order={2}
				/>
				<CourseList
					headerText={'데이터 사이언스 컨텐츠'}
					headerColor="#ff0000"
					order={3}
				/>
			</div>
		</>
	);
};

export default Index;
