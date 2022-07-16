import React from 'react';
import Layout from '@components/Layout';
import MainBanner from '@components/Main/MainBanner';
import Notice from '@components/Main/Notice';
import Dashboard from '@components/Main/Dashboard';
// 1920px 기준임. width별로 다르게 나와야함.
import CommonHeader from '@components/Main/CommonHeader';
import MidBanner from '@components/Main/MidBanner';
const Index = () => {
	return (
		<Layout>
			<MainBanner />
			<Notice />
			<Dashboard />
			<CommonHeader text={'내가 찜한 강의'} color={'red'} />
			<MidBanner />
			<CommonHeader text={'최근 강의 이어보기'} color={'orange'} />
		</Layout>
	);
};

export default Index;
