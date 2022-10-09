import axiosInstance from 'apis';
import { ISearchedCourse } from 'types/Course';

export default {
	fetchCourseDetail: (courseId: string) => {
		return axiosInstance.get(`/courses/${courseId}`);
	},
	fetchCourseDetailLectures: (courseId: string) => {
		return axiosInstance.get(`/courses/${courseId}/lectures`);
	},
	fetchCourseDetailQna: (courseId: string) => {
		return axiosInstance.get(`/questions/course/${courseId}`);
	},
	fetchAllCourseCategories: () => {
		return axiosInstance.get(`courses/categories`);
	},
	fetchCourseLists: (category?: string) => {
		return axiosInstance.get<ISearchedCourse>('courses/search', {
			params: {
				category2Id: category,
			},
		});
	},
	fetchSearchedCourses: (keyword: string, difficulty?: string) => {
		return axiosInstance.get('courses/search', {
			params: {
				keyword: keyword,
				difficulty,
			},
		});
	},
	fetchAllCoursesPerPage: (pageNum: number) => {
		return axiosInstance.get('courses/search', {
			params: {
				page: pageNum,
			},
		});
	},
};
