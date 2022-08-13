import React from 'react';

import Header from './Header';
import styled from 'styled-components';
import Footer from './Footer';

interface LayoutProps {
	children?: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
	<LayoutBox>
		<Header />
		<ContentsBox>{children}</ContentsBox>

		<Footer />
	</LayoutBox>
);

const LayoutBox = styled.div`
	display: flex;
	//white-space: nowrap;
	flex-direction: column;
	margin-left: auto;
	margin-right: auto;
	height: 100vh;
	@media only screen and (min-width: 1440px) {
		/* width: 1650px; */
		width: 100vw;
	}
	@media only screen and (max-width: 1440px) {
		width: 100vw;
	}
`;

const ContentsBox = styled.div`
	flex: 1;
`;

export default Layout;
