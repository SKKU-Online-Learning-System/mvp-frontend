import axiosInstance from 'apis';

import {
	INewCourseInfo,
	ICourseRetrieveInfo,
	ICourseOrdersInfo,
} from 'types/Admin/Index';

const functions = {
	fetchPopularContentsInfo: async (
		mostPopularCategoryTitle: string,
	): Promise<ICourseRetrieveInfo[]> => {
		const res = await axiosInstance.get('/popular-courses', {
			params: {
				limit: 8,
				category1: mostPopularCategoryTitle,
			},
		});
		return res.data;
	},
	fetchNewContentsInfo: async (): Promise<INewCourseInfo[]> => {
		const res = await axiosInstance.get('/courses/recent');
		return res.data;
	},
	sendPopularCourseOrders: async (
		courseOrdersInfo: ICourseOrdersInfo,
	): Promise<ICourseOrdersInfo> => {
		const res = await axiosInstance.post('/course_layout/popular', {
			courseOrdersInfo,
		});
		return res.data;
	},
	// sendCateogryCourseOrders: async (courseOrdersInfo: ICourseOrdersInfo): Promise<ICourseOrdersInfo> => {
	// 	const res = await axiosInstance.post(`/course_layout/${category}`, {
	// 		courseId: number
	// 		thumbnailLink: string
	// 		order: number
	// 	});
	// 	return res.data;
	// },
};

export default functions;
