import axiosInstance from 'apis';
import { ICourseDetail, ICourseCategory, ISearchedCourse } from 'types/Course';
import { ILectureList } from 'types/Lecture';

export default {
	fetchCourseDetail: (courseId?: string): Promise<ICourseDetail> => {
		return axiosInstance.get(`/courses/${courseId}`).then((res) => res.data);
	},
	fetchCourseDetailLectures: (courseId?: string): Promise<ILectureList[]> => {
		return axiosInstance
			.get(`/courses/${courseId}/lectures`)
			.then((res) => res.data);
	},
	fetchAllCourseCategories: (): Promise<ICourseCategory[]> => {
		return axiosInstance.get(`courses/categories`).then((res) => res.data);
	},
	fetchCourseList: (category?: string): Promise<ISearchedCourse> => {
		return axiosInstance
			.get('courses/search', {
				params: {
					category2Id: category,
				},
			})
			.then((res) => res.data);
	},
	fetchSearchedCourseList: (
		keyword?: string,
		difficulty?: string,
	): Promise<ISearchedCourse> => {
		return axiosInstance
			.get('courses/search', {
				params: {
					keyword,
					difficulty,
				},
			})
			.then((res) => res.data);
	},
	fetchAllCoursesPerPage: (pageNum: number) => {
		return axiosInstance.get('courses/search', {
			params: {
				page: pageNum,
			},
		});
	},
	enrollCourse: (courseId: number): Promise<any> => {
		return axiosInstance
			.post('enrollment', {
				courseId,
			})
			.then((res) => res.data);
	},
};
