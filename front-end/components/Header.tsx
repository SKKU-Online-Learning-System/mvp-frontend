import Link from 'next/link';
import { useState } from 'react';
import styled from 'styled-components';
import LoginModal from '@components/modals/LoginModal';
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from 'store/app/hooks';
import { setClickedId } from 'store/feature/lecture/lectureSlice';
import { RootState } from 'store/app/store';

interface LinkProps {
	isThisPage: boolean;
}
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
	const dispatch = useAppDispatch();
	const { clickedId } = useAppSelector((state: RootState) => state.lecture);

	const resetLecture = () => {
		dispatch(setClickedId(0));
	};
	const menuBar = (
		<ul>
			{menuData.map((menu) => {
				return (
					<li
						key={menu.id}
						style={{ display: 'inline' }}
						onClick={resetLecture}
					>
						<Link href={menu.path}>
							<LinkMenu isThisPage={menu.path === router.pathname}>
								{menu.name}
							</LinkMenu>
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
					<img src="images/main_logo.png" style={{ zoom: '80%' }} />
				</a>
				<Link href="/">
					<span
						style={{
							fontFamily: 'Gugi',
							fontSize: '1.7rem',
							margin: '0 10px',
							cursor: 'pointer',
						}}
						onClick={resetLecture}
					>
						온라인 명륜당
					</span>
				</Link>
				<input
					type="text"
					placeholder="배우고 싶은 지식을 입력하세요."
					style={textBoxStyle}
				/>
				<SearchButton />

				{menuBar}
			</div>

			<div>
				<button onClick={() => setShowModal(true)}>로그인</button>
				<Link href="/signup">
					<LinkMenu isThisPage={'/signup' === router.pathname}>
						회원가입
					</LinkMenu>
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
const LinkMenu = styled.a<LinkProps>`
	color: ${(props) => (props.isThisPage ? '#f5af1a' : 'black')};
	text-decoration: none;
	font-weight: bold;
	margin: 34px 1rem;
	cursor: pointer;
	&:hover {
		color: #f5af1a;
	}
`;
const SearchButton = styled.button`
	background: none;
	background-image: url('images/search_btn.png');
	background-size: cover;
	margin-left: -40px;
	border: none;
	width: 30px;
	height: 30px;
	&:focus {
		outline: none;
	}
	padding: none;
	cursor: pointer;
`;
