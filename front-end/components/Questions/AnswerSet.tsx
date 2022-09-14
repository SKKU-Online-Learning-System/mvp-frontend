import { Container } from 'pages/questions/[questionId]';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import AnswerDetail from './AnswerDetail';

const AnswerSet = ({ answers }: any) => {
	const [orderedAnswer, setorderedAnswer] = useState<any[]>([]);
	useEffect(() => {
		const orderedDate = answers?.sort(
			(a, b) => new Date(a.createdAt) - new Date(b.createdAt),
		);
		setorderedAnswer(orderedDate);
	}, [answers]);
	return (
		<Wrapper>
			<Container>
				<div className="answer-desc">
					총 {answers?.length}개의 답변이 달렸습니다.
				</div>
			</Container>
			{orderedAnswer?.map((answer: any) => {
				return <AnswerDetail key={answer?.id} answers={answer} />;
			})}
		</Wrapper>
	);
};

export default AnswerSet;
const Wrapper = styled.div`
	border: solid;
	margin: 2rem auto;
	background-color: #f8f9fa;
	border: 1px solid #e9ecef;
	.answer-desc {
		/* width: 800px; */
		margin: 1rem auto;
		font-weight: bold;
		padding-left: 1rem;
		font-size: 1.2rem;
	}
`;
