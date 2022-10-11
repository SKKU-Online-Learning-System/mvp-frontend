import { rest } from 'msw';
/*
req : 들어온 요청에 대한 정보
res : mocked response를 만들기 위한 함수.
ctx : status code, header, body 같은것을 만들기 위해 도와주는 함수 그룹.

sessionStorage, localStorage들을 이용할수도 있습니다.
*/
export const requestHandlers = [
	rest.get('/test', (req, res, ctx) => {
		return res(
			ctx.status(200),
			ctx.json({
				data: 'get result',
			}),
		);
	}),
	rest.post('/test', (req, res, ctx) => {
		return res(
			ctx.status(201),
			ctx.json({
				data: 'post Result',
			}),
		);
	}),
];
