const TimeMap = [
	{ TEXT: '년 전', TIME: 1000 * 60 * 60 * 24 * 30 * 12 },
	{ TEXT: '달 전', TIME: 1000 * 60 * 60 * 24 * 30 },
	{ TEXT: '일 전', TIME: 1000 * 60 * 60 * 24 },
	{ TEXT: '시간 전', TIME: 1000 * 60 * 60 },
	{ TEXT: '분 전', TIME: 1000 * 60 },
	{ TEXT: '초 전', TIME: 1000 },
];

export const getTimeBefore = (createdAt: string | Date) => {
	const timeDiff = new Date().getTime() - new Date(createdAt).getTime();

	for (const elem of TimeMap) {
		const dateDiff = ~~(timeDiff / elem.TIME);

		if (dateDiff) {
			return `${dateDiff}${elem.TEXT}`;
		}
	}

	return '방금 전';
};
