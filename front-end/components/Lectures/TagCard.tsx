import React from 'react';
import styled from 'styled-components';
interface CardProps {
	name: string[];
}
const TagCard = ({ name }: CardProps) => {
	return (
		<>
			{name.map((x) => {
				return <Card key={x}>{x}</Card>;
			})}
		</>
	);
};

const Card = styled.div`
	display: flex;
	width: 50px;
	height: 20px;
	border-radius: 2px;
	justify-content: center;
	align-items: center;
	color: #fff;
	background-color: #b8b8b8;

	padding: 0.5rem;
	margin-right: 5px;
	margin-top: 5px;
	margin-bottom: 5px;
	font-size: 0.5rem;
`;
//export default React.memo(TagCard);
export default TagCard;
