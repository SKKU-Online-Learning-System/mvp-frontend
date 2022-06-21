import Link from 'next/link';
import { useState } from 'react';
import styled from 'styled-components';
import LoginModal from '@components/modals/LoginModal';

const linkStyle = {
	margin: '34px 1rem',
	cursor: 'pointer',
};
const textBoxStyle = {
	width: '300px',
	height: '35px',
	borderRadius: '20px',
};
const Header = () => {
	const [showModal, setShowModal] = useState(false);
	return (
		<Container>
			<a href="https://www.skku.edu/">
				<img src="images/main_logo.png" />
			</a>
			<Link href="/">
				<span
					style={{
						fontFamily: 'Gugi',
						fontSize: '1.7rem',
						margin: '0 10px',
						cursor: 'pointer',
					}}
				>
					온라인 명륜당
				</span>
			</Link>
			<input
				type="text"
				placeholder="배우고 싶은 지식을 입력하세요."
				style={textBoxStyle}
			/>
			<Link href="/lectures">
				<a style={linkStyle}>강좌 List</a>
			</Link>
			<Link href="/community">
				<a style={linkStyle}>커뮤니티</a>
			</Link>
			<Link href="/">
				<a style={linkStyle}>MY최근강의</a>
			</Link>
			<button onClick={() => setShowModal(true)}>로그인</button>
			<Link href="/signup">
				<a style={linkStyle}>회원가입</a>
			</Link>
			<LoginModal onClose={() => setShowModal(false)} show={showModal}>
				로그인 모달 children
			</LoginModal>
		</Container>
	);
};

export default Header;
const Container = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	padding: 0 65px;
`;
