import axiosInstance from '.';

export const fetchAllLectureCategories = () => {
	return axiosInstance.get(`/api/courses/cat1`);
};

export const fetchLectureLists = (category: string) => {
	return axiosInstance.get(`/api/courses`);
};

// /api/lectures?s=파이썬&difficulty=1,2&skill=python
export const fetchSearchedData = (
	s: string,
	difficulty: string = '0',
	skill: string,
) => {
	return axiosInstance.get(`/api/lectures?s=`);
};
