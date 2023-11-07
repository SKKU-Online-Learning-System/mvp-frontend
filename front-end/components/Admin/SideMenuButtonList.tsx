import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import menus from 'constants/Admin';

type PropsType = {
	opens: boolean[];
	setOpens: (opens: boolean[]) => void;
	setTitle: (title: string) => void;
};

const SideMenuButtonList = ({
	opens,
	setOpens,
	setTitle,
}: PropsType): JSX.Element => {
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
		<ul className="flex flex-col items-start justify-start h-full p-12 pr-0">
			{menus.map((menu, idx) => {
				const isClicked = opens[idx];

				return (
					<li id={idx.toString()} className="relative w-full" key={menu.title}>
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
	);
};

export default SideMenuButtonList;
