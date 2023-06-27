import axiosInstance from 'apis';

import { INewCourseInfo, ICourseRetrieveInfo } from 'types/Admin/Index';

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
};

export default functions;
