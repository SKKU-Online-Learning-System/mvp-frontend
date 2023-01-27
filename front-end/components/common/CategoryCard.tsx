import React, { Children } from 'react';
import styled from 'styled-components';

interface CardProps {
	children?: React.ReactNode;
	header?: string;
	smallHeader?: string;
	img?: string;
	width?: string;
	margin?: string;
}
const CategoryCard = ({
	header,
	children,
	smallHeader,
	width,
	margin,
}: CardProps) => {
	return (
		<CardWrapper style={{ width: `${width}`, margin: `${margin}` }}>
			<div className="header">
				<div className="small-header"> {smallHeader}</div>
				<img
					style={{ right: 0, top: 0, position: 'absolute', cursor: 'pointer' }}
					src={'images/plus_icon.png'}
					width="24px"
					onClick={() => alert('plus')}
				></img>
				{header || ''}
			</div>
			<CardContentWrapper>
				<CardChildren>{children}</CardChildren>
			</CardContentWrapper>
		</CardWrapper>
	);
};

export default CategoryCard;

const CardWrapper = styled.div`
	.header {
		position: relative;
		background: rgba(0, 0, 0, 0.7);
		color: white;
		padding: 10px 20px 10px 20px;
		font-size: 1.2rem;
		font-weight: bold;
		white-space: nowrap;
	}
	.small-header {
		font-size: 0.7rem;
		color: #8d8e8e;
	}
	display: flex;
	flex-direction: column;
`;
const CardContentWrapper = styled.div`
	background-color: white;
	padding-bottom: 20px;
	border: solid;
	border-color: #e2e2e2;
	border-width: thin;
`;

const CardChildren = styled.div`
	margin: 0 20px;
	padding: 8px 0;
	&:not(:last-child) {
		border-bottom: 1px solid gray;
	}
`;
