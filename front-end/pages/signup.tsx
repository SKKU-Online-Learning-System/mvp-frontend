import React, { ReactElement } from 'react';
import axiosInstance from 'apis';

const SignupPage = (): ReactElement => {
	const login = async () => {
		try {
			const res = await axiosInstance.get('auth/temp-login');
			console.log(res);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div>
			<button onClick={login}>로그인</button>
			<button>겟 프로필</button>
			<button>로그아웃</button>
		</div>
	);
};

export default SignupPage;
