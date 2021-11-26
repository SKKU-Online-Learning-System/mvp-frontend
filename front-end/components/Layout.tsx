import React from 'react';

import Header from './Header';
import styled from 'styled-components';

interface LayoutProps {
	children?: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
	<LayoutBox>
		<Header />
		{children}
	</LayoutBox>
);

const LayoutBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-left: auto;
	margin-right: auto;
	@media only screen and (min-width: 1440px) {
		width: 1650px;
	}
	@media only screen and (max-width: 1440px) {
		width: 100vw;
	}
`;

export default Layout;
