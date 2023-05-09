import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Link from 'next/link';

import { selectIsLoggined } from '../store/feature/common/commonSelector';
import { commonActions } from 'store/feature/common/commonSlice';
import { userLoginAuthState } from '../constants/commonState';
import { DEVICE_BREAKPOINT } from '../constants/breakpoint';
import { useModal } from '../hooks/useModal';
import axiosInstance from '../apis/index';

const listStyle = {
	margin: '0 1rem',
	listStyleType: 'none',
};
const menuData = [
	{ id: 1, name: '마이페이지', path: '/my-page/history' },
	{ id: 2, name: '강좌 List', path: '/courses' },
];

const Header = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	const isLoggined = useSelector(selectIsLoggined);
	const inputRef = useRef<HTMLInputElement | null>(null);
	const { showModal, onOpenLoginModal, onOpenSignUp, renderModal } = useModal();

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
		<div>
			<ul
				className="m-0 p-0 flex"
				style={{ margin: '0', padding: '0', display: 'flex' }}
			>
				{menuData.map((menu) =>
					isLoggined !== userLoginAuthState.LOGGINED &&
					menu.name === '마이페이지' ? (
						''
					) : (
						<li key={menu.id} style={listStyle}>
							<a
								href={menu.path}
								className="no-underline text-sm text-black mx-4 cursor-pointer"
							>
								{menu.name}
							</a>
						</li>
					),
				)}
			</ul>
		</div>
	);

	const upperHeader = (
		<div className="flex items-center justify-end mr-8 h-8">
			<a className="no-underline text-sm text-black mx-4 cursor-pointer">ENG</a>
			{!!isLoggined &&
				(isLoggined === userLoginAuthState.LOGGINED ? (
					<div>
						<a
							href=""
							className="no-underline text-sm text-black mx-4 cursor-pointer"
							onClick={handleLogout}
						>
							로그아웃
						</a>
					</div>
				) : (
					<div>
						<a
							className="no-underline text-sm text-black mx-4 cursor-pointer"
							onClick={onOpenLoginModal}
						>
							로그인
						</a>
						<a
							className="no-underline text-sm text-black mx-4 cursor-pointer"
							onClick={onOpenSignUp}
						>
							회원가입
						</a>
					</div>
				))}
			{menuBar}
		</div>
	);

	return (
		<div>
			{upperHeader}
			<Container>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
					}}
				>
					<Link href="/">
						<span
							style={{
								fontFamily: 'Gugi',
								fontSize: '1.7rem',
								cursor: 'pointer',
							}}
						>
							온라인 명륜당
						</span>
					</Link>
					<ul
						style={{
							display: 'flex',
							listStyleType: 'none',
							paddingLeft: '0',
							margin: '0 8rem',
						}}
					>
						<li style={listStyle}>
							<a href="">Lectures</a>
						</li>
						<li style={listStyle}>
							<a href="">Q&A</a>
						</li>
						<li style={listStyle}>
							<a href="">Recommendation</a>
						</li>
					</ul>
					<input
						type="text"
						ref={inputRef}
						placeholder="배우고 싶은 지식을 입력하세요."
						className="w-[300px] h-[35px] rounded-[20px] pr-[40px] pl-[16px]"
						onChange={handleInput}
						onKeyPress={handleKeyPress}
					/>
					<SearchButton onClick={handleClickSearchLectures} />
				</div>
				{showModal && renderModal()}
			</Container>
		</div>
	);
};

export default Header;
const Container = styled.div`
	width: ${DEVICE_BREAKPOINT.DESKTOP};
	display: flex;
	justify-content: space-around;
	align-items: center;
	margin: 0.2rem 0 1rem 0;
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
