import React, { ReactElement, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faChartSimple,
	faBookOpen,
	faRankingStar,
} from '@fortawesome/free-solid-svg-icons';

import Compose from '../../components/Admin/composing/Compose';
import UserRanking from '../../components/Admin/user-ranking/UserRanking';
import ContentsManage from '../../components/Admin/contents-manage/ContentsManage';

const AdminIndex = (): ReactElement => {
	const [isComposeOpen, setIsComposeOpen] = useState(true);
	const [isUserRankingOpen, setIsUserRankingOpen] = useState(false);
	const [isContentsManageOpen, setIsContentsManageOpen] = useState(false);

	const modeController = (
		compose: boolean,
		rank: boolean,
		contents: boolean,
	) => {
		setIsComposeOpen(compose);
		setIsUserRankingOpen(rank);
		setIsContentsManageOpen(contents);
	};

	const handleSidebarBtnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		switch (e.currentTarget.id) {
			case 'compose':
				modeController(true, false, false);
				break;
			case 'user-ranking':
				modeController(false, true, false);
				break;
			case 'contents-manage':
				modeController(false, false, true);
				break;
		}
	};

	const handleSidebarBtnStyle = (open: boolean) => {
		const selected =
			' bg-[var(--color-onPrimary)] text-[var(--color-onSurface)]';
		const notSelected =
			' transition-all relative left-0 hover:left-0.5 hover:text-white';
		let sidebarBtnBasicStyle =
			'text-[var(--color-onPrimary-200)] rounded-2xl mb-12 px-4 py-2 text-xl font-bold w-full text-start';
		open
			? (sidebarBtnBasicStyle += selected)
			: (sidebarBtnBasicStyle += notSelected);
		return sidebarBtnBasicStyle;
	};

	return (
		<div className="min-h-full">
			<h2 className="select-none w-full bg-[var(--color-green-700)] p-8 font-['Gugi'] text-2xl text-white border-b-2 border-solid border-[var(--color-Background)]">
				온라인명륜당
			</h2>
			<div className="flex min-h-screen">
				<div className="w-1/6 min-h-full bg-[var(--color-Primary)] min-w-[280px]">
					<ul className="flex flex-col items-start justify-start h-full p-12">
						<li className="relative w-full">
							<button
								id="compose"
								className={handleSidebarBtnStyle(isComposeOpen)}
								onClick={handleSidebarBtnClick}
							>
								<FontAwesomeIcon icon={faChartSimple} className="mr-4" />
								편성
							</button>
						</li>
						<li className="relative w-full">
							<button
								id="user-ranking"
								className={handleSidebarBtnStyle(isUserRankingOpen)}
								onClick={handleSidebarBtnClick}
							>
								<FontAwesomeIcon icon={faRankingStar} className="mr-4" />
								유저 랭킹
							</button>
						</li>
						<li className="relative w-full">
							<button
								id="contents-manage"
								className={handleSidebarBtnStyle(isContentsManageOpen)}
								onClick={handleSidebarBtnClick}
							>
								<FontAwesomeIcon icon={faBookOpen} className="mr-4" />
								강좌 관리
							</button>
						</li>
					</ul>
				</div>
				{isComposeOpen ? (
					<Compose />
				) : isUserRankingOpen ? (
					<UserRanking />
				) : isContentsManageOpen ? (
					<ContentsManage />
				) : (
					''
				)}
			</div>
		</div>
	);
};

export default AdminIndex;
