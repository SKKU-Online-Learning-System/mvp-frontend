import { useRouter } from 'next/router';
import withRouteGuard from '@components/withRouteGuard';
import { MYPAGE_PATH } from 'constants/MyPage';

import Bookmark from '@components/MyPage/bookmark';
import Completed from '@components/MyPage/completed';
import History from '@components/MyPage/history';
import Learning from '@components/MyPage/learning';
import MyQnA from '@components/MyPage/my-qna';
import Wishlist from '@components/MyPage/wishlist';
import MyPageIndex from './index';

const MyPage = () => {
	const router = useRouter();
	const { category } = router.query;

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
				return <MyPageIndex />;
		}
	};

	return category && routeComponent(category as string);
};

export default withRouteGuard(MyPage);
