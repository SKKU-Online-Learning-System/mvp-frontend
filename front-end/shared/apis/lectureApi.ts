import axiosInstance from '.';

export const fetchAllLectureCategories = () => {
	return axiosInstance.get(`/api/courses/cat1`);
};

export const fetchLectureLists = (category: string) => {
	return axiosInstance.get(`/api/courses`);
};

export const fetchSearchedData = (name: string, difficulty: string) => {
	if (difficulty) {
		return axiosInstance.get(`/api/courses?s=${name}&difficulty=${difficulty}`);
	} else {
		return axiosInstance.get(`/api/courses?s=${name}`);
	}
};
