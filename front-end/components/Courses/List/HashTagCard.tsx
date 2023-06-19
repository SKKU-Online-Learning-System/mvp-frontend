import React, { ReactElement } from 'react';

interface CardProps {
	name: string;
	height?: number;
	bgColor?: string;
	onClick?: () => void;
}
const HashTagCard = ({
	name,
	height,
	bgColor,
	onClick: handleClick,
}: CardProps): ReactElement => {
	return (
		<div
			className={`text-[#696969] bg-[${bgColor ? bgColor : '#f0f0f0'}] h-[${
				height ? height : '36px'
			}] inline-flex items-center rounded-2xl whitespace-nowrap cursor-pointer p-4 text-base`}
		>
			{name}
		</div>
	);
};

//export default React.memo(TagCard);
export default HashTagCard;
