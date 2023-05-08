import React, { ReactElement } from 'react';
import styled from 'styled-components';

import SideMenu from '@components/MyPage/SideMenu';

const MyPageLayout = ({
	children,
}: {
	children: ReactElement;
}): ReactElement => {
	return (
		<Container>
			<SideMenuBox>
				<SideMenu />
			</SideMenuBox>
			<ContentsBox>{children}</ContentsBox>
		</Container>
	);
};

export default MyPageLayout;

const Container = styled.div`
	display: flex;
	width: 1200px;
	margin: 0 auto;
	font-family: 'Noto Sans KR';
`;
const SideMenuBox = styled.div`
	padding: 10px 20px;
	width: 20%;
	ul {
		margin: 0;
		padding: 0;
	}
`;
const ContentsBox = styled.div`
	padding: 10px 20px;
	width: 80%;
`;
