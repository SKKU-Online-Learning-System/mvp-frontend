import React from 'react';
import Link from 'next/link';

import { MYPAGE_PATH, MYPAGE_MENU } from 'constants/MyPage';

const SideMenu = () => {
	const root = '/my-page';
	const menus = [
		// { title: MYPAGE_MENU.DASHBOARD, path: root },
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
			<ul className="m-0 p-0">
				{menus.map((menu, idx) => (
					<Link key={idx} href={menu.path}>
						<div className="hover:bg-[#e2e2e2] text-[#595959] py-[0.8rem] px-4 list-none border-[1px] border-solid border-[#e4e4e4] cursor-pointer bg-[#fafafa] font-bold">
							<li>{menu.title}</li>
						</div>
					</Link>
				))}
			</ul>
		</>
	);
};

export default SideMenu;
