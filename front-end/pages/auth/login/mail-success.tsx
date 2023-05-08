import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const LoginMailSuccess = (): ReactElement => {
	return (
		<Container>
			<MessageBox>
				<Image src="/images/mail.png" width={180} height={165} alt="mail" />
				<h1>로그인 메일이 발송되었습니다!</h1>
				<div>이메일의 링크를 클릭하여 로그인 할 수 있습니다.</div>
			</MessageBox>
		</Container>
	);
};

export default LoginMailSuccess;

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #f0f0f0;
`;

const MessageBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding-bottom: 50px;
	width: 600px;
	height: 450px;
	background-color: white;
	border-radius: 30px;
`;
