import React, { ReactElement } from 'react';

import SideMenu from '@components/MyPage/SideMenu';
import { MyPageTitle } from './MyPageTitle';
import { MYPAGE_MENU } from 'constants/MyPage';

const MyPageLayout = ({
	children,
}: {
	children: ReactElement[] | ReactElement<any, string> | string;
}) => {
	return (
		<div className="w-full h-full flex flex-1 my-0 mx-auto font-['Noto Sans KR']">
			<aside className="w-[10%] tbl:w-[20%] h-full py-8 bg-[var(--color-Primary)]">
				<SideMenu />
			</aside>

			<div className="w-[90%] tbl:w-[80%] bg-[var(--color-Surface)]">
				{children}
			</div>
		</div>
	);
};

export default MyPageLayout;
