import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

import CurationFloatingBar from '@components/Main/CurationFloatingBar';
import { selectIsLoggined } from 'store/feature/common/commonSelector';
import { RecentLecture } from '@components/Main/RecentLecture';
import { userLoginAuthState } from 'constants/commonState';
import CourseList from '@components/Main/CourseList';
import MainBanner from '@components/Main/MainBanner';
import mainAPI from '../apis/Main/index';
import { MainCourse } from 'types/Main';

type PropsType = {
	recommendedContents: MainCourse[][];
};

const MainPage = ({ recommendedContents }: PropsType) => {
	const isLoggined = useSelector(selectIsLoggined);

	return (
		<section className="relative">
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
			<button
				onClick={() => {
					window.scrollTo(0, 0);
				}}
				className="fixed shadow-lg bottom-[50px] right-[50px] w-[50px] h-[50px] text-2xl text-white bg-black rounded-full flex justify-center items-center transition-all hover:bg-[#393939] hover:text-[28px]"
			>
				<FontAwesomeIcon icon={faAngleUp} />
			</button>
		</section>
	);
};

export async function getStaticProps() {
	const recommendedContents = await mainAPI.fetchRecommendedCourse();

	return { props: { recommendedContents }, revalidate: 60 * 30 };
}

export default MainPage;
