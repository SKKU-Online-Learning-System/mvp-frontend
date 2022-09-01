import axiosInstance from 'apis';

export const fetchCourseDetail = (courseId: string) => {
	return axiosInstance.get(`/courses/${courseId}`);
};

export const fetchCourseDetailLectures = (courseId: string) => {
	return axiosInstance.get(`/courses/${courseId}/lectures`);
};

export const fetchCourseDetailQna = (courseId: string) => {
	return axiosInstance.get(`/questions/course/${courseId}`);
};
