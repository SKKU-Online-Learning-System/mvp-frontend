import Link from 'next/link';
import styled from 'styled-components';
import { MYPAGE_PATH } from 'constants/MyPage';

const SideMenu = () => {
	const root = '/my-page';
	const menus = [
		{ title: '대시보드', path: root },
		{ title: '최근 시청 강좌', path: `${root}/${MYPAGE_PATH.HISTORY}` },
		// { title: '즐겨찾기 강좌', path: `${root}/${MYPAGE_PATH.BOOKMARK}` },
		{ title: '수강 중인 강좌', path: `${root}/${MYPAGE_PATH.LEARNING}` },
		{ title: '수강 완료 강좌', path: `${root}/${MYPAGE_PATH.COMPLETED}` },
		// { title: '찜한 강좌', path: `${root}/${MYPAGE_PATH.WISHLIST}` },
		{ title: '내 질문/답변', path: `${root}/${MYPAGE_PATH.MY_QNA}` },
	];

	return (
		<>
			<ul>
				{menus.map((menu, idx) => (
					<Link key={idx} href={menu.path}>
						<MenuBox>
							<li>{menu.title}</li>
						</MenuBox>
					</Link>
				))}
			</ul>
		</>
	);
};

export default SideMenu;

const MenuBox = styled.div`
	padding: 0.8rem 1rem;
	list-style: none;
	border: 1px solid #e4e4e4;
	cursor: pointer;
	background: #fafafa;
	font-weight: bold;
	color: #595959;
	&:hover {
		background-color: #e2e2e2;
	}
`;
