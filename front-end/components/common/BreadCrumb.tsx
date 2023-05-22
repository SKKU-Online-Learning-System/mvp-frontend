import React from 'react';
import styled from 'styled-components';

// category > menu1 > menu2
interface IBreadCrumb {
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
}: IBreadCrumb) => {
	return (
		<Container containerPadding={containerPadding}>
			<div className="flex text-[28px] text-[#454545]">
				<Category categoryColor={categoryColor}>{category}</Category>
				{menu.length > 0 &&
					menu.map((elem, idx) => <SubCategory key={idx}>{elem}</SubCategory>)}
			</div>
		</Container>
	);
};

export default React.memo(BreadCrumb);

const Container = styled.div<Partial<IBreadCrumb>>`
	position: relative;
	display: flex;
	padding: ${(props) =>
		props.containerPadding ? props.containerPadding : undefined};
`;
const Category = styled.div<Partial<IBreadCrumb>>`
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
