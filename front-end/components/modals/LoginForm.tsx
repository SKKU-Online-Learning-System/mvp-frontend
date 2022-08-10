import { sendLogInRequest } from "apis/LogIn/logInApi";
import { AxiosResponse } from "axios";
import { useRouter } from "next/router";
import React from "react";
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

//이메일 값 받기
//값없으면 disabled
function LogInForm() {
  const router = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    
    const email: string = e.target.email.value;

    if (!email) {
      alert('이메일 주소를 입력하세요');
      return;
    }
    sendLogInRequest(email)
      .then((res: AxiosResponse) => {
        prompt('Success: Check your email!');
        router.reload();
      })
      .catch((err: any) => {
        alert('Error: Login attempt failed...');
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
          <Input id="email" name="email" placeholder="로그인할 이메일을 입력해주세요" />
          <Button type="submit">이메일 전송</Button>
        </form>
      </Container>
  );
}

export default LogInForm;