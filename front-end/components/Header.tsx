import Link from 'next/link';
import { useRef } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useAppSelector } from 'store/app/hooks';
import { useDispatch } from 'react-redux';
import { RootState } from 'store/app/store';
import { userLoginAuthState } from '../constants/commonState';
import axiosInstance from '../apis/index';
import { commonActions } from 'store/feature/common/commonSlice';
import { DEVICE_BREAKPOINT } from '../constants/breakpoint';
import { useModal } from '../hooks/useModal';

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
	{ id: 2, name: '마이페이지', path: '/my-page/history' },
];

const Header = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	const { isLoggined } = useAppSelector((state: RootState) => state.common);
	const inputRef = useRef<HTMLInputElement | null>(null);
	const { showModal, setShowLogInModal, setShowSignUpModal, renderModal } =
		useModal();

	const handleLogout = () => {
		axiosInstance.get('/auth/logout').then(() => {
			dispatch(commonActions.setIsLoggined(userLoginAuthState.NOT_LOGGINED));
			router.replace('/');
		});
	};

	const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { current } = inputRef;

		if (current) current.value = e.target.value;
	};

	const handleClickSearchLectures = () => {
		if (inputRef?.current?.value) {
			router.push({
				pathname: '/courses',
				query: { keyword: inputRef?.current?.value },
			});
			inputRef.current.value = '';
			return;
		}
	};

	const handleKeyPress = (e: any) => {
		if (e.key === 'Enter') {
			e.preventDefault();
			handleClickSearchLectures();
			return;
		}
	};

	const menuBar = (
		<ul>
			{menuData.map((menu) =>
				isLoggined !== userLoginAuthState.LOGGINED &&
				menu.name === '마이페이지' ? (
					''
				) : (
					<li key={menu.id} style={{ display: 'inline' }}>
						<LinkMenu
							href={menu.path}
							isThisPage={menu.path === router.pathname}
						>
							{menu.name}
						</LinkMenu>
					</li>
				),
			)}
		</ul>
	);
	return (
		<Container>
			<div style={{ display: 'flex', alignItems: 'center' }}>
				<Link href="https://www.skku.edu/skku/index.do">
					<img src="/images/main_logo.png" style={{ zoom: '80%' }} />
				</Link>
				<a href="/">
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
				</a>
				<input
					type="text"
					ref={inputRef}
					placeholder="배우고 싶은 지식을 입력하세요."
					style={textBoxStyle}
					onChange={handleInput}
					onKeyPress={handleKeyPress}
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

			{showModal && renderModal()}
		</Container>
	);
};

export default Header;
const Container = styled.div`
	width: ${DEVICE_BREAKPOINT.DESKTOP};
	display: flex;
	justify-content: space-around;
	align-items: center;
	margin: auto;
	padding: 8px 0;
	@media only screen and (max-width: ${DEVICE_BREAKPOINT.DESKTOP}) {
		padding: 0 10px;
	}

	a,
	a:visited {
		text-decoration: none;
		color: black;
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
