import React, { ReactElement } from 'react';
import styled from 'styled-components';

import { Container } from 'pages/questions/[questionId]';

const QuestionDetailQ = ({ question }: any): ReactElement => {
	const date = new Date(question?.createdAt);
	return (
		<Container>
			<Wrapper>
				<div className="title">
					<span className="q-title">Q. </span>
					{question?.title || '제목없음'}
				</div>
				<div className="title-date">
					{question?.author.nickname} · {date.toLocaleString()}
				</div>
				<div className="contents">{question?.contents || '내용없음'}</div>
			</Wrapper>
		</Container>
	);
};

export default QuestionDetailQ;

const Wrapper = styled.div`
	padding: 1rem;
	.title {
		font-size: 1.5rem;
		font-weight: bold;
	}
	.a-title {
		font-family: 'Gugi';
		color: #086ac5;
	}
	.q-title {
		font-family: 'Gugi';
		color: #ea0000;
	}
	.title-date {
		border-bottom: 1px solid #adb5bd;
		color: #adb5bd;
		padding: 7px 0;
		margin-bottom: 20px;
	}
	.contents {
		line-height: 1.7;
	}
`;
