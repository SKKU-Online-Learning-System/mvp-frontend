import React, { useState } from 'react';
import Link from 'next/link';

import { MYPAGE_PATH, MYPAGE_MENU } from 'constants/MyPage';
const root = '/my-page';
const menus = [
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
	{
		title: MYPAGE_MENU.MY_QNA,
		path: `${root}/${MYPAGE_PATH.MY_QNA}`,
	},
];
const SideMenu: React.FC = () => {
	const [isClicked, setIsClicked] = useState(menus[0].title);
	const handleMenuClick = (event: string) => {
		setIsClicked((prev) => event);
	};
	console.log(isClicked);
	return (
		<nav>
			<h3 className="font-[Gugi] text-[var(--color-onPrimary)] m-auto flex place-content-center mt-9">
				온라인 명륜당
			</h3>
			<p className="text-xs mb-3 ml-5 text-[var(--color-onPrimary)] mt-4">
				{/* 학습 */}
			</p>
			<ul>
				{menus.map((menu, idx) => (
					<li key={idx}>
						<Link href={menu.path}>
							<div
								onClick={() => handleMenuClick(menu.title)}
								className={`${
									isClicked === menu.title
										? ' bg-[var(--color-Surface)] text-var[(--color-onSurface)]'
										: 'text-[var(--color-onPrimary)] hover:opacity-70'
								} ml-6 my-1 rounded-l-lg text-sm  py-[0.7rem] px-3 list-none cursor-pointer`}
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
