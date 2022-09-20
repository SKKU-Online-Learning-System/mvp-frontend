import axiosInstance from '..';

export const postAnswer = ({ questionId, contents }) => {
	return axiosInstance.post(`/answers`, {
		questionId,
		contents,
	});
};
