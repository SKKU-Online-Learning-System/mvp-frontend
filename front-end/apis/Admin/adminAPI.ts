import axiosInstance from 'apis';

import { INewCourseInfo, ICourseRetrieveInfo } from 'types/Admin/Index';

const functions = {
	fetchPopularContentsInfo: async (): Promise<ICourseRetrieveInfo[]> => {
		const res = await axiosInstance.get('/popular-courses', {
			params: {
				limit: 8,
			},
		});
		return res.data;
	},
	fetchNewContentsInfo: async (): Promise<INewCourseInfo[]> => {
		const res = await axiosInstance.get('/courses/recent');
		return res.data;
	},
	fetchCat1ContentsInfo: async (): Promise<ICourseRetrieveInfo[]> => {
		const res = await axiosInstance.get('/popular-courses', {
			params: {
				limit: 8,
				category1: '데이터 사이언스',
			},
		});
		return res.data;
	},
	fetchCat2ContentsInfo: async (): Promise<ICourseRetrieveInfo[]> => {
		const res = await axiosInstance.get('/popular-courses', {
			params: {
				limit: 8,
				category1: '교양',
			},
		});
		return res.data;
	},
};

export default functions;
