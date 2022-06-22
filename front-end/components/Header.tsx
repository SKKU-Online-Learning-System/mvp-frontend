import Link from 'next/link';
import { useState } from 'react';
import styled from 'styled-components';
import LoginModal from '@components/modals/LoginModal';
import { useRouter } from 'next/router';

const linkStyle = {
	margin: '34px 1rem',
	cursor: 'pointer',
};
const textBoxStyle = {
	width: '300px',
	height: '35px',
	borderRadius: '20px',
};
const menuData = [
	{ id: 1, name: '강좌 List', path: '/lectures' },
	{ id: 2, name: '커뮤니티', path: '/community' },
	{ id: 3, name: 'MY최근강의', path: '/details' },
];
const Header = () => {
	const [showModal, setShowModal] = useState(false);
	const router = useRouter();
	const menuBar = (
		<ul>
			{menuData.map((menu) => {
				return (
					<li key={menu.id} style={{ display: 'inline' }}>
						<Link href={menu.path}>
							<a
								style={{
									textDecoration: 'none',
									fontWeight: 'bold',
									margin: '34px 1rem',
									cursor: 'pointer',
									color: menu.path === router.pathname ? '#f5af1a' : 'black',
								}}
							>
								{menu.name}
							</a>
						</Link>
					</li>
				);
			})}
		</ul>
	);
	return (
		<Container>
			<div style={{ display: 'flex', alignItems: 'center' }}>
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
				{menuBar}
			</div>

			<div>
				<button onClick={() => setShowModal(true)}>로그인</button>
				<Link href="/signup">
					<a style={linkStyle}>회원가입</a>
				</Link>
			</div>

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
	justify-content: space-between;
	align-items: center;
	margin: 10px;
	padding: 0 10px 0 45px;
`;
