import MyPageLayout from '@components/MyPage/MyPageLayout';
import BreadCrumb from '@components/common/BreadCrumb';
import { MyPageTitle } from './MyPageTitle';
import { MYPAGE_MENU } from 'constants/MyPage';

const menu = [MYPAGE_MENU.COMPLETED_WATCHING_LECTURES];

const Completed = () => {
	return (
		<MyPageLayout>
			<BreadCrumb
				category={'MY PAGE'}
				menu={menu}
				containerPadding={'1rem 0'}
			/>
			<MyPageTitle title={MYPAGE_MENU.COMPLETED_WATCHING_LECTURES} />
		</MyPageLayout>
	);
};

export default Completed;
