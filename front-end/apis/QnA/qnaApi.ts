import axiosInstance from '..';

export const postAnswer = ({ questionId, contents }) => {
	return axiosInstance.post(`/answers`, {
		questionId,
		contents,
	});
};

export const postQuestion = ({ courseId, title, contents }: any) => {
	return axiosInstance.post(`/questions`, {
		courseId,
		title,
		contents,
	});
};

export const fetchQuestions = (courseId) => {
	return axiosInstance.get(`questions/course/${courseId}`);
};
export const fetchCourseName = (courseId) => {
	return axiosInstance.get(`courses/${courseId}`);
};
