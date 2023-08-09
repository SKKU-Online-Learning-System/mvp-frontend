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
				<div>
					<span>현재 운영상태: </span>
					<span>{operation ? '운영 중' : '미운영 중'}</span>
				</div>
				<button onClick={onChangeOperation}>운영상태 변경</button>
			</div>
			<h3 className="text-[28px] font-bold">{title}</h3>
			{instructor ? <span>{instructor} 교수</span> : ''}
		</div>
	);
};

export default CardHeader;
