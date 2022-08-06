import axiosInstance from '..';

export const fetchBannerImgUrls = () => {
	return axiosInstance.get('/banner');
};
