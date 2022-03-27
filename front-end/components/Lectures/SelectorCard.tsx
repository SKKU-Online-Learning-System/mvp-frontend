import React from 'react';
import styled from 'styled-components';
interface CardProps {
	title: string;
	type: string[];
	setCheckList: any;
	checkList: boolean[];
}

const SelectorCard = ({ setCheckList, checkList, title, type }: CardProps) => {
	const handleClicked = (index: number) => {
		setCheckList((prev: boolean[]) =>
			prev.map((elem: boolean, idx: number) => (idx === index ? !elem : elem)),
		);
	};
	return (
		<Wrapper>
			<TypeHeader>{title}</TypeHeader>
			{type.map((x, index) => (
				<div key={x} style={{ color: 'rgb(120, 120, 120)' }}>
					<input
						type="checkbox"
						onClick={() => handleClicked(index)}
						name={x}
					/>{' '}
					{x}
				</div>
			))}
		</Wrapper>
	);
};
const Wrapper = styled.div`
	justify-content: center;
	align-items: center;
`;

const TypeHeader = styled.div`
	font-weight: 700;
	color: rgb(89, 89, 89);
	border-bottom: 1px solid rgb(228, 228, 228);
	border-top: 1px solid rgb(228, 228, 228);
	margin: 1rem 0;
	padding: 0.5rem;
	align-items: center;
`;

export default SelectorCard;
