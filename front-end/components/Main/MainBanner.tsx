import React from 'react';
import styled from 'styled-components';

const imageUrlLists = [
	'images/test1.png',
	'images/test2.png',
	'images/test3.png',
	'images/test4.png',
	'images/test5.png',
];

const MainBanner = () => {
	return (
		<Container>
			<CardWrapper>
				{imageUrlLists.map((url, idx) => (
					<ImageComponent imageUrl={url} key={idx} />
				))}
			</CardWrapper>
		</Container>
	);
};

const ImageComponent = ({ imageUrl }) => {
	return (
		<div
			style={{ paddingRight: '10px', overflow: 'auto', cursor: 'pointer' }}
			onClick={() => alert('Clicked')}
		>
			<img src={imageUrl} alt="#" width="100%" />
		</div>
	);
};

const Container = styled.div`
	width: 100%;	
	background: linear-gradient(#1f5191, #022240);
	padding: 50px 60px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const CardWrapper = styled.div`
	display: flex;
	max-width: 1650px; // 이 부분도 CONST로 관리 해야함.
`;

export default MainBanner;
