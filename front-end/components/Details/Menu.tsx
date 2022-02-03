import styled from 'styled-components';
import ContentSet from '@components/Details/ContentSet';
import { useState } from 'react';

const Menu = () => {
	const [selectDashBoard, setSelectDashBoard] = useState(true);
	const dashBoardHandler = () => {
		setSelectDashBoard(true);
	};
	const lectureIntroHandler = () => {
		setSelectDashBoard(false);
	};
	return (
		<>
			<MenuContainer>
				<TextContainer>
					{/* <UnederLine>대시 보드</UnederLine> */}
					<MenuText
						onClick={dashBoardHandler}
						style={{
							borderBottom: selectDashBoard ? 'solid' : '',
							borderColor: selectDashBoard ? '#333333' : '',
							borderWidth: selectDashBoard ? 'thick' : '',
						}}
					>
						대시 보드
					</MenuText>
					<MenuText
						onClick={lectureIntroHandler}
						style={{
							borderBottom: !selectDashBoard ? 'solid' : '',
							borderColor: !selectDashBoard ? '#333333' : '',
							borderWidth: !selectDashBoard ? 'thick' : '',
						}}
					>
						강의 소개
					</MenuText>
				</TextContainer>
			</MenuContainer>
			{selectDashBoard && <ContentSet />}
		</>
	);
};
const MenuContainer = styled.div`
	height: 63px;
	border-bottom: solid;
	border-color: #333333;
	border-width: thin;
	display: flex;
	align-items: center;
	width: 100vw;
	display: flex;
	justify-content: center;
`;
const TextContainer = styled.div`
	width: 1440px;
	display: flex;
	margin: 0 135px;
`;
const MenuText = styled.button`
	background-color: transparent;
	border: none;
	font-family: NanumSquare;
	font-style: normal;
	font-weight: 800;
	font-size: 18px;
	line-height: 140.62%;
	display: flex;
	align-items: center;
	height: 61px;
	padding: 0 20px;
	:hover {
		cursor: pointer;
	}
`;

export default Menu;
