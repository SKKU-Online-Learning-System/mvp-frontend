import axiosInstance from 'apis';
import { IEnrolledCourse } from 'types/MyPage';

export default {
	fetchRecentLectures: () => {
		return axiosInstance.get('history', { willUseCustomErrorHandler: true });
	},

	fetchCompletedLectures: () => {
		return axiosInstance.get('completed', { willUseCustomErrorHandler: true });
	},

	fetchCurrentLearningCourses: () => {
		return axiosInstance.get<IEnrolledCourse[]>('enrollment', {
			willUseCustomErrorHandler: true,
		});
	},
};
