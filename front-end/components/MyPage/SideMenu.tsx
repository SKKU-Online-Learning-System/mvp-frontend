import React, { useState } from 'react';
import Link from 'next/link';

import { MYPAGE_PATH, MYPAGE_MENU } from 'constants/MyPage';

const SideMenu: React.FC = () => {
	const root = '/my-page';
	const menus = [
		{
			title: MYPAGE_MENU.RECENT_WATCHING_LECTURES,
			path: `${root}/${MYPAGE_PATH.HISTORY}`,
			type: useState(true),
		},
		{
			title: MYPAGE_MENU.CURRENT_WATCHING_LECTURES,
			path: `${root}/${MYPAGE_PATH.LEARNING}`,
			type: useState(false),
		},
		{
			title: MYPAGE_MENU.COMPLETED_WATCHING_LECTURES,
			path: `${root}/${MYPAGE_PATH.COMPLETED}`,
			type: useState(false),
		},
		{
			title: MYPAGE_MENU.MY_QNA,
			path: `${root}/${MYPAGE_PATH.MY_QNA}`,
			type: useState(false),
		},
	];

	return (
		<nav>
			<p className="text-xs mb-3 text-[var(--color-dark-1)]">학습</p>
			<ul>
				{menus.map((menu, idx) => (
					<li key={idx}>
						<Link href={menu.path}>
							<div
								// onClick={() => handleMenuClick(menu)}
								className={`rounded-lg text-sm hover:bg-[var(--color-gray-1)] py-[0.7rem] px-3 list-none cursor-pointer`}
							>
								<span>{menu.title}</span>
							</div>
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default SideMenu;
