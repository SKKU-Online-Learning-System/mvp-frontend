import axiosInstance from '..';

export default {
	fetchBannerImgUrls: () => {
		return axiosInstance.get('/banners');
	},
};
