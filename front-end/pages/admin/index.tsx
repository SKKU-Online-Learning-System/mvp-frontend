import React, { ReactElement, useState } from 'react';
import AdminCard from '@components/Admin/composing/AdminCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faChartSimple,
	faUser,
	faBookOpen,
	faRankingStar,
} from '@fortawesome/free-solid-svg-icons';

const sidebarBtnStyle = 'text-white mb-12 text-xl font-bold w-full text-start';

const AdminIndex = (): ReactElement => {
	const [isComposeOpen, setIsComposeOpen] = useState(true);
	const [isAdminManageOpen, setIsAdminManageOpen] = useState(false);
	const [isUserRankingOpen, setIsUserRankingOpen] = useState(false);
	const [isContentsManageOpen, setIsContentsManageOpen] = useState(false);

	const handleSidebarBtnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		switch (e.target.id) {
			case 'compose':
		}
	};

	return (
		<div className="h-full overflow-y-scroll">
			<h2 className="w-full bg-[var(--color-green-700)] p-8 font-['Gugi'] text-2xl text-white border-b-2 border-solid border-[var(--color-Background)]">
				온라인명륜당
			</h2>
			<div id="wrapper" className="flex flex-row h-full">
				<div
					id="sidebar"
					className="w-1/6 h-full bg-[var(--color-Primary)] mr-10 min-w-[240px]"
				>
					<ul className="flex flex-col items-start justify-start h-full p-12">
						<li className="w-full">
							<button
								id="compose"
								className={sidebarBtnStyle}
								onClick={handleSidebarBtnClick}
							>
								<FontAwesomeIcon icon={faChartSimple} className="mr-4" />
								편성
							</button>
						</li>
						<li className="w-full">
							<button
								id="admin-manage"
								className={sidebarBtnStyle}
								onClick={handleSidebarBtnClick}
							>
								<FontAwesomeIcon icon={faUser} className="mr-4" />
								ADMIN 관리
							</button>
						</li>
						<li className="w-full">
							<button
								id="user-ranking"
								className={sidebarBtnStyle}
								onClick={handleSidebarBtnClick}
							>
								<FontAwesomeIcon icon={faRankingStar} className="mr-4" />
								유저 랭킹
							</button>
						</li>
						<li className="w-full">
							<button
								id="contents-manage"
								className={sidebarBtnStyle}
								onClick={handleSidebarBtnClick}
							>
								<FontAwesomeIcon icon={faBookOpen} className="mr-4" />
								강좌 관리
							</button>
						</li>
					</ul>
				</div>
				<div
					id="contents"
					className="grid grid-cols-2 grid-rows-2 mt-14 gap-x-20 gap-y-20 pb-[100px]"
				>
					<AdminCard title="인기 컨텐츠" />
					<AdminCard title="신규 컨텐츠" />
					<AdminCard title="보안" />
					<AdminCard title="웹 개발" />
				</div>
			</div>
		</div>
	);
};

export default AdminIndex;
