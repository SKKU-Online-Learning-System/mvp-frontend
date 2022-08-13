import axiosInstance from 'apis';

export const fetchCourseDetail = (courseId: any) => {
	return axiosInstance.get(`/courses/${courseId}`);
};

export const fetchCourseDetailLectures = (courseId: any) => {
	return axiosInstance.get(`/courses/${courseId}/lectures`);
};

export const fetchCourseDetailQna = (courseId: any) => {
	return axiosInstance.get(`/questions/course/${courseId}`);
};
