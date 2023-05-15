import React from 'react';
import styled from 'styled-components';

const Bottom = () => {
	return (
		<>
			<BottomWrapper>
				<div
					style={{
						display: 'flex',
						justifyContent: 'flex-end',
						color: 'white',
					}}
				>
					<div>이메일 무단수집거부 |</div>
					<div>&nbsp;개인정보처리방침 |</div>
					<div>&nbsp;CONTACT US</div>
				</div>
				<div
					style={{
						display: 'flex',
					}}
				>
					<img src="/images/로고.png" alt="#" />
					<h2>온라인 명륜당</h2>
				</div>
				<div style={{ display: 'flex', flexDirection: 'column' }}>
					<div style={{ color: 'white', fontSize: '20px', margin: '8px 0' }}>
						성균관대학교 소프트웨어융합대학
					</div>
					<div style={{ color: 'rgba(255,255,255,0.6)' }}>
						경기도 수원시 장안구 서부로 2066 성균관대학교 자연과학캠퍼스
						소프트웨어융합대학
					</div>
					<div style={{ color: 'rgba(255,255,255,0.6)' }}>
						Copyright©2022 SUNGKYUNKWAN UNIVERSITY ALL RIGHTS RESERVED.
					</div>
				</div>
			</BottomWrapper>
		</>
	);
};

const BottomWrapper = styled.div`
	padding: 40px 40px;
	background-color: rgba(0, 0, 0, 0.7);
	display: flex;
	flex-direction: column;
`;

export default Bottom;
