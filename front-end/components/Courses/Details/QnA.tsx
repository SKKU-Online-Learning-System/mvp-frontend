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
	const recentQna = qna.slice(0, 3);

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
					<h2 style={{ paddingRight: '18px' }}>최근 한 질문</h2>
					{recentQna.length > 0 && (
						<MoreButton onClick={handleClick}>질문 더보기</MoreButton>
					)}
				</div>
			</header>

			{recentQna.length === 0 && (
				<div style={{ display: 'flex', alignItems: 'center' }}>
					<div style={{ padding: '0 18px' }}>첫 질문의 주인공이 되어보세요</div>
					<MoreButton onClick={handleClick}>질문 올려보기</MoreButton>
				</div>
			)}

			{recentQna.map((ele) => {
				return (
					<QnAItem
						key={ele.id}
						questionTitle={ele.title}
						answer={ele.answers[0]?.contents || '답변을 기다리고 있어요'}
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

const MoreButton = styled.div`
	color: #f2f4f6;
	background: #7dad47;
	border-radius: 7px;
	padding: 8px 12px;
	cursor: pointer;
	font-weight: 600;
`;
