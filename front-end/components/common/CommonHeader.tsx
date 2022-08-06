import React from 'react';
import styled from 'styled-components';
interface HeaderProps {
	cat1: string;
	cat2?: string;
	lineColor?: string;
}
const CommonHeader = ({ lineColor, cat1, cat2 }: HeaderProps) => {
	return (
		<Container>
			<div
				style={{
					left: '3px',
					top: '-2px',
					position: 'absolute',
					borderTop: `2px solid ${lineColor}`,
					width: '20px',
				}}
			/>
			<span style={{ whiteSpace: 'nowrap' }}>{cat1} </span>
			<span style={{ whiteSpace: 'nowrap', fontWeight: 700 }}>
				{cat2 ? ` > ${cat2}` : ''}
			</span>
		</Container>
	);
};

export default CommonHeader;
const Container = styled.div`
	position: relative;
	padding-right: 40px;
	font-size: 1.5rem;
`;
