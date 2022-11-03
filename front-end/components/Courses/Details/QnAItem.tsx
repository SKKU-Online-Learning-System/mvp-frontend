import styled from 'styled-components';
interface IQnAItem {
	question: string;
	answer: string;
}
const QnAItem = ({ question, answer }: IQnAItem) => {
	return (
		<div style={{ marginBottom: '80px' }}>
			<div
				style={{ display: 'flex', position: 'relative', overflow: 'hidden' }}
			>
				<h1 style={{ fontFamily: 'Gugi', color: '#086ac5' }}>Q.</h1>
				<Question>{question}</Question>
				<LineDeco />
			</div>
			<div style={{ display: 'flex' }}>
				<h1 style={{ fontFamily: 'Gugi', color: '#ea0000' }}>A.</h1>
				<Answer>{answer}</Answer>
			</div>
		</div>
	);
};

export default QnAItem;
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
