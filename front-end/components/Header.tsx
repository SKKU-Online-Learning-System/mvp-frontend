import Link from 'next/link';
import { useRef, useState } from 'react';
import styled from 'styled-components';
import LoginModal from '@components/modals/LoginModal';
import { useRouter } from 'next/router';
import { useAppSelector, useAppDispatch } from 'store/app/hooks';
import { RootState } from 'store/app/store';
import SignUpModal from './modals/SignUpModal';
import { userLoginAuthState } from '../constants/userAuthState';
import axiosInstance from '../apis/index';
import { setIsLoggined } from 'store/feature/auth/userAuthSlice';
import { DEVICE_BREAKPOINT } from '../constants/breakpoint';

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
	padding: '0 40px 0 16px',
};
const menuData = [
	{ id: 1, name: '강좌 List', path: '/courses' },
	{ id: 2, name: '강의 재생', path: '/lectures' },
	{ id: 3, name: '마이페이지', path: '/my-page' },
];

const Header = () => {
	const [showLogInModal, setShowLogInModal] = useState(false);
	const [showSignUpModal, setShowSignUpModal] = useState(false);
	const router = useRouter();
	const dispatch = useAppDispatch();
	const { isLoggined } = useAppSelector(
		(state: RootState) => state.userAuthState,
	);
	const inputRef = useRef<HTMLInputElement | null>(null);

	const handleLogout = () => {
		axiosInstance
			.get('/auth/logout')
			.then(() => dispatch(setIsLoggined(userLoginAuthState.NOT_LOGGINED)));
	};

	const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { current } = inputRef;

		if (current) current.value = e.target.value;
	};

	const handleClickSearchLectures = () => {
		if (inputRef?.current?.value)
			router.push({
				pathname: '/courses',
				query: { s: inputRef?.current?.value },
			});
	};

	const menuBar = (
		<ul>
			{menuData.map((menu) => {
				return (
					<li key={menu.id} style={{ display: 'inline' }}>
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
					<img src="/images/main_logo.png" style={{ zoom: '80%' }} />
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
					ref={inputRef}
					placeholder="배우고 싶은 지식을 입력하세요."
					style={textBoxStyle}
					onChange={handleInput}
				/>
				<SearchButton onClick={handleClickSearchLectures} />

				{menuBar}
			</div>

			{isLoggined === userLoginAuthState.LOGGINED ? (
				<div>
					<LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
				</div>
			) : (
				<div>
					<LoginButton onClick={() => setShowLogInModal(true)}>
						로그인
					</LoginButton>
					<SignupButton onClick={() => setShowSignUpModal(true)}>
						회원가입
					</SignupButton>
				</div>
			)}

			<LoginModal
				onClose={() => setShowLogInModal(false)}
				onOpenSignUp={() => setShowSignUpModal(true)}
				show={showLogInModal}
			>
				로그인 모달 children
			</LoginModal>
			<SignUpModal
				onClose={() => setShowSignUpModal(false)}
				show={showSignUpModal}
			>
				회원가입 모달 children
			</SignUpModal>
		</Container>
	);
};

export default Header;
const Container = styled.div`
	width: ${DEVICE_BREAKPOINT.DESKTOP};
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: auto;
	padding: 8px 0;
	@media only screen and (max-width: ${DEVICE_BREAKPOINT.DESKTOP}) {
		padding: 0 10px;
	}
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
	background-image: url('/images/search_btn.png');
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
const LoginButton = styled.button`
	background: #69c97f;
	color: #ffffff;
	margin: 0 5px 0 0;
	padding: 0.4rem 0.8rem;
	font-family: 'Noto Sans KR', sans-serif;
	font-size: 1rem;
	font-weight: 400;
	border: none;
	border-radius: 4px;
	cursor: pointer;
	transition: 0.3s;
	&:hover {
		background: #34a84d;
		outline: 0;
	}
`;
const LogoutButton = styled.button`
	background: #eab106;
	color: #ffffff;
	margin: 0;
	padding: 0.4rem 0.8rem;
	font-family: 'Noto Sans KR', sans-serif;
	font-size: 1rem;
	font-weight: 400;
	border: none;
	border-radius: 4px;
	cursor: pointer;
	transition: 0.3s;
	&:hover {
		background: #b08911;
		outline: 0;
	}
`;
const SignupButton = styled.button`
	background: #d58e6d;
	color: #ffffff;
	margin: 0;
	padding: 0.4rem 0.8rem;
	font-family: 'Noto Sans KR', sans-serif;
	font-size: 1rem;
	font-weight: 400;
	border: none;
	border-radius: 4px;
	cursor: pointer;
	transition: 0.3s;
	&:hover {
		background: #c7643d;
		outline: 0;
	}
`;
