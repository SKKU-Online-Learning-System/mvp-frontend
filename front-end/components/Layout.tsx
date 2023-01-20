import React from 'react';

import Header from './Header';
import styled from 'styled-components';
import Footer from './Footer';
import ErrorManager from '../pages/ErrorManager';

interface LayoutProps {
	children?: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
	<LayoutBox>
		<Header />
		<ErrorManager>
			<ContentsBox>{children}</ContentsBox>
		</ErrorManager>
		<Footer />
	</LayoutBox>
);

const LayoutBox = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
	width: 100vw;
	max-width: 100%; // 100vw scrollbar issue
`;

const ContentsBox = styled.div`
	flex: 1;
`;

export default Layout;
