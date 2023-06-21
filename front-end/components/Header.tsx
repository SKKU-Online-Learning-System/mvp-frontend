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
	{ id: 1, name: '마이페이지', path: '/my-page/history' },
	{ id: 2, name: 'Admin', path: '/' },
];

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

	const menuBar = (
		<div>
			<ul className="flex p-0 m-0">
				{menuData.map((menu) => {
					isLoggined !== userLoginAuthState.LOGGINED &&
					menu.name === '마이페이지' ? (
						''
					) : (
						<li key={menu.id} className="mx-4 my-0 list-none">
							<a
								href={menu.path}
								className="mx-4 text-sm text-black no-underline cursor-pointer"
							>
								{menu.name}
							</a>
						</li>
					);
				})}
			</ul>
		</div>
	);

	const upperHeader = (
		<div className="flex items-center justify-end h-8 mr-8">
			<a className="mx-4 text-sm text-black no-underline cursor-pointer">ENG</a>
			{!!isLoggined &&
				(isLoggined === userLoginAuthState.LOGGINED ? (
					<div>
						<a
							href=""
							className="mx-4 text-sm text-black no-underline cursor-pointer"
							onClick={handleLogout}
						>
							로그아웃
						</a>
					</div>
				) : (
					<div>
						<a
							className="mx-4 text-sm text-black no-underline cursor-pointer"
							onClick={onOpenLoginModal}
						>
							로그인
						</a>
						<a
							className="mx-4 text-sm text-black no-underline cursor-pointer"
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
