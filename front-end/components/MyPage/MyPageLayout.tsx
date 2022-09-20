import SideMenu from '@components/MyPage/SideMenu';
import styled from 'styled-components';

interface Props {
	children: React.ReactNode;
}

const MyPageLayout = ({ children }: Props) => {
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
