// NOTE. https://github.com/vercel/next.js/blob/canary/examples/with-msw/mocks/index.ts

const isClientSide = typeof window !== 'undefined' ? true : false;
async function initMocks() {
	if (isClientSide) {
		const { worker } = await require('./browser');
		worker.start({
			onUnhandledRequest: 'bypass', // 콘솔에 warning 제거.
		});
	} else {
		const { server } = await require('./server');
		server.listen();
	}
}

initMocks();

export {};
