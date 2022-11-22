import axiosInstance from 'apis';
import { ICourseInfo } from 'types/MyPage';

export default {
	fetchRecentLectures: () => {
		return axiosInstance.get('history', { willUseCustomErrorHandler: true });
	},

	fetchCompletedLectures: () => {
		return axiosInstance.get('completed', { willUseCustomErrorHandler: true });
	},

	fetchCurrentLearningCourses: () => {
		return axiosInstance.get<ICourseInfo[]>('enrollment', {
			willUseCustomErrorHandler: true,
		});
	},

	fetchLectureCounts: () => {
		return axiosInstance.get('/lectures/count');
	},

	fetchFinishedLectureCounts: () => {
		return axiosInstance.get('/history/lectures/finished');
	},

	fetchCompleted: () => {
		return axiosInstance.get('/completed');
	},
};
