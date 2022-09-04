import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import styled from 'styled-components';
const data = {
	id: 1,
	author: '강의자',
	contents:
		'http://boj.kr/c8011b15074846f0ac9c659a869f7336위 링크에 제가 작성한 코드가 있습니다.선생님께서 작성하신 코드와 거의 유사하며차이점으로는 코드라...',
	createdAt: '17시간 전',
	answers: ['answer', 'asdf', 'asdf'],
};

const QuestionBox = ({ question, courseName }: any) => {
	const router = useRouter();

	const handleClick = (questionId: number) => {
		router.push(`/questions/${questionId}`);
	};
	useEffect(() => {
		console.log(courseName);
	}, []);
	return (
		<Wapper
			onClick={() => {
				handleClick(question.id);
			}}
		>
			<div className="left">
				<header className="title">{question.title || '제목없음'}</header>
				<section className="contents">{question.contents}</section>
				<div className="info">
					{`${question.author.nickname} · ${question.createdAt} · ${courseName}`}
				</div>
			</div>
			<div className="right">
				<div className="circle">
					{question.answers.length}
					<div className="circle-text">답변</div>
				</div>
			</div>
		</Wapper>
	);
};

export default QuestionBox;
const Wapper = styled.li`
	margin: auto;
	:hover {
		background-color: #f8f9fa;
	}
	cursor: pointer;
	padding: 20px;
	border-bottom: 1px solid #dee2e6;
	display: flex;
	width: 1000px;
	list-style: none;
	text-overflow: ellipsis;
	.left {
		width: 85%;
	}
	.right {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 15%;
	}
	.title {
		font-weight: bold;
	}
	.contents {
		font-size: 0.8rem;
		color: #616568;
		margin: 10px 0;

		text-overflow: ellipsis;
		overflow: hidden;
		word-break: break-word;

		display: -webkit-box;
		-webkit-line-clamp: 3; // 원하는 라인수
		-webkit-box-orient: vertical;
	}
	.info {
		font-size: 0.8rem;
		color: #858a8d;
	}
	.circle {
		border: 1px solid #dee2e6;
		width: 60px;
		height: 60px;
		border-radius: 60px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.circle-text {
		font-size: 0.7rem;
	}
`;
