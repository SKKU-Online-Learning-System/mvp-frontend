import React from 'react';
import styled from 'styled-components';
const MainText = () => {
	return (
		<Container>
			<h1>실전! 스프링 부트와 JPA 활용1</h1>
			<h3>#스프링부트를 활용한 웹 애플리케이션 개발</h3>
			<p>강사: 홍길동</p>
		</Container>
	);
};

export default MainText;

const Container = styled.div`
	display: flex;
	width: 40%;
	flex-direction: column;
	justify-content: center;
	color: white;
	padding-left: 50px;
	& h1,
	h2,
	h3,
	p {
		margin: 5px;
	}
`;
