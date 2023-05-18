import React from 'react';
import { useRouter } from 'next/router';

import { getTimeBefore } from 'utils/getTimeBefore';

const QuestionBox = ({ question, courseName }: any) => {
	const router = useRouter();

	const handleClick = (questionId: number) => {
		router.push(`/questions/${questionId}`);
	};

	return (
		<li
			className="hover:bg-[#f8f9fa] hover:duration-300 m-auto cursor-pointer p-5 border-b-[1px] border-solid border-[#dee2e6] flex w-[1000px] list-none text-ellipsis"
			onClick={() => {
				handleClick(question.id);
			}}
		>
			<div className="w-[85%]">
				<header className="font-bold">{question.title || '제목없음'}</header>
				<section className="text-[0.8rem] text-[#616568] my-[10px] mx-0 text-ellipsis overflow-hidden break-words line-clamp-3">
					{question.contents}
				</section>
				<div className="text-[0.8rem] text-[#858a8d]">
					{`${question.author.nickname} · ${getTimeBefore(
						question.createdAt,
					)} · ${courseName}`}
				</div>
			</div>
			<div className="flex justify-center items-center w-[15%]">
				<div className="flex flex-col justify-center items-center border-1 border-solid border-[#dee2e6] w-[60px] h-[60px] rounded-[60px]">
					{question.answerCount}
					<div className="text-[0.7rem]">답변</div>
				</div>
			</div>
		</li>
	);
};

export default QuestionBox;
