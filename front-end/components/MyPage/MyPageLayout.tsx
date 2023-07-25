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
		<div>
			<div className="flex flex-1 max-w-[1200px] p-8 my-0 mx-auto font-['Noto Sans KR']">
				<aside className="pr-2.5 w-[20%] ">
					<SideMenu />
				</aside>
				<div className="ml-8 w-[80%]">{children}</div>
			</div>
		</div>
	);
};

export default MyPageLayout;
