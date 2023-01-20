import axiosInstance from '..';
import { ICourse } from 'types/Main';

export default {
	fetchBannerImgUrls: () => {
		return axiosInstance.get('/banners');
	},
	fetchPopularCourses: (): Promise<ICourse[]> => {
		return axiosInstance.get('/courses/popular').then((res) => res.data);
	},
};
