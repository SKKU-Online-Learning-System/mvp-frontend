import React from 'react';
import styled from 'styled-components';
const BreadCrumb = () => {
	return (
		<Container>
			<div style={{ fontSize: '18px', color: '#454545', fontWeight: 700 }}>
				전체
			</div>

			<Selector>
				<option>추천순</option>
				<option>인기순</option>
			</Selector>
		</Container>
	);
};
const Container = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 1rem;
`;

const Selector = styled.select`
	background-color: #fff;
	border-color: #dbdbdb;
	color: #363636;
	cursor: pointer; // 마우스 올렸을때 커서로 바꿔줌
	font-size: 1em;
	max-width: 100%;
	outline: none; // 선택 후 마우스 다른곳으로 옮기면 선택 테두리 사라짐
	font-weight: 500;
`;
export default React.memo(BreadCrumb);
