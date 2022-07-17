import React from 'react';
import styled from 'styled-components';
const Footer = () => {
	return (
		<Container>
			<InfoBox>
				<div style={{ display: 'flex' }}>
					<img src="images/main_logo.png" />
					<div
						style={{
							fontFamily: 'Gugi',
							fontSize: '2rem',
							margin: '0 10px',
							color: '#c7c6c6',
						}}
					>
						온라인 명륜당
					</div>
				</div>
				<p>성균관대학교 소프트웨어융합대학</p>
				<p>경기도 수원시 장안구 서부로 2066 성균관대학교 자연과학캠퍼스</p>
				<p>소프트웨어융합대학 Copyrght ⓒ 2022 S</p>
			</InfoBox>
			<InfoBox>
				<a href="https://www.skku.edu/skku/etc/pop_email.do">
					이메일 무단수집거부
				</a>
				<span> | </span>
				<a href="https://www.skku.edu/skku/etc/private.do">개인정보처리방침</a>
				<span> | </span>
				<a>Contact us</a>
			</InfoBox>
		</Container>
	);
};

export default Footer;

const Container = styled.div`
	width: 100%;
	display: flex;
	background-color: #323232;
	color: #fefefe;
	padding: 0 65px;
	justify-content: space-between;
`;
const InfoBox = styled.div`
	margin: 34px;
	& a {
		color: #fefefe;
		text-decoration: none;
	}
	& a:hover {
		color: #c2d45e;
	}
`;
