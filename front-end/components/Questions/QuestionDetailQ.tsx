import React, { ReactElement } from 'react';

const QuestionDetailQ = ({ question }: any) => {
	const date = new Date(question?.createdAt);
	return (
		<div className="w-[800px] m-auto">
			<div className="p-4">
				<div className="text-2xl font-bold">
					<span className="font-['Gugi'] text-[#ea0000]">Q. </span>
					{question?.title || '제목없음'}
				</div>
				<div className="border-b-[1px] border-solid border-[#adb5bd] text-[#adb5bd] px-0 py-[7px] mb-5">
					{question?.author.nickname} · {date.toLocaleString()}
				</div>
				<div className="leading-[1.7]">{question?.contents || '내용없음'}</div>
			</div>
		</div>
	);
};

export default QuestionDetailQ;
