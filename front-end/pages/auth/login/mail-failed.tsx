import styled from 'styled-components';

const LoginMailFailed = () => {
	return (
		<Container>
			<MessageBox>
				<img src="/images/mail_failed.jpg" width={200} height={180} />
				<h1>이메일이 발송되지 않았습니다</h1>
				<div>이메일 주소를 확인 후 다시 진행해주세요.</div>
			</MessageBox>
		</Container>
	);
};

export default LoginMailFailed;

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
