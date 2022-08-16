import { sendLogInRequest } from 'apis/LogIn/logInApi';
import { AxiosResponse } from 'axios';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 150px;
	margin-top: 50px;
`;

const Input = styled.input`
	position: relative;
	overflow: hidden;
	width: 100%;
	height: 40px;
	margin: 0 0 8px;
	padding: 5px 39px 5px 11px;
	border: solid 1px #dadada;
	border-radius: 5px;
	background: #fff;
	box-sizing: border-box;
`;

const Button = styled.button`
	font-size: 18px;
	font-weight: 700;
	line-height: 49px;
	display: block;
	width: 100%;
	height: 49px;
	margin: 20px 0 0 0;
	cursor: pointer;
	text-align: center;
	color: #fff;
	border: none;
	border-radius: 5px;
	background-color: rgba(148, 186, 101, 0.9);
`;

//이메일 값 받기
//값없으면 disabled
function LoginForm() {
	const router = useRouter();

	const handleSubmit = async (e: any) => {
		e.preventDefault();

		const email: string = e.target.email.value;

		if (!email) {
			alert('이메일 주소를 입력하세요');
			return;
		}

		try {
			const res = await sendLogInRequest(email);
			if (res.data.success === true) {
				alert('Success: Check your email!');
			} else {
				alert('Error: Login attempt failed...');
			}
		} catch (e: any) {
			console.log(e.message);
		}
	};

	return (
		<Container>
			<form onSubmit={handleSubmit}>
				<Input
					id="email"
					name="email"
					placeholder="로그인할 이메일을 입력해주세요"
				/>
				<Button type="submit">로그인</Button>
			</form>
		</Container>
	);
}

export default LoginForm;
