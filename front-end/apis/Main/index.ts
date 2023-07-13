import { AxiosResponse } from 'axios';

import { ICourse, MainCourse } from 'types/Main';
import axiosInstance from '..';

const functions = {
	fetchBannerImgUrls: (): Promise<AxiosResponse> => {
		return axiosInstance.get('/banners');
	},
	fetchPopularCourses: async (): Promise<ICourse[]> => {
		const res = await axiosInstance.get('/courses/popular');
		return res.data;
	},
	fetchRecommendedCourse: async (
		order: number,
		sequence: number,
	): Promise<MainCourse> => {
		const res = await axiosInstance.get(`/main-layout/${order}/${sequence}`);
		return res.data;
	},
};

export default functions;
