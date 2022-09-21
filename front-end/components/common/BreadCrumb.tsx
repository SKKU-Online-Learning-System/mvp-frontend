import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

// category > menu1 > menu2
interface Props {
	category: string;
	menu?: string[];
	categoryColor?: string;
	containerPadding?: string;
}

const BreadCrumb = ({
	category,
	menu = [],
	categoryColor,
	containerPadding,
}: Props) => {
	return (
		<Container containerPadding={containerPadding}>
			<div style={{ display: 'flex', fontSize: '28px', color: '#454545' }}>
				<Category categoryColor={categoryColor}>{category}</Category>
				{menu &&
					menu.map((elem, idx) => <SubCategory key={idx}>{elem}</SubCategory>)}
			</div>
		</Container>
	);
};
const Container = styled.div<Partial<Props>>`
	position: relative;
	display: flex;
	padding: ${(props) =>
		props.containerPadding ? props.containerPadding : undefined};
`;

const Category = styled.div<Partial<Props>>`
	// inline류 style은 first-letter x (ex: span)
	&::first-letter {
		border-top: 3px solid
			${(props) => (props.categoryColor ? props.categoryColor : '#25c3f3')};
	}
	opacity: 0.7;
`;

const SubCategory = styled.span`
	& ::before {
		padding-left: 8px;
		content: ' > ';
		opacity: 0.7;
		color: #454545;
	}
`;
export default React.memo(BreadCrumb);
