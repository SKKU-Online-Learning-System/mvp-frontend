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
		{children}
		<Footer />
	</LayoutBox>
);

const LayoutBox = styled.div`
	display: flex;
	//white-space: nowrap;
	flex-direction: column;
	align-items: center;
	margin: 0 auto;
`;

export default Layout;
