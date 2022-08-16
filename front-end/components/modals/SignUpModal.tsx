import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import SignUpForm from './SignUpForm';

interface SignUpModalProps {
	show: boolean;
	onClose: Function;
	children?: React.ReactNode;
}

function SignUpModal({ show, onClose, children }: SignUpModalProps) {
	const [isBrowser, setIsBrowser] = useState(false);
	useEffect(() => {
		setIsBrowser(true);
	}, []);

	const handleCloseClick = (e: any) => {
		e.preventDefault();
		onClose();
	};

	const modalContent = show ? (
		<StyledModalOverlay>
			<StyledModal>
				<StyledModalHeader>
					<div onClick={handleCloseClick}>X</div>
				</StyledModalHeader>

				<StyledModalBody>
					<h1>회원가입</h1>
					<SignUpForm />
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

export default SignUpModal;
export const Backdrop = styled.div`
	background-color: rgba(0, 0, 0, 0.5);
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
`;
const StyledModalBody = styled.div`
	h1 {
		margin: 0;
	}
`;

const StyledModalHeader = styled.div`
	display: flex;
	justify-content: flex-end;
	font-size: 30px;
`;

const StyledModal = styled.div`
	z-index: 2;
	background: white;
	width: 500px;
	height: 600px;
	border-radius: 15px;
	padding: 40px 60px;
`;
export const StyledModalOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;
