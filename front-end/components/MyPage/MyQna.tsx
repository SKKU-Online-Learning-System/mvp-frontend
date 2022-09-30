import MyPageLayout from '@components/MyPage/MyPageLayout';
import BreadCrumb from '@components/common/BreadCrumb';
import { MYPAGE_MENU } from 'constants/MyPage';

const menu = [MYPAGE_MENU.MY_QNA];

const MyQnA = () => {
	return (
		<MyPageLayout>
			<BreadCrumb category={'MY PAGE'} menu={menu} />
		</MyPageLayout>
	);
};

export default MyQnA;
