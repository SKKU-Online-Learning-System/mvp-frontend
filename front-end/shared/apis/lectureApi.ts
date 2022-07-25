import axiosInstance from '.';

export const fetchAllLectureCategories = () => {
	return axiosInstance.get(`http://3.35.134.196:3000/courses/categories`);
};

export const fetchLectureLists = (category: string) => {
	return axiosInstance.get(`api/courses`);
};

export const fetchSearchedData = (name: string, difficulty: string) => {
	if (difficulty) {
		return axiosInstance.get(`courses?s=${name}&difficulty=${difficulty}`);
	} else {
		console.log(name)
		return axiosInstance.get(`http://3.35.134.196:3000/courses/search?keyword=${name}`);
	}
};
