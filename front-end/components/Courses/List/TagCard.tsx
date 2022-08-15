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
	width: 130px;
	height: 36px;
	border-radius: 4px;
	justify-content: center;
	align-items: center;
	color: #fff;
	background-color: #b8b8b8;

	padding: 1rem;
	margin-right: 10px;
	margin-top: 10px;
	margin-bottom: 10px;
	font-size: 1rem;
`;
//export default React.memo(TagCard);
export default TagCard;
