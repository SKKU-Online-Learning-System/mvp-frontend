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
			<img
				crossOrigin="anonymous"
				src={imageUrl}
				alt="#"
				style={{ maxWidth: '250px' }}
			/>
		</div>
	);
};

const CardWrapper = styled.div`
	display: flex;
`;
