import React from 'react';
import styled from 'styled-components';
import { CardList } from './CardList';

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
			<CardList imageUrlLists={imageUrlLists} />
		</Container>
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

export default MainBanner;
