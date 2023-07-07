import React, { ReactElement, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { selectIsLoggined } from '../store/feature/common/commonSelector';
import { commonActions } from 'store/feature/common/commonSlice';
import { userLoginAuthState } from '../constants/commonState';
import { useModal } from '../hooks/useModal';
import axiosInstance from '../apis/index';

const menuData = [
	{ id: 1, name: 'Admin', path: '/admin' },
	{ id: 2, name: '마이페이지', path: '/my-page/history' },
];

const upperHeaderStyle =
	'mx-4 text-sm text-black font-semibold no-underline cursor-pointer transition-colors duration-150 hover:text-[var(--color-green-300)]';

const headerStyle =
	'text-lg font-semibold cursor-pointer no-underline decoration-black transition-colors hover:text-[var(--color-green-300)]';

const Header = (): ReactElement => {
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

	const handleKeyPress = (e: React.KeyboardEvent) => {
		if (e.key === 'Enter') {
			e.preventDefault();
			handleClickSearchLectures();
			return;
		}
	};

	const handleClickAdminBtn = () => {
		router.push(`/admin`);
	};

	const upperHeader = (
		<div className="fixed top-0 z-10 flex items-center justify-end w-screen h-8 px-10 mr-8 bg-white">
			<a className={upperHeaderStyle}>ENG</a>
			{!!isLoggined &&
				(isLoggined === userLoginAuthState.LOGGINED ? (
					<div>
						<a href="" className={upperHeaderStyle} onClick={handleLogout}>
							로그아웃
						</a>
						<Link href="/my-page/history">
							<span className={upperHeaderStyle}>마이페이지</span>
						</Link>
						<a className={upperHeaderStyle} onClick={handleClickAdminBtn}>
							Admin
						</a>
					</div>
				) : (
					<div>
						<a className={upperHeaderStyle} onClick={onOpenLoginModal}>
							로그인
						</a>
						<a className={upperHeaderStyle} onClick={onOpenSignUp}>
							회원가입
						</a>
					</div>
				))}
			{/* <div>
				<ul className="flex p-0 m-0">
					{menuData.map((menu) => {
						isLoggined !== userLoginAuthState.LOGGINED &&
						menu.name === '마이페이지' ? (
							''
						) : (
							<li key={menu.id} className="mx-4 my-0 list-none">
								<a
									href={menu.path}
									className={upperHeaderStyle}
								>
									{menu.name}
								</a>
							</li>
						);
					})}
				</ul>
			</div> */}
		</div>
	);

	return (
		<div>
			{upperHeader}
			<div className="dt:py-0 dt:px-[10px] mt-8 flex justify-around items-center mb-4">
				<div className="flex items-center justify-between">
					<Link href="/">
						<span className="text-[2rem] cursor-pointer font-['Gugi'] text-[#1b1b1b]">
							온라인 명륜당
						</span>
					</Link>
					<ul className="flex list-none pl-0 mx-[8rem]">
						<li className="mx-4 my-0 list-none">
							<Link href="/courses">
								<span className={headerStyle}>강좌 List</span>
							</Link>
						</li>
						<li className="mx-4 my-0 list-none">
							<a href="" className={headerStyle}>
								공지사항
							</a>
						</li>
					</ul>
					<input
						type="text"
						ref={inputRef}
						placeholder="배우고 싶은 지식을 입력하세요."
						className="w-[300px] h-[35px] rounded-5 pr-10 pl-4 border-2 border-solid border-[black]/[0.7] rounded-xl"
						onChange={handleInput}
						onKeyPress={handleKeyPress}
					/>
					<button
						className="focus:outline-none bg-cover bg-[url('/images/search_btn.png')] cursor-pointer p-0 -ml-10 border-none w-[30px] h-[30px] "
						onClick={handleClickSearchLectures}
					/>
				</div>
				{showModal && renderModal()}
			</div>
		</div>
	);
};

export default Header;
