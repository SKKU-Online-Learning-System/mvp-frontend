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

export const fetchAllCourseCategories = () => {
	return axiosInstance.get(`courses/categories`);
};

export const fetchCourseLists = (category: string) => {
	return axiosInstance.get('courses/search', {
		params: {
			category2Id: category,
		},
	});
};

export const fetchSearchedCourses = (name: string, difficulty?: string) => {
	return axiosInstance.get('courses/search', {
		params: {
			keyword: name,
			difficulty,
		},
	});
};

export const fetchAllCoursesPerPage = (pageNum: number) => {
	return axiosInstance.get('courses/search', {
		params: {
			page: pageNum,
		},
	});
};
