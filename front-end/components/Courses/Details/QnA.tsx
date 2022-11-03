import React from 'react';
import styled from 'styled-components';
import QnAItem from './QnAItem';
import { useRouter } from 'next/router';
import { IQna } from 'types/Course';
interface IQnA {
	courseId: string;
	qna: IQna[];
}

const QnA = ({ courseId, qna }: IQnA) => {
	const router = useRouter();

	const handleClick = () => {
		router.push(`/questions/course/${courseId}`);
	};

	return (
		<Container>
			<header>
				<div
					style={{
						fontSize: '0.5rem',
						color: '#c2c1c1',
						fontWeight: 'bold',
					}}
				>
					Recent Questions
				</div>
				<div style={{ display: 'flex' }}>
					<h2 style={{ width: '20%' }}>최근 한 질문</h2>
					<div onClick={handleClick} className="more">
						MORE
					</div>
				</div>
			</header>
			{qna.map((ele) => {
				return (
					<QnAItem
						key={ele.id}
						question={ele.contents}
						answer={ele.answers[0]?.contents || 'x'}
					/>
				);
			})}
		</Container>
	);
};

export default QnA;

const Container = styled.div`
	width: 80%;
	margin: auto;
	padding: 25px;
	font-family: 'Noto Sans KR';
	.more {
		font-size: 0.9rem;
		cursor: pointer;
		border: solid;
		border-color: #b1afaf;
		padding: 5px;
		border-radius: 0.5rem;
		& :hover {
			background-color: #6e6e6e;
			color: #dfdfdf;
			transition: 0.3s;
		}
	}
	& header {
		margin: 0 0 16px 18px;
	}
	& li {
		border-bottom: solid;
		border-color: #dfdfdf;
		color: #393939;
		font-size: 0.95rem;
		margin: 3px 0;
	}
	& p {
		color: #bcbcbc;
		font-size: 0.8rem;
		font-weight: bold;
	}
	& ul {
		margin: 0;
		padding: 0 0 0 15px;
	}
	& h3,
	h1,
	h2 {
		margin: 0;
		color: #393939;
	}
	& h2 {
		font-weight: bold;
	}
`;
