import SideMenu from '@components/MyPage/SideMedu';
import { ReactChild } from 'react';
import styled from 'styled-components';

const MyPageLayout = ({ children }: { children: ReactChild }) => {
	return (
		<Container>
			<SideMenuBox>
				<SideMenu></SideMenu>
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
