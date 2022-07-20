import React from 'react';
import styled from 'styled-components';
const QnABox = () => {
	return (
		<div style={{ marginBottom: '80px' }}>
			<div
				style={{ display: 'flex', position: 'relative', overflow: 'hidden' }}
			>
				<h1 style={{ fontFamily: 'Gugi', color: '#086ac5' }}>Q.</h1>
				<Question>
					수업 잘 듣고 있습니다. 3강에서 말씀하신 내용중 OOO 부분이 이해가 잘
					안되는데 관련하여 이러저러하게 설명해수업 잘 듣고 있습니다. 3강에서
					말씀하신 내용중
				</Question>
				<LineDeco />
			</div>
			<div style={{ display: 'flex' }}>
				<h1 style={{ fontFamily: 'Gugi', color: '#ea0000' }}>A.</h1>
				<Answer>
					OOO에 관해서는 이러저러하게 설명할 수 있습니다. 이런 저런 책을
					참고하여 공부하면 도움이 될 것 입니다. OOOO에 관해서는 이러저러하게
					설명할 수 있습니다. 이런 저런 책을 참고하여 공부하면 도움이 될 것
					입니다. OOOO에 관해서는 이러저러하게 설명할 수 있습니다. 이런 저런
					책을 참고하여 공부하면 도움이 될 것 입니다. O
				</Answer>
			</div>
		</div>
	);
};

export default QnABox;
const Question = styled.div`
	font-family: 'Noto Sans KR';
	padding: 15px 0 0 10px;
	color: #848484;
	font-weight: thin;
	font-size: 0.8rem;
	margin-bottom: 35px;
`;
const Answer = styled.div`
	font-family: 'Noto Sans KR';
	padding: 15px 0 0 10px;
	color: #393939;
	font-weight: bold;
`;
const LineDeco = styled.div`
	position: absolute;
	top: 40px;
	height: 100%;
	border-width: 0 0 0 3px;
	border-style: solid;
	border-color: #e7e7e7;
	margin-left: 12px;
`;
