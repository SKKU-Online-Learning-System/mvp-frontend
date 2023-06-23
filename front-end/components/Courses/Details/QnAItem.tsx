import React, { ReactElement } from 'react';

interface IQnAItem {
	questionTitle: string;
	answer: string;
}

const QnAItem = ({ questionTitle, answer }: IQnAItem): ReactElement => {
	return (
		<div className="mb-[80px]">
			<div className="relative flex overflow-hidden">
				<h1 className="m-0 font-['Gugi'] text-[#086ac5]">Q.</h1>
				<div className="font-[var(--font-NotoSans)] pt-[15px] pr-0 pb-0 pl-[10px] text-[#848484] font-thin text-[0.8rem] mb-[35px]">
					{questionTitle}
				</div>
				<div className="absolute t-[40px] h-full border-l-[3px] border-solid border-[#e7e7e7] ml-3" />
			</div>
			<div className="flex">
				<h1 className="m-0 font-['Gugi'] text-[#ea0000]">A.</h1>
				<div className="font-[var(--font-NotoSans)] pt-[15px] pl-[10px] text-[#393939] font-bold">
					{answer}
				</div>
			</div>
		</div>
	);
};

export default QnAItem;
