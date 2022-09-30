import MyPageLayout from '@components/MyPage/MyPageLayout';
import BreadCrumb from '@components/common/BreadCrumb';
import { MYPAGE_MENU } from 'constants/MyPage';
import { MyPageTitle } from './MyPageTitle';

const menu = [MYPAGE_MENU.CURRENT_WATCHING_LECTURES];

const Learning = () => {
	return (
		<MyPageLayout>
			<BreadCrumb
				category={'MY PAGE'}
				menu={menu}
				containerPadding={'1rem 0'}
			/>

			<MyPageTitle title={MYPAGE_MENU.CURRENT_WATCHING_LECTURES} />
		</MyPageLayout>
	);
};

export default Learning;
