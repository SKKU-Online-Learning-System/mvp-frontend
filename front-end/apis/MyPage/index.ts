import axiosInstance from 'apis';

export const fetchRecentLectures = () => {
	return axiosInstance.get('history/latest');
};

export const fetchCompletedLectures = () => {
	return axiosInstance.get('completed');
};

export const fetchCurrentLearningCourses = () => {
	return axiosInstance.get('enrollment');
};
