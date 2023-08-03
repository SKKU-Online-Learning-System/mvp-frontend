import React from 'react';
import { useRouter } from 'next/router';

import Learning from '@components/MyPage/Learning/Learning';
import MyPageLayout from '@components/MyPage/MyPageLayout';
import History from '@components/MyPage/History/History';
import Completed from '@components/MyPage/Completed';
import Bookmark from '@components/MyPage/Bookmark';
import Profile from '@components/MyPage/Profile';
import { MYPAGE_PATH } from 'constants/MyPage';
import MyQnA from '@components/MyPage/MyQna';

const MyPage = () => {
	const router = useRouter();
	const { category } = router.query as { category: string };

	const routeComponent = (category: string) => {
		switch (category) {
			case MYPAGE_PATH.PROFILE:
				return <Profile />;
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
				return <Profile />;
		}
	};

	return <MyPageLayout>{routeComponent(category)}</MyPageLayout>;
};

export default MyPage;
