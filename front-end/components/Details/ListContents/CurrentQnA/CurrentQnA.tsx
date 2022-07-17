import React from 'react';
import styled from 'styled-components';
import QnABox from './QnABox';
const CurrentQnA = () => {
	return (
		<Container>
			<header>
				<div
					style={{ fontSize: '0.5rem', color: '#c2c1c1', fontWeight: 'bold' }}
				>
					Recent Questions
				</div>
				<div style={{ display: 'flex' }}>
					<h2>최근 한 질문</h2>
					<button>MORE</button>
				</div>
			</header>
			<QnABox />
			<QnABox />
			<QnABox />
		</Container>
	);
};

export default CurrentQnA;
const Container = styled.div`
	width: 940px;
	font-family: 'Noto Sans KR';
	& header {
		margin: 0 0 16px 18px;
	}
	& li {
		border-bottom: solid;
		border-color: #dfdfdf;
		color: #393939;
		font-size: 0.95rem;
		margin: 3px 0;
	}
	& p {
		color: #bcbcbc;
		font-size: 0.8rem;
		font-weight: bold;
	}
	& ul {
		margin: 0;
		padding: 0 0 0 15px;
	}
	& h3,
	h1,
	h2 {
		margin: 0;
		color: #393939;
	}
	& h2 {
		font-weight: bold;
	}
`;
