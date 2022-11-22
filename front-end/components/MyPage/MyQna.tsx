import MyPageLayout from '@components/MyPage/MyPageLayout';
import BreadCrumb from '@components/common/BreadCrumb';
import { MYPAGE_MENU } from 'constants/MyPage';
import { MyPageTitle } from './MyPageTitle';
import styled from 'styled-components';

const menu = [MYPAGE_MENU.MY_QNA];

const MyQnA = () => {
	// 질문 불러오기.
	return (
		<MyPageLayout>
			<BreadCrumb
				category={'MY PAGE'}
				menu={menu}
				containerPadding={'1rem 0'}
			/>
			<MyPageTitle title={MYPAGE_MENU.MY_QNA} />
			<div style={{ width: '100%', overflowX: 'hidden' }}>
				<QuestionBox>기능 개발중에 있습니다.</QuestionBox>
			</div>
		</MyPageLayout>
	);
};

const QuestionBox = styled.div`
	width: 100%;
	height: 100%;
`;

export default MyQnA;
