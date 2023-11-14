import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Link from 'next/link';

import {
	selectIsLoggined,
	selectUserType,
} from '../../store/feature/common/commonSelector';
import { commonActions } from 'store/feature/common/commonSlice';
import { userLoginAuthState, userState } from '../../constants/commonState';
import axiosInstance from '../../apis/index';

type PropsType = {
	// onOpenLoginModal: () => void;
	onOpenSignUpModal: () => void;
};

const upperHeaderStyle =
	'text-[var(--color-onBackground-300)] mx-6 text-sm font-semibold no-underline cursor-pointer transition-colors duration-150 hover:text-[var(--color-green-300)]';

const UpperHeader = ({ onOpenSignUpModal }: PropsType) => {
	const router = useRouter();

	const dispatch = useDispatch();

	const isLoggined = useSelector(selectIsLoggined);
	const userType = useSelector(selectUserType);

	const handleLogout = () => {
		axiosInstance.get('/auth/logout').then(() => {
			dispatch(commonActions.setIsLoggined(userLoginAuthState.NOT_LOGGINED));
			dispatch(commonActions.setUserType(userState.NOT_LOGGED_IN));
			router.replace('/');
		});
	};

	return (
		<div className="fixed top-0 z-10 flex items-center justify-end w-screen h-8 px-10 mr-8 bg-white">
			{!!isLoggined &&
				(isLoggined === userLoginAuthState.LOGGINED ? (
					<div>
						<Link href="/my-page/profile">
							<span className={upperHeaderStyle}>마이페이지</span>
						</Link>
						<button className={upperHeaderStyle} onClick={handleLogout}>
							로그아웃
						</button>
						{userType <= userState.MANAGER ? (
							<Link href="/admin">
								<span className={upperHeaderStyle}>Admin</span>
							</Link>
						) : null}
					</div>
				) : (
					<div>
						<button
							className={upperHeaderStyle}
							onClick={() => {
								router.push('/login');
							}}
						>
							로그인
						</button>
						<button className={upperHeaderStyle} onClick={onOpenSignUpModal}>
							회원가입
						</button>
					</div>
				))}
		</div>
	);
};

export default UpperHeader;
