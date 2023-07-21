import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { selectIsLoggined } from '../../store/feature/common/commonSelector';
import { commonActions } from 'store/feature/common/commonSlice';
import { userLoginAuthState } from '../../constants/commonState';
import axiosInstance from '../../apis/index';

type PropsType = {
	onOpenLoginModal: () => void;
	onOpenSignUpModal: () => void;
};

const upperHeaderStyle =
	'mx-4 text-sm text-black font-semibold no-underline cursor-pointer transition-colors duration-150 hover:text-[var(--color-green-300)]';

// const menuData = [
// 	{ id: 1, name: 'Admin', path: '/admin' },
// 	{ id: 2, name: '마이페이지', path: '/my-page/history' },
// ];

const UpperHeader = ({ onOpenLoginModal, onOpenSignUpModal }: PropsType) => {
	const router = useRouter();
	const dispatch = useDispatch();
	const isLoggined = useSelector(selectIsLoggined);

	const handleLogout = () => {
		axiosInstance.get('/auth/logout').then(() => {
			dispatch(commonActions.setIsLoggined(userLoginAuthState.NOT_LOGGINED));
			router.replace('/');
		});
	};

	const handleClickAdminBtn = () => {
		router.push(`/admin`);
	};

	return (
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
						<a className={upperHeaderStyle} onClick={onOpenSignUpModal}>
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
};

export default UpperHeader;
