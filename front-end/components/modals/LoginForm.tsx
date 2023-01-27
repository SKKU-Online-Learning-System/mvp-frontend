import { sendLogInRequest } from 'apis/LogIn/logInApi';
import { fetchEmailCheck } from 'apis/SignUp/signUpApi';
import { AxiosResponse } from 'axios';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import styled from 'styled-components';

//이메일 값 받기
//값없으면 disabled
const LoginForm = ({ onClose, onOpenSignUp }: any) => {
	const router = useRouter();

	const [sendingMail, setSendingMail] = useState(false);

	const handleSubmit = async (e: any) => {
		e.preventDefault();

		const email: string = e.target.email.value;

		if (!email) {
			alert('이메일 주소를 입력하세요');
			return;
		}
		setSendingMail(true);
		try {
			const res = await fetchEmailCheck(email);
			if (res.data.statusCode === 200) {
				setSendingMail(false);
				alert('가입되지 않은 이메일 입니다.');
				return;
			} else throw new Error('Wrong status code from response or no response');
		} catch (e: any) {
			console.log(e.message);
		}

		try {
			const res = await sendLogInRequest(email);
			if (res.data.success === true) {
				router.push('/auth/login/mail-success');
				onClose();
			} else {
				router.push('/auth/login/mail-failed');
				onClose();
			}
		} catch (e: any) {
			console.log(e.message);
		}
	};

	const handleOpenSignUpClick = (e: any) => {
		e.preventDefault();
		onClose();
		onOpenSignUp();
	};

	return (
		<>
			{sendingMail ? (
				<LoadingBox>
					<img
						src="https://mblogthumb-phinf.pstatic.net/MjAxODEwMjNfNjAg/MDAxNTQwMjg2OTk2NTcw.mfWKPtzKVO1mJaBBIFKIkVBlMQQIF1Vc-yrlbbGaoP0g.KNJWAgMmhsfQrZI3n0UT-LMi_qpHAZls4qPMvbNaJBcg.GIF.chingguhl/Spinner-1s-200px.gif?type=w800"
						alt="loading"
					/>
				</LoadingBox>
			) : (
				<Container>
					<form onSubmit={handleSubmit}>
						<Input
							id="email"
							name="email"
							placeholder="로그인할 이메일을 입력해주세요"
						/>
						<Button type="submit">로그인</Button>
					</form>
					<hr />
					<SignupBox>
						처음이신가요?{' '}
						<span className="signupButton" onClick={handleOpenSignUpClick}>
							회원가입
						</span>
					</SignupBox>
				</Container>
			)}
		</>
	);
};

export default LoginForm;

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

const LoadingBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 300px;
	img {
		width: 100px;
	}
`;
const SignupBox = styled.div`
	display: flex;
	height: 60px;
	padding: 0 40px;
	justify-content: space-evenly;
	align-items: center;

	.signupButton {
		font-weight: 700;
		cursor: pointer;
	}
`;
