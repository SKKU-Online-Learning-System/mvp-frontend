import Layout from '@components/Layout';
import axiosInstance from 'apis';

const SignupPage = () => {
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
