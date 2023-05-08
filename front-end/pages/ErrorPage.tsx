import React, { ReactElement } from 'react';
import styled from 'styled-components';

import { HTTP_ERROR_MESSAGE } from 'constants/http';

const ErrorPage = ({ statusCode }: { statusCode: number }): ReactElement => {
	return (
		<Wrapper>
			<div style={{ fontSize: '100px', fontWeight: 'bold' }}>{statusCode}</div>
			<h2>{HTTP_ERROR_MESSAGE[statusCode]?.title}</h2>
			<div>{HTTP_ERROR_MESSAGE[statusCode]?.message}</div>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export default ErrorPage;
