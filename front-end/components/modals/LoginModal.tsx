import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import LogInForm from './LoginForm';
import { Backdrop, StyledModalOverlay } from './SignUpModal';

interface LogInModalProps {
	show: boolean;
	onClose: Function;
	children?: React.ReactNode;
	onOpenSignUp: Function;
}

function LoginModal({
	show,
	onClose,
	onOpenSignUp,
	children,
}: LogInModalProps) {
	const [isBrowser, setIsBrowser] = useState(false);

	useEffect(() => {
		setIsBrowser(true);
	}, []);

	const handleCloseClick = (e: any) => {
		e.preventDefault();
		onClose();
	};

	const handleOpenSignUpClick = (e: any) => {
		e.preventDefault();
		onClose();
		onOpenSignUp();
	};

	const modalContent = show ? (
		<StyledModalOverlay>
			<StyledModal>
				<StyledModalHeader>
					<div onClick={handleCloseClick}>X</div>
				</StyledModalHeader>

				<StyledModalBody>
					<h1>로그인</h1>
					<LogInForm />
					<hr />
					<SignupBox>
						처음이신가요?{' '}
						<span className="signupButton" onClick={handleOpenSignUpClick}>
							회원가입
						</span>
					</SignupBox>
				</StyledModalBody>
			</StyledModal>
			<Backdrop onClick={handleCloseClick} />
		</StyledModalOverlay>
	) : null;

	if (isBrowser) {
		const portalDiv = document.getElementById('modal-root')!;
		return ReactDOM.createPortal(modalContent, portalDiv);
	} else {
		return null;
	}
}

export default LoginModal;

const StyledModalBody = styled.div`
	h1 {
		margin: 0;
	}
`;

const StyledModalHeader = styled.div`
	display: flex;
	justify-content: flex-end;
	font-size: 30px;
	cursor: pointer;
`;

const StyledModal = styled.div`
	z-index: 2;
	background: white;
	width: 450px;
	height: 450px;
	border-radius: 15px;
	padding: 40px 60px;
`;
// const StyledModalOverlay = styled.div`
// 	position: fixed;
// 	top: 0;
// 	left: 0;
// 	width: 100%;
// 	height: 100%;
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// 	background-color: rgba(0, 0, 0, 0.5);
// `;

const SignupBox = styled.div`
	display: flex;
	height: 60px;
	padding: 0 40px;
	justify-content: space-evenly;
	align-items: center;

	.signupButton {
		font-weight: 700;
		cursor: pointer;
	}
`;
