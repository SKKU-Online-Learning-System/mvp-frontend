import axiosInstance from '.';

export const getAllLectureCategories = () => {
	return axiosInstance.get(`/api/courses/cat1`);
};
