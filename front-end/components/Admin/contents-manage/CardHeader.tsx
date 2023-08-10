import React from 'react';

import OperationBtn from './OperationBtn';

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
			<OperationBtn oper={operation} onChangeOper={onChangeOperation} />
			<h3 className="text-[28px] font-bold">{title}</h3>
			{instructor ? <span>{instructor} 교수</span> : ''}
		</div>
	);
};

export default CardHeader;
