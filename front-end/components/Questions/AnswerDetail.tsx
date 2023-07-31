import React from 'react';

const AnswerDetail = ({ answers }: any) => {
	const date = new Date(answers?.createdAt);
	return (
		<div className="w-[800px] mbl:w-[300px] m-auto">
			<div className="my-6 mx-auto bg-white border-[1px] border-solid border-[#e9ecef] rounded-3xl p-4">
				<div className="text-2xl font-bold">
					<span className=" text-[var(--color-mrgreen-5)]">A. </span>
				</div>
				<div className="border-b-[1px] border-solid border-[#adb5bd] text-[#adb5bd] py-[7px] px-0 mb-5">
					{answers?.author.nickname} · {date.toLocaleString()}
				</div>
				<div className="leading-[1.7]">{answers?.contents || '내용없음'}</div>
			</div>
		</div>
	);
};

export default AnswerDetail;
