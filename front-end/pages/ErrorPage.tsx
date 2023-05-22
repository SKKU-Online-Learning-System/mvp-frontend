import React, { ReactElement } from 'react';

import { HTTP_ERROR_MESSAGE } from 'constants/http';

const ErrorPage = ({ statusCode }: { statusCode: number }): ReactElement => {
	return (
		<div className="w-full h-full flex flex-col justify-center items-center">
			<div className="text-[100px] font-bold">{statusCode}</div>
			<h2>{HTTP_ERROR_MESSAGE[statusCode]?.title}</h2>
			<div>{HTTP_ERROR_MESSAGE[statusCode]?.message}</div>
		</div>
	);
};

export default ErrorPage;
