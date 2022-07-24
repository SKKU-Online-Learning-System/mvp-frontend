import React from 'react';
import styled from 'styled-components';

export const CardList = ({ imageUrlLists }) => {
	return (
		<CardWrapper>
			{imageUrlLists.map((url, idx) => (
				<ImageComponent imageUrl={url} key={idx} />
			))}
		</CardWrapper>
	);
};

const ImageComponent = ({ imageUrl }) => {
	return (
		<div
			style={{ paddingRight: '10px', overflow: 'auto', cursor: 'pointer' }}
			onClick={() => alert('Clicked')}
		>
			<img crossOrigin="anonymous" src={imageUrl} alt="#" width="100%" />
		</div>
	);
};

const CardWrapper = styled.div`
	display: flex;
	max-width: 1650px; // 이 부분도 CONST로 관리 해야함.
`;
