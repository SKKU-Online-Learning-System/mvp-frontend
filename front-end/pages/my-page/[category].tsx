import React, { ReactElement } from 'react';
import { useRouter } from 'next/router';

import { MYPAGE_PATH } from 'constants/MyPage';
import Bookmark from '@components/MyPage/Bookmark';
import Completed from '@components/MyPage/Completed';
import History from '@components/MyPage/History';
import Learning from '@components/MyPage/Learning';
import MyQnA from '@components/MyPage/MyQna';
import Wishlist from '@components/MyPage/wishlist';

const MyPage = (): ReactElement | null => {
	const router = useRouter();
	const { category } = router.query as { category: string };

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
			case MYPAGE_PATH.WISHLIST:
				return <Wishlist />;
			default:
				return <History />;
		}
	};

	return category ? routeComponent(category) : null;
};

export default MyPage;
