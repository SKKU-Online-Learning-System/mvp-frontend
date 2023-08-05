import React from 'react';
import { useSelector } from 'react-redux';

import CurationFloatingBar from '@components/Main/CurationFloatingBar';
import { selectIsLoggined } from 'store/feature/common/commonSelector';
import { RecentLecture } from '@components/Main/RecentLecture';
import { userLoginAuthState } from 'constants/commonState';
import CourseList from '@components/Main/CourseList';
import MainBanner from '@components/Main/MainBanner';
import { ILatestLecture } from 'types/MyPage';
import mainAPI from '../apis/Main/index';
import { MainCourse } from 'types/Main';

type PropsType = {
	recommendedContents: MainCourse[][];
};

const MainPage = ({ recommendedContents }: PropsType) => {
	const isLoggined = useSelector(selectIsLoggined);

	return (
		<>
			<MainBanner contents={recommendedContents[0]} />
			<CurationFloatingBar />
			<div className="relative w-[1280px] m-auto font-['Noto Sans KR'] mb-24">
				{!!isLoggined && isLoggined === userLoginAuthState.LOGGINED && (
					<RecentLecture />
				)}
				<CourseList
					headerText={'인기 컨텐츠'}
					contents={recommendedContents[0]}
				/>
				<CourseList
					headerText={'신규 컨텐츠'}
					contents={recommendedContents[1]}
				/>
				<CourseList
					headerText={'인공지능 컨텐츠'}
					contents={recommendedContents[2]}
				/>
				<CourseList
					headerText={'교양 컨텐츠'}
					contents={recommendedContents[3]}
				/>
			</div>
		</>
	);
};

export async function getServerSideProps() {
	const recommendedContents = await mainAPI.fetchRecommendedCourse();

	return { props: { recommendedContents } };
}

export default MainPage;
