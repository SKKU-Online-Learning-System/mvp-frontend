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
	height: 360px;
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
	margin: 16px 0 7px;
	cursor: pointer;
	text-align: center;
	color: #fff;
	border: none;
	border-radius: 5px;
	background-color: #03c75a;
`;

enum MARK {
	CHECK_MARK = '\u2705',
	CROSS_MARK = '\u274C',
}

enum CHECK_STATUS {
	NONE = 0,
	CHECKED = 1,
	CONFLICT = 2,
}

//이메일 닉네임 값 받기
//값없으면 disabled
function SignUpForm() {
	const router = useRouter();

	// 0: 중복, 1: 중복확인 통과, 2: 초기 상태
	const [emailUnique, setEmailUnique] = useState(CHECK_STATUS.NONE);
	const [nicknameUnique, setNicknameUnique] = useState(CHECK_STATUS.NONE);

	const [emailValue, setEmailValue] = useState('');
	const [nicknameValue, setNicknameValue] = useState('');

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

		try {
			const res = await sendSignUpRequest(email, nickname);
			if (res.data.success === true) {
				alert('Success: Check your email!');
			} else {
				alert('Error: Sign up attempt failed...');
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
		<form onSubmit={handleSubmit}>
			<Container>
				<InputBox>
					<label htmlFor="email">이메일:</label>
					<Input
						id="email"
						name="email"
						type="email"
						placeholder="이메일을 입력해주세요"
						onChange={handleChange(setEmailValue, setEmailUnique)}
					/>
					<CheckBox>
						<button onClick={handleClickEmailCheck}>중복 체크</button>
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
					<label htmlFor="nickname">닉네임:</label>
					<Input
						id="nickname"
						name="nickname"
						placeholder="닉네임을 입력해주세요"
						onChange={handleChange(setNicknameValue, setNicknameUnique)}
					/>
					<CheckBox>
						<button onClick={handleClickNicknameCheck}>중복 체크</button>
						<CheckMessage>
							{nicknameUnique === CHECK_STATUS.NONE ? null : nicknameUnique ===
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
`;

const CheckMessageOK = styled.span`
	color: green;
`;

const CheckMessageConflict = styled.span`
	color: red;
`;
