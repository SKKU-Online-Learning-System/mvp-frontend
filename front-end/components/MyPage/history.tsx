import { useEffect } from 'react';
import styled from 'styled-components';

import MyPageLayout from '@components/MyPage/MyPageLayout';
import BreadCrumb from '@components/common/BreadCrumb';

import axiosInstance from 'apis';
import { AxiosResponse, AxiosError } from 'axios';

const menu = ['최근 시청 강좌'];

const History = () => {
	useEffect(() => {
		axiosInstance
			.get('history/latest')
			.then((res: AxiosResponse) => {
				console.log(res.data);
			})
			.catch((error: AxiosError) => {
				console.warn(error);
			});
	}, []);

	return (
		<MyPageLayout>
			<BreadCrumb
				category={'MY PAGE'}
				menu={menu}
				containerPadding={'1rem 0'}
			/>
			<Title />

			<GridWrapper>
				<div style={{ width: '100%', background: 'red' }}>1</div>
				<div style={{ width: '100%', background: 'red' }}>1</div>
				<div style={{ width: '100%', background: 'red' }}>1</div>
				<div style={{ width: '100%', background: 'red' }}>1</div>
				<div style={{ width: '100%', background: 'red' }}>1</div>
				<div style={{ width: '100%', background: 'red' }}>1</div>
				<div style={{ width: '100%', background: 'red' }}>1</div>
				<div style={{ width: '100%', background: 'red' }}>1</div>
				<div style={{ width: '100%', background: 'red' }}>1</div>
			</GridWrapper>
		</MyPageLayout>
	);
};

const Title = () => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				width: '100%',
				background: 'rgba(0, 0, 0, 0.7)',
				padding: '10px 20px 10px 20px',
				lineHeight: '28px',
			}}
		>
			<span style={{ color: '#8d8e8e', fontSize: '16px' }}>MY PAGE</span>
			<span style={{ color: 'white', fontSize: '32px', paddingBottom: '8px' }}>
				학습중인 강좌
			</span>
		</div>
	);
};

const GridWrapper = styled.div`
	display: grid;
	border: 1px solid grey;
	grid-column-gap: 16px;
	grid-row-gap: 16px;
	grid-template-rows: repeat(3, 1fr);
	grid-template-columns: repeat(4, 1fr);
`;

export default History;
