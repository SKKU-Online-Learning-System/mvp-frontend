import Link from 'next/link';
import styled from 'styled-components';
import { MYPAGE_PATH, MYPAGE_MENU } from 'constants/MyPage';

const SideMenu = () => {
	const root = '/my-page';
	const menus = [
		{ title: MYPAGE_MENU.DASHBOARD, path: root },
		{
			title: MYPAGE_MENU.RECENT_WATCHING_LECTURES,
			path: `${root}/${MYPAGE_PATH.HISTORY}`,
		},
		{
			title: MYPAGE_MENU.CURRENT_WATCHING_LECTURES,
			path: `${root}/${MYPAGE_PATH.LEARNING}`,
		},
		{
			title: MYPAGE_MENU.COMPLETED_WATCHING_LECTURES,
			path: `${root}/${MYPAGE_PATH.COMPLETED}`,
		},
		{ title: MYPAGE_MENU.MY_QNA, path: `${root}/${MYPAGE_PATH.MY_QNA}` },
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
