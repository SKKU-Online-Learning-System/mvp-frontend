import { fetchEmailCheck, fetchNicknameCheck, sendSignUpRequest } from "apis/SignUp/signUpApi";
import { AxiosResponse } from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 100px;
  padding: 20px;
`;

const Input = styled.input`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 40px;
  margin: 0 0 8px;
  padding: 5px 39px 5px 11px;
  border: solid 1px #dadada;
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
  border-radius: 0;
  background-color: #03c75a;
`;

enum MARK {
  CHECK_MARK = '\u2705',
  CROSS_MARK = '\u274C'
}


//이메일 닉네임 값 받기
//값없으면 disabled
function SignUpForm() {
  const router = useRouter();
  const [emailUnique, setEmailUnique] = useState(false);
  const [nicknameUnique, setNicknameUnique] = useState(false);
  const [emailValue, setEmailValue] = useState('');
  const [nicknameValue, setNicknameValue] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!emailUnique || !nicknameUnique) {
      alert('이메일 주소 및 닉네임의 중복 확인이 필요합니다.');
      return;
    }

    const email: string = e.target.email.value;
    const nickname: string = e.target.nickname.value;

    sendSignUpRequest(email, nickname)
      .then((res: AxiosResponse) => {
        prompt('Success: Check your email!');
        router.reload();
      })
      .catch((err: any) => {
        alert('Error: Sign up attempt failed...');
        if (err.response) {
          console.log(err.response);
        } else if (err.request) {
          console.log(err.request);
        } else {
          console.log('Error:', err.message);
        }
      });
  };

  const handleChange = (setValue: React.Dispatch<React.SetStateAction<string>>, setUnique: React.Dispatch<React.SetStateAction<boolean>>) => (e: any) => {
    setValue(e.target.value);
    setUnique(false);
  }

  const handleClickEmailCheck = (e: any) => {
    e.preventDefault();

    if (!emailValue) return;

    fetchEmailCheck(emailValue)
      .then((res: AxiosResponse) => {
        setEmailUnique(true);
      })
      .catch((err: any) => {
        alert('duplicated email');
        if (err.response) {
          console.log(err.response);
        } else if (err.request) {
          console.log(err.request);
        } else {
          console.log('Error:', err.message);
        }
      });
  }

  const handleClickNicknameCheck = (e: any) => {
    e.preventDefault();

    if (!nicknameValue) return;

    fetchNicknameCheck(nicknameValue)
      .then((res: AxiosResponse) => {
        setNicknameUnique(true);
      })
      .catch((err: any) => {
        alert('duplicated nickname');
        if (err.response) {
          console.log(err.response);
        } else if (err.request) {
          console.log(err.request);
        } else {
          console.log('Error:', err.message);
        }
      });
  }

  return (
      <Container>
        <form onSubmit={handleSubmit}>
          <Input id="email" name="email" type="email" placeholder="이메일을 입력해주세요" 
            onChange={handleChange(setEmailValue, setEmailUnique)} />
          <button onClick={handleClickEmailCheck}>이메일 중복 체크</button><span>{emailUnique ? MARK.CHECK_MARK : MARK.CROSS_MARK}</span>
          <Input id="nickname" name="nickname" placeholder="닉네임을 입력해주세요" 
            onChange={handleChange(setNicknameValue, setNicknameUnique)} />
          <button onClick={handleClickNicknameCheck}>닉네임 중복 체크</button><span>{nicknameUnique ? MARK.CHECK_MARK : MARK.CROSS_MARK}</span>
          <Button type="submit">회원가입</Button>
        </form>
      </Container>
  );
}

export default SignUpForm;