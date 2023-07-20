import axiosInstance from 'apis';
import { AxiosResponse } from 'axios';

import { ICourseDetail, ICourseCategory, ISearchedCourse } from 'types/Course';
import { ILectureList } from 'types/Lecture';

const functions = {
	fetchCourseDetail: async (courseId?: string): Promise<ICourseDetail> => {
		const res = await axiosInstance.get(`/courses/${courseId}`);
		return res.data;
	},
	fetchCourseDetailLectures: async (
		courseId?: string,
	): Promise<ILectureList[]> => {
		const res = await axiosInstance.get(`/courses/${courseId}/lectures`);
		return res.data;
	},
	fetchAllCourseCategories: async (): Promise<ICourseCategory[]> => {
		const res = await axiosInstance.get(`/courses/categories`);
		return res.data;
	},
	fetchCourseList: async (category?: string): Promise<ISearchedCourse> => {
		const res = await axiosInstance.get('/courses/search', {
			params: {
				category2Id: category,
			},
		});
		return res.data;
	},
	fetchSearchedCourseList: async (
		keyword?: string,
		difficulty?: string,
	): Promise<ISearchedCourse> => {
		const res = await axiosInstance.get('/courses/search', {
			params: {
				keyword,
				difficulty,
			},
		});
		return res.data;
	},
	fetchAllCoursesPerPage: (pageNum: number): Promise<AxiosResponse> => {
		return axiosInstance.get('/courses/search', {
			params: {
				page: pageNum,
			},
		});
	},
	enrollCourse: async (courseId: number): Promise<AxiosResponse> => {
		const res = await axiosInstance.post('/enrollment', {
			courseId,
		});
		return res.data;
	},
};

export default functions;
