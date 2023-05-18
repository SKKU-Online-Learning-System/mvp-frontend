import React from 'react';

interface IMyPageProps {
	title?: string;
}

export const MyPageTitle = ({ title }: IMyPageProps) => {
	return (
		<div className="flex flex-col w-full bg-black/[0.7] py-[10px] px-5 leading-7">
			<span className="text-[#8d8e8e] text-base">MY PAGE</span>
			<span className="text-white text-[28px] pb-2">{title}</span>
		</div>
	);
};
