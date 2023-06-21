import React, { ReactElement } from 'react';

import Header from './Header';
import Footer from './Footer';
import ErrorManager from '../pages/ErrorManager';

const Layout = ({ children }: any): ReactElement => (
	<div className="flex flex-col w-screen h-screen max-w-full">
		<Header />
		<ErrorManager>
			<div className="flex-1 pb-15">{children}</div>
		</ErrorManager>
		<Footer />
	</div>
);

export default Layout;
