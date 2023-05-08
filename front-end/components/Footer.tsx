import React from 'react';
import styled from 'styled-components';
import { DEVICE_BREAKPOINT } from 'constants/breakpoint';
const Footer = () => {
	return (
		<Container>
			<div
				style={{
					display: 'flex',
					width: DEVICE_BREAKPOINT.DESKTOP,
					justifyContent: 'space-between',
				}}
			>
				<InfoBox>
					<div style={{ display: 'flex' }}>
						<img src="/images/main_logo.png" />
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
					<p>
						소프트웨어융합대학 Copyrght ⓒ 2022 SUNGKYUNKWAN UNIVERSITY ALL
						RIGHTS RESERVED.
					</p>
				</InfoBox>
				<InfoBox>
					<a href="https://www.skku.edu/skku/etc/pop_email.do">
						이메일 무단수집거부
					</a>
					<a href="https://www.skku.edu/skku/etc/private.do">
						개인정보처리방침
					</a>
					<a>Contact us</a>
				</InfoBox>
			</div>
		</Container>
	);
};

export default Footer;

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	min-width: ${DEVICE_BREAKPOINT.DESKTOP};
	background-color: #323232;
	color: #fefefe;
	margin-top: 60px;
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
	& a:not(:last-child):after {
		content: ' | ';
	}
`;
