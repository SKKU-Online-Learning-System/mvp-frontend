export const HTTP_STATUS_CODE: Record<string, number> = {
	OK: 200,
	CREATED: 201,
	BAD_REQUEST: 400,
	UNAUTHORIZED: 401, // 인증되지 않음. ex) 로그인 X
	FORBIDDEN: 403, // 권한이 없음 ex) 권한 없는 요청.
	NOT_FOUND: 404,
	INTERNAL_SERVER_ERROR: 500,
	SERVICE_UNAVAILABLE: 503,
};

// Note. https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#client_error_responses
export const HTTP_ERROR_MESSAGE: { [key: number]: Record<string, string> } = {
	[HTTP_STATUS_CODE.BAD_REQUEST]: {
		title: 'Bad Request',
		message:
			'The server cannot or will not process the request due to something that is perceived to be a client error',
	},
	[HTTP_STATUS_CODE.UNAUTHORIZED]: {
		title: 'Unauthorized',
		message: 'client must authenticate itself to get the requested response',
	},
	[HTTP_STATUS_CODE.FORBIDDEN]: {
		title: 'Forbidden',
		message: 'The client does not have access rights to the content',
	},
	[HTTP_STATUS_CODE.NOT_FOUND]: {
		title: 'Not Found',
		message: 'The server can not find the requested resource',
	},
	[HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR]: {
		title: 'Internal Server Error',
		message:
			'The server has encountered a situation it does not know how to handle.',
	},
	[HTTP_STATUS_CODE.SERVICE_UNAVAILABLE]: {
		title: 'Service Unavailable',
		message: 'The server is not ready to handle the request.',
	},
};
