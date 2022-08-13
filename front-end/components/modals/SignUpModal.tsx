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
					<a href="#" onClick={handleCloseClick}>
						x
					</a>
				</StyledModalHeader>

				<StyledModalBody>
					<h1>Sign Up</h1>
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
const Backdrop = styled.div`
	background-color: rgba(0, 0, 0, 0.5);
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
`;
const StyledModalBody = styled.div`
	padding-top: 10px;
`;

const StyledModalHeader = styled.div`
	display: flex;
	justify-content: flex-end;
	font-size: 25px;
`;

const StyledModal = styled.div`
	z-index: 2;
	background: white;
	width: 500px;
	height: 600px;
	border-radius: 15px;
	padding: 15px;
`;
const StyledModalOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;
