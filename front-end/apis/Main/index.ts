import { AxiosResponse } from 'axios';

import { ICourse } from 'types/Main';
import axiosInstance from '..';

const functions = {
	fetchBannerImgUrls: (): Promise<AxiosResponse> => {
		return axiosInstance.get('/banners');
	},
	fetchPopularCourses: async (): Promise<ICourse[]> => {
		const res = await axiosInstance.get('/courses/popular');
		return res.data;
	},
};

export default functions;
