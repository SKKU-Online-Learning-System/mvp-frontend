import React, { ReactElement, useRef, useState } from 'react';
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

const Header = (): ReactElement => {
	const router = useRouter();
	const dispatch = useDispatch();
	const isLoggined = useSelector(selectIsLoggined);
	const inputRef = useRef<HTMLInputElement | null>(null);
	const { showModal, onOpenLoginModal, onOpenSignUp, renderModal } = useModal();
	const [isAdminOpen, setIsAdminOpen] = useState(false);

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
		setIsAdminOpen(!isAdminOpen);
	};

	const handleClickAdminBtns = (e: React.MouseEvent<HTMLButtonElement>) => {
		router.push(`/${e.target.id}`);
	};

	const upperHeader = (
		<div className="flex items-center justify-end h-8 mr-8">
			<a className={upperHeaderStyle}>ENG</a>
			{!!isLoggined &&
				(isLoggined === userLoginAuthState.LOGGINED ? (
					<div className="relative">
						<a href="" className={upperHeaderStyle} onClick={handleLogout}>
							로그아웃
						</a>
						<a href="/my-page/history" className={upperHeaderStyle}>
							마이페이지
						</a>
						<a className={upperHeaderStyle} onClick={handleClickAdminBtn}>
							Admin
						</a>
						{isAdminOpen ? (
							<div className="absolute right-[-30px] flex flex-col w-auto bg-[#e9e9e9] p-4">
								<ul>
									<li>
										<button
											className="mb-2 hover:font-semibold"
											onClick={handleClickAdminBtns}
											id="admin"
										>
											Admin 관리
										</button>
									</li>
									<li>
										<button
											className="mb-2 hover:font-semibold"
											onClick={handleClickAdminBtns}
											id="main-banner"
										>
											메인베너 관리
										</button>
									</li>
									<li>
										<button
											className="mb-2 hover:font-semibold"
											onClick={handleClickAdminBtns}
											id="course-contents"
										>
											강좌 관리
										</button>
									</li>
									<li>
										<button
											className="hover:font-semibold"
											onClick={handleClickAdminBtns}
											id="user-ranking"
										>
											유저 랭킹
										</button>
									</li>
								</ul>
							</div>
						) : (
							''
						)}
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
			<div className="dt:py-0 dt:px-[10px] flex justify-around items-center mt-[0.2rem] mb-6 mx-0 py-2">
				<div className="flex items-center justify-between">
					<Link href="/" passHref>
						<span className="text-[2rem] cursor-pointer font-['Gugi'] text-[#1b1b1b]">
							온라인 명륜당
						</span>
					</Link>
					<ul className="flex list-none pl-0 mx-[8rem]">
						<li className="mx-4 my-0 list-none">
							<Link href="/courses">
								<span className="text-lg cursor-pointer no-underline decoration-black relative bottom-0 transition-[bottom] hover:bottom-0.5">
									강좌 List
								</span>
							</Link>
						</li>
						<li className="mx-4 my-0 list-none">
							<a
								href=""
								className="text-lg cursor-pointer no-underline decoration-black relative bottom-0 transition-[bottom] hover:bottom-0.5"
							>
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
						className="focus:outline-none bg-cover bg-[url('/images/search_btn.png')] cursor-pointer p-0 ml-[-40px] border-none w-[30px] h-[30px] "
						onClick={handleClickSearchLectures}
					/>
				</div>
				{showModal && renderModal()}
			</div>
		</div>
	);
};

export default Header;
