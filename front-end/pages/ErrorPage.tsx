import React, { ReactElement } from 'react';

import { HTTP_ERROR_MESSAGE } from 'constants/http';

const ErrorPage = ({ statusCode }: { statusCode: number }) => {
	return (
		<div className="flex flex-col items-center justify-center w-full h-full">
			<div className="text-[100px] font-bold">{statusCode}</div>
			<h2>{HTTP_ERROR_MESSAGE[statusCode]?.title}</h2>
			<div>{HTTP_ERROR_MESSAGE[statusCode]?.message}</div>
		</div>
	);
};

export default ErrorPage;
