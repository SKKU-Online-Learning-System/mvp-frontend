import React, { ReactElement } from 'react';
import styled from 'styled-components';
interface QnAProps {
	question: string;
	answer: string;
}

const QnABox = ({ question, answer }: QnAProps): ReactElement => {
	return (
		<div style={{ marginBottom: '80px' }}>
			<div className="flex relative overflow-hidden">
				<h1 className="font-['Gugi'] text-[#086ac5]">Q.</h1>
				<div className="font-['Noto Sans KR'] pt-[15px] pl-[10px] text-[#848484] font-thin text-[0.8rem] mb-[35px]">
					{question}
				</div>
				<div className="absolute t-[40px] h-full border-l-[3px] border-solid border-[#e7e7e7] ml-3" />
			</div>
			<div className="flex">
				<h1 className="font-['Gugi'] text-[#ea0000]">A.</h1>
				<div className="font-['Noto Sans KR'] pt-[15px] pl-[10px] text-[#393939] font-bold">
					{answer}
				</div>
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
