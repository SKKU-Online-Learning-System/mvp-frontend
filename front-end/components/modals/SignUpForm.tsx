import {
	fetchEmailCheck,
	fetchNicknameCheck,
	sendSignUpRequest,
} from 'apis/SignUp/signUpApi';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 330px;
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

enum CHECK_STATUS {
	NONE = 0,
	CHECKED = 1,
	CONFLICT = 2,
}

//이메일 닉네임 값 받기
//값없으면 disabled
function SignUpForm({ onClose }: any) {
	const router = useRouter();

	// 0: 중복, 1: 중복확인 통과, 2: 초기 상태
	const [emailUnique, setEmailUnique] = useState(CHECK_STATUS.NONE);
	const [nicknameUnique, setNicknameUnique] = useState(CHECK_STATUS.NONE);

	const [emailValue, setEmailValue] = useState('');
	const [nicknameValue, setNicknameValue] = useState('');

	const [sendingMail, setSendingMail] = useState(false);

	const handleSubmit = async (e: any) => {
		e.preventDefault();

		if (
			!(
				emailUnique === CHECK_STATUS.CHECKED &&
				nicknameUnique === CHECK_STATUS.CHECKED
			)
		) {
			alert('이메일 주소 및 닉네임의 중복 확인이 필요합니다.');
			return;
		}

		const email: string = e.target.email.value;
		const nickname: string = e.target.nickname.value;
		setSendingMail(true);

		try {
			const res = await sendSignUpRequest(email, nickname);
			if (res.data.success === true) {
				router.push('/auth/signup/mail-success');
				onClose();
			} else {
				router.push('/auth/signup/mail-failed');
				onClose();
			}
		} catch (e: any) {
			console.log(e.message);
		}
	};

	const handleChange =
		(
			setValue: React.Dispatch<React.SetStateAction<string>>,
			setUnique: React.Dispatch<React.SetStateAction<CHECK_STATUS>>,
		) =>
		(e: any) => {
			setValue(e.target.value);
			setUnique(CHECK_STATUS.NONE);
		};

	const handleClickEmailCheck = async (e: any) => {
		e.preventDefault();
		if (!emailValue) return;
		try {
			const res = await fetchEmailCheck(emailValue);
			if (res.data.statusCode === 200) setEmailUnique(CHECK_STATUS.CHECKED);
			else if (res.data.statusCode === 409)
				setEmailUnique(CHECK_STATUS.CONFLICT);
			else throw new Error('Wrong status code from response or no response');
		} catch (e: any) {
			console.log(e.message);
		}
	};

	const handleClickNicknameCheck = async (e: any) => {
		e.preventDefault();
		if (!nicknameValue) return;
		try {
			const res = await fetchNicknameCheck(nicknameValue);
			if (res.data.statusCode === 200) setNicknameUnique(CHECK_STATUS.CHECKED);
			else if (res.data.statusCode === 409)
				setNicknameUnique(CHECK_STATUS.CONFLICT);
			else throw new Error('Wrong status code from response or no response');
		} catch (e: any) {
			console.log(e.message);
		}
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
				<form onSubmit={handleSubmit}>
					<Container>
						<InputBox>
							<label htmlFor="email">이메일</label>
							<Input
								id="email"
								name="email"
								type="email"
								placeholder="이메일을 입력해주세요"
								onChange={handleChange(setEmailValue, setEmailUnique)}
							/>
							<CheckBox>
								<CheckButton onClick={handleClickEmailCheck}>
									중복 체크
								</CheckButton>
								<CheckMessage>
									{emailUnique === CHECK_STATUS.NONE ? null : emailUnique ===
									  CHECK_STATUS.CHECKED ? (
										<CheckMessageOK>사용 가능한 이메일입니다.</CheckMessageOK>
									) : (
										<CheckMessageConflict>
											이미 사용 중인 이메일입니다.
										</CheckMessageConflict>
									)}
								</CheckMessage>
							</CheckBox>
						</InputBox>

						<InputBox>
							<label htmlFor="nickname">닉네임</label>
							<Input
								id="nickname"
								name="nickname"
								placeholder="닉네임을 입력해주세요"
								onChange={handleChange(setNicknameValue, setNicknameUnique)}
							/>
							<CheckBox>
								<CheckButton onClick={handleClickNicknameCheck}>
									중복 체크
								</CheckButton>
								<CheckMessage>
									{nicknameUnique ===
									CHECK_STATUS.NONE ? null : nicknameUnique ===
									  CHECK_STATUS.CHECKED ? (
										<CheckMessageOK>사용 가능한 닉네임입니다.</CheckMessageOK>
									) : (
										<CheckMessageConflict>
											이미 사용 중인 닉네임입니다.
										</CheckMessageConflict>
									)}
								</CheckMessage>
							</CheckBox>
						</InputBox>

						<Button type="submit">회원가입</Button>
					</Container>
				</form>
			)}
		</>
	);
}

export default SignUpForm;

const InputBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 110px;
`;

const CheckBox = styled.div`
	display: flex;
	flex-direction: row-reverse;
`;

const CheckMessage = styled.span`
	padding-right: 10px;
	vertical-align: middle;
`;

const CheckMessageOK = styled.span`
	color: green;
	vertical-align: middle;
`;

const CheckMessageConflict = styled.span`
	color: red;
	vertical-align: middle;
`;

const CheckButton = styled.button`
	width: 80px;
	font-weight: 400;
	line-height: 20px;
	border-radius: 3px;
	background-color: #fcfcfc;
`;

const LoadingBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 400px;
	img {
		width: 100px;
	}
`;
