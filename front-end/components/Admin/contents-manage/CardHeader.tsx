import React from 'react';

type PropType = {
	title: string;
	instructor: string;
	operation: boolean;
	onChangeOperation: () => void;
};

const CardHeader = ({
	title,
	instructor,
	operation,
	onChangeOperation,
}: PropType) => {
	return (
		<div className="flex items-center justify-between w-full bg-[var(--color-onSurface-100)] px-[5%] py-[2.5%] bg-red">
			<div className="flex flex-col items-start justify-center">
				<button
					onClick={onChangeOperation}
					className="text-xl font-semibold rounded-lg bg-[#b3df8c] py-2 px-4 shadow-lg transition hover:bg-[#b9c7ad]"
				>
					{operation ? '운영 中' : '미운영'}
				</button>
			</div>
			<h3 className="text-[28px] font-bold">{title}</h3>
			{instructor ? <span>{instructor} 교수</span> : ''}
		</div>
	);
};

export default CardHeader;
