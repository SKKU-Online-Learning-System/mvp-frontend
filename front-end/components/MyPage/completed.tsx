import MyPageLayout from '@components/MyPage/MyPageLayout';
import BreadCrumb from '@components/common/BreadCrumb';

const menu = ['수강 완료 강좌'];

const Completed = () => {
	return (
		<MyPageLayout>
			<BreadCrumb category={'MY PAGE'} menu={menu} />
		</MyPageLayout>
	);
};

export default Completed;
