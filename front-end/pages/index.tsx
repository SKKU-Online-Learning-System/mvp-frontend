import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import CurationFloatingBar from '@components/Main/CurationFloatingBar';
import { selectIsLoggined } from 'store/feature/common/commonSelector';
import { RecentLecture } from '@components/Main/RecentLecture';
import ScrollToTopButton from '@components/ScrollToTopButton';
import { userLoginAuthState } from 'constants/commonState';
import CourseList from '@components/Main/CourseList';
import MainBanner from '@components/Main/MainBanner';
import mainAPI from '../apis/Main/index';
import { MainCourse } from 'types/Main';

type PropsType = {
	recommendedContents: MainCourse[][];
};

const titles = ['인기', '신규', '인공지능', '교양'];

const MainPage = ({ recommendedContents }: PropsType) => {
	const isLoggined = useSelector(selectIsLoggined);
	const [scrollY, setScrollY] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<section className="relative">
			<MainBanner contents={recommendedContents[0]} />
			<CurationFloatingBar />
			<div className="relative w-[1280px] m-auto font-['Noto Sans KR'] mb-24">
				{!!isLoggined && isLoggined === userLoginAuthState.LOGGINED && (
					<RecentLecture />
				)}
				{titles.map((title, idx) => (
					<CourseList
						headerText={`${title} 컨텐츠`}
						contents={recommendedContents[idx]}
						key={title}
					/>
				))}
			</div>
			{!!scrollY && <ScrollToTopButton />}
		</section>
	);
};

export async function getStaticProps() {
	const recommendedContents = await mainAPI.fetchRecommendedCourse();

	return { props: { recommendedContents }, revalidate: 60 * 30 };
}

export default MainPage;
