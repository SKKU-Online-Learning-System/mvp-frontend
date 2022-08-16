import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from 'store/app/hooks';
import { RootState } from 'store/app/store';

const BreadCrumb = () => {
	const { menu } = useAppSelector((state: RootState) => state.lecture);

	return (
		<Container>
			<div style={{ fontSize: '28px', color: '#454545' }}>
				<span
					style={{
						position: 'absolute',
						borderTop: '3px solid #25c3f3',
						width: '20px',
						left: '1px',
					}}
				/>
				<span style={{ opacity: '0.7' }}>강좌LIST</span>
				{menu?.length > 0 &&
					menu.map((elem, idx) => <Span key={idx}>{elem}</Span>)}
			</div>
		</Container>
	);
};
const Container = styled.div`
	position: relative;
	display: flex;
	padding: 2rem 0;
`;

const Span = styled.span`
	& ::before {
		content: ' > ';
		opacity: 0.7;
		color: #454545;
	}
	opacity: 0.7;
`;

export default React.memo(BreadCrumb);
