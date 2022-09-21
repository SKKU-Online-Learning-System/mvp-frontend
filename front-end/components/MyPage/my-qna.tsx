import MyPageLayout from '@components/MyPage/MyPageLayout';
import BreadCrumb from '@components/common/BreadCrumb';

const menu = ['질문/답변'];

const MyQnA = () => {
	return (
		<MyPageLayout>
			<BreadCrumb category={'MY PAGE'} menu={menu} />
		</MyPageLayout>
	);
};

export default MyQnA;
