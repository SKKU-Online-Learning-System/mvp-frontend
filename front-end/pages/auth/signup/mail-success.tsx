import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const SignupMailSuccess = (): ReactElement => {
	return (
		<Container>
			<MessageBox>
				<Image src="/images/mail.png" width={180} height={165} alt="mail" />
				<h1>회원가입을 환영합니다!</h1>
				<div>이메일 인증을 위한 메일이 발송되었습니다.</div>
				<div>회원가입 완료를 위해 이메일의 링크를 클릭해주세요.</div>
			</MessageBox>
		</Container>
	);
};

export default SignupMailSuccess;

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
