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

	rest.get('/history', (req, res, ctx) => {
		return res(
			ctx.status(200),
			ctx.json([
				{
					id: 1,
					lastTime: 102,
					updatedAt: '2022-10-10T12:01:37.044Z',
					isFinished: false,
					lecture: {
						id: 1,
						title: 'Course Overview',
						duration: 289,
						filename:
							'https://mrdang-lectures.s3.ap-northeast-2.amazonaws.com/advanced-topics-in-software-engineering/%5B%EA%B3%B5%EA%B0%9C%ED%98%95+%EC%98%A8%EB%9D%BC%EC%9D%B8+%EA%B0%95%EC%9D%98%5D+Advanced+Topics+in+Software+Engineering+0%EA%B0%95-Course+Overview.mp4',
						course: {
							id: 1,
							title: 'Advanced topics in software engineering',
							thumbnail:
								'https://mrdang-lectures.s3.ap-northeast-2.amazonaws.com/thumbnail-images/advanced-topics-in-software-engineering.jpg',
						},
					},
				},
			]),
		);
	}),
];
