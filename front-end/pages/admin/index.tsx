import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ContentsManage from '../../components/Admin/contents-manage/ContentsManage';
import NoticesManage from '@components/Admin/notices-manage/NoticesManage';
import UserRanking from '../../components/Admin/user-ranking/UserRanking';
import Compose from '../../components/Admin/composing/Compose';
import menus from '../../constants/Admin/index';

const AdminIndex = () => {
	const [title, setTitle] = useState<string>(menus[0].title);
	const [opens, setOpens] = useState<boolean[]>([true, false, false, false]);

	const handleSidebarBtnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		switch (e.currentTarget.textContent) {
			case menus[0].title:
				setOpens([true, false, false, false]);
				setTitle(menus[0].title);
				break;
			case menus[1].title:
				setOpens([false, true, false, false]);
				setTitle(menus[1].title);
				break;
			case menus[2].title:
				setOpens([false, false, true, false]);
				setTitle(menus[2].title);
				break;
			case menus[3].title:
				setOpens([false, false, false, true]);
				setTitle(menus[3].title);
				break;
		}
	};

	const handleSidebarBtnStyle = (open: boolean) => {
		const selected =
			' bg-[var(--color-onPrimary)] text-[var(--color-onSurface)] select-none';
		const notSelected =
			' transition-all relative left-0 hover:left-0.5 hover:text-white';
		let sidebarBtnBasicStyle =
			'text-[var(--color-onPrimary-200)] rounded-tl-lg rounded-bl-lg mb-12 px-4 py-2 text-xl font-bold w-full text-start';
		open
			? (sidebarBtnBasicStyle += selected)
			: (sidebarBtnBasicStyle += notSelected);
		return sidebarBtnBasicStyle;
	};

	return (
		<div className="min-h-full">
			<h2 className="select-none w-full bg-[var(--color-green-700)] p-8 font-['Gugi'] text-2xl text-white border-b-2 border-solid border-[var(--color-Background)]">
				{`온라인명륜당 > Admin > ${title}`}
			</h2>
			<div className="flex min-h-screen">
				<div className="w-1/6 min-h-full bg-[var(--color-Primary)] min-w-[280px]">
					<ul className="flex flex-col items-start justify-start h-full p-12 pr-0">
						{menus.map((menu, idx) => {
							const isClicked = opens[idx];

							return (
								<li id={idx.toString()} className="relative w-full" key={idx}>
									<button
										className={handleSidebarBtnStyle(isClicked)}
										onClick={handleSidebarBtnClick}
									>
										<FontAwesomeIcon icon={menu.icon} className="mr-4" />
										{menu.title}
									</button>
								</li>
							);
						})}
					</ul>
				</div>
				{opens[0] ? (
					<Compose />
				) : opens[1] ? (
					<UserRanking />
				) : opens[2] ? (
					<ContentsManage />
				) : opens[3] ? (
					<NoticesManage />
				) : null}
			</div>
		</div>
	);
};

export default AdminIndex;
