export const getDiffDays = (storedDate: Date) => {
	let currentTime = new Date().getTime();
	let expireTime = new Date(storedDate).getTime();

	let minutes = (currentTime - expireTime) / (1000 * 60 * 60 * 24);

	return Math.round(minutes); // 30일 이하인경우 신규로 처리
};
