import MyPageLayout from '@components/MyPage/MyPageLayout';
import BreadCrumb from '@components/common/BreadCrumb';

const menu = ['수강 중인 강좌'];

const Learning = () => {
	return (
		<MyPageLayout>
			<BreadCrumb category={'MY PAGE'} menu={menu} />
		</MyPageLayout>
	);
};

export default Learning;
