//header의 로그인, 회원가입을 사용할 수 있는 커스텀 훅
import React, { useCallback, useState } from 'react';
import LoginModal from '@components/modals/LoginModal';
import SignUpModal from '@components/modals/SignUpModal';

export const useModal = () => {
	const [showLogInModal, setShowLogInModal] = useState(false);
	const [showSignUpModal, setShowSignUpModal] = useState(false);

	const onCloseLoginModal = () => {
		setShowLogInModal(false);
	};

	const onCloseSignUpModal = () => {
		setShowSignUpModal(false);
	};

	const onOpenSignUp = () => {
		setShowSignUpModal(true);
	};

	const onOpenLoginModal = () => {
		setShowLogInModal(true);
	};

	const showModal = showLogInModal || showSignUpModal;

	const renderModal = useCallback(() => {
		return (
			<>
				<LoginModal
					onClose={onCloseLoginModal}
					onOpenSignUp={onOpenSignUp}
					show={showLogInModal}
				/>
				<SignUpModal onClose={onCloseSignUpModal} show={showSignUpModal} />
			</>
		);
	}, [showLogInModal, showSignUpModal]);

	return { showModal, onOpenLoginModal, onOpenSignUp, renderModal };
};
