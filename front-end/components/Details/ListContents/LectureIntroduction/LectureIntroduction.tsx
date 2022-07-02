import React from 'react';
import styled from 'styled-components';
const LectureIntroduction = () => {
	return (
		<Container>
			<div style={{ fontSize: '0.5rem', color: '#c2c1c1', fontWeight: 'bold' }}>
				OVERVIEW
			</div>
			<h2>강의 소개</h2>
			<hr />
			<h1>실전! 스프링 부트와 JPA 활용1</h1>
			<h3>초급자 대상의 스프링부트를 활용한 백엔드/웹 개발 강의입니다. </h3>
			<p>
				실무에 가까운 예제로, 스프링 부트와 JPA를 활용해서 웹 애플리케이션을
				설계하고 개발합니다. 이 과정을 통해{' '}
			</p>
			<div style={{ margin: '10px 0' }}>
				<img src="/images/check.png"></img>
				<span
					style={{
						color: '#393939',
						fontWeight: 'bold',
						fontSize: '1.4rem',
					}}
				>
					이런걸 배워요
				</span>
			</div>
			<ul>
				<li>
					스프링 부트와 JPA를 활용해서 실무에서 자바 웰 애플리케이션을 개발할 수
					있습니다.
				</li>
				<li>
					스프링 부트와 JPA를 활용해서 실무에서 자바 웰 애플리케이션을 개발할 수
					있습니다.
				</li>
				<li>
					스프링 부트와 JPA를 활용해서 실무에서 자바 웰 애플리케이션을 개발할 수
					있습니다.
				</li>
				<li>
					스프링 부트와 JPA를 활용해서 실무에서 자바 웰 애플리케이션을 개발할 수
					있습니다.
				</li>
			</ul>
		</Container>
	);
};

export default LectureIntroduction;

const Container = styled.div`
	width: 605px;
	/* height: 171px; */
	padding: 18px 23px;
	font-family: 'Noto Sans KR';
	border: solid;
	border-color: #dfdfdf;
	& li {
		border-bottom: solid;
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
