import React from 'react';

interface IMyPageProps {
	title?: string;
}

export const MyPageTitle = ({ title }: IMyPageProps) => {
	return (
		<div className="flex w-full bg-[var(--color-mrgreen-9)] py-[10px] px-5 leading-7">
			<span className="max-[1180px] text-white text-[25px] pb-2">{title}</span>
		</div>
	);
};
