import React, { ReactElement } from 'react';
import { useRouter } from 'next/router';

import { MYPAGE_PATH } from 'constants/MyPage';
import Bookmark from '@components/MyPage/Bookmark';
import Completed from '@components/MyPage/Completed';
import History from '@components/MyPage/History/History';
import Learning from '@components/MyPage/Learning/Learning';
import MyQnA from '@components/MyPage/MyQna';
import MyPageLayout from '@components/MyPage/MyPageLayout';
import DashProfile from '@components/MyPage/Dashboard/DashProfile';

const MyPage = () => {
	const router = useRouter();
	const { category } = router.query as { category: string };

	const routeComponent = (category: string) => {
		switch (category) {
			// 최근 시청 강의
			case MYPAGE_PATH.HISTORY:
				return <History />;
			case MYPAGE_PATH.BOOKMARK:
				return <Bookmark />;
			// 수강 완료 강좌
			case MYPAGE_PATH.COMPLETED:
				return <Completed />;
			// 수강 중인 강좌
			case MYPAGE_PATH.LEARNING:
				return <Learning />;
			// 내 질문/답변
			case MYPAGE_PATH.MY_QNA:
				return <MyQnA />;
			default:
				return <DashProfile />;
		}
	};

	return <MyPageLayout>{routeComponent(category)}</MyPageLayout>;
};

export default MyPage;
