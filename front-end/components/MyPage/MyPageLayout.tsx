import React, { ReactElement } from 'react';

import SideMenu from '@components/MyPage/SideMenu';

const MyPageLayout = ({
	children,
}: {
	children: ReactElement[] | string;
}): ReactElement => {
	return (
		<div className="flex w-[1280px] my-0 mx-auto font-['Noto Sans KR']">
			<div className="py-[10px] px-5 w-[20%]">
				<SideMenu />
			</div>
			<div className="py-[10px] px-5 w-[80%]">{children}</div>
		</div>
	);
};

export default MyPageLayout;
