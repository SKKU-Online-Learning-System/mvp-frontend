import React from 'react';

import Header from './Header';
import style from './Layout.module.scss';

interface LayoutProps{
  children?: React.ReactNode;
}

const Layout = ({children} : LayoutProps) => (
  <div className={style.layout}>
    <Header/>
    {children}
  </div>
);

export default Layout;