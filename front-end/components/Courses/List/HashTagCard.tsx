import React from 'react';
import styled from 'styled-components';
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
}: CardProps) => {
	return (
		<Card height={height} bgColor={bgColor} onClick={handleClick}>
			{name}
		</Card>
	);
};

const Card = styled.div<Pick<CardProps, 'height' | 'bgColor'>>`
	display: inline-flex;
	align-items: center;
	height: ${(props) => (props.height ? props.height : '36px')};
	border-radius: 16px;
	white-space: nowrap;
	color: #696969;
	background-color: ${(props) => (props.bgColor ? props.bgColor : '#f0f0f0')};
	padding: 1rem;
	font-size: 1rem;
	cursor: pointer;
`;
//export default React.memo(TagCard);
export default HashTagCard;
