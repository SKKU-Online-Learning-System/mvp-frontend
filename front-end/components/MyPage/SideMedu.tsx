import Link from 'next/link';
import styled from 'styled-components';

const SideMenu = () => {
	const root = '/my-page';
	const menus = [
		{ title: '대시보드', path: root },
		{ title: '최근 시청 강좌', path: `${root}/history` },
		{ title: '즐겨찾기 강좌', path: `${root}/bookmark` },
		{ title: '수강 중인 강좌', path: `${root}/learning` },
		{ title: '수강 완료 강좌', path: `${root}/completed` },
		{ title: '찜한 강좌', path: `${root}/wishlist` },
		{ title: '내 질문/답변', path: `${root}/my-qna` },
	];

	return (
		<>
			<ul>
				{menus.map((menu) => (
					<Link href={menu.path}>
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
