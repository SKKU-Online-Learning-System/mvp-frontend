import React from 'react';

import Learning from '@components/MyPage/Learning/Learning';
import MyPageLayout from '@components/MyPage/MyPageLayout';
import History from '@components/MyPage/History/History';
import Completed from '@components/MyPage/Completed';
import Bookmark from '@components/MyPage/Bookmark';
import { GetServerSidePropsContext } from 'next';
import { MYPAGE_PATH } from 'constants/MyPage';
import MyQnA from '@components/MyPage/MyQna';

type PropsType = {
	category: string;
};

const MyPage = ({ category }: PropsType) => {
	const routeComponent = (category: string) => {
		switch (category) {
			case MYPAGE_PATH.HISTORY:
				return <History />;
			case MYPAGE_PATH.BOOKMARK:
				return <Bookmark />;
			case MYPAGE_PATH.COMPLETED:
				return <Completed />;
			case MYPAGE_PATH.LEARNING:
				return <Learning />;
			case MYPAGE_PATH.MY_QNA:
				return <MyQnA />;
			default:
				return <History />;
		}
	};

	return <MyPageLayout>{routeComponent(category)}</MyPageLayout>;
};

export async function getStaticProps({ params }: GetServerSidePropsContext) {
	const category = params!.category;
	return { props: { category } };
}

export async function getStaticPaths() {
	return { paths: [], fallback: 'blocking' };
}

export default MyPage;
