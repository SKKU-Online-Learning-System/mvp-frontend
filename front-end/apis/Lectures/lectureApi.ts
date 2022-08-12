import axiosInstance from '..';

export const fetchAllLectureCategories = () => {
	return axiosInstance.get(`https://mrdang.kro.kr/courses/categories`);
};

export const fetchLectureLists = (category: string) => {
	return axiosInstance.get(`https://mrdang.kro.kr/courses/search?category2Id=${category}`);
};

export const fetchSearchedData = (name: string, difficulty: string) => {
	if (difficulty) {
		return axiosInstance.get(`https://mrdang.kro.kr/courses?s=${name}&difficulty=${difficulty}`);
	} else {
		return axiosInstance.get(`https://mrdang.kro.kr/courses/search?keyword=${name}`);
	}
};

export const fetchAllLecturesPerPage = (pageNum: number) => {
	return axiosInstance.get(`https://mrdang.kro.kr/courses/search?page=${pageNum}`);
};
