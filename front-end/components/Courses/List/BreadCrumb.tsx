import React from 'react';
import styled from 'styled-components';
const BreadCrumb = () => {
	return (
		<Container>
			<div style={{ fontSize: '24px', color: '#454545', fontWeight: 700 }}>
				강좌LIST > <span>Test</span>
			</div>
		</Container>
	);
};
const Container = styled.div`
	display: flex;
	padding: 2rem 0;
`;

export default React.memo(BreadCrumb);
