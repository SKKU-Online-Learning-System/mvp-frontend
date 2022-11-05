import axiosInstance from '..';

export default {
	postAnswer: ({
		questionId,
		contents,
	}: {
		questionId: number;
		contents: string;
	}) => {
		return axiosInstance.post(`/answers`, {
			questionId,
			contents,
		});
	},
	postQuestion: ({
		courseId,
		title,
		contents,
	}: {
		courseId: number;
		title: string;
		contents: string;
	}) => {
		return axiosInstance.post(`/questions`, {
			courseId,
			title,
			contents,
		});
	},
	fetchCourseDetailQna: (courseId: string) => {
		return axiosInstance.get(`/questions/course/${courseId}`);
	},
};
