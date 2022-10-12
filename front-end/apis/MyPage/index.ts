import axiosInstance from 'apis';
import { IEnrolledCourse } from 'types/MyPage';

export default {
	fetchRecentLectures: () => {
		return axiosInstance.get('history');
	},

	fetchCompletedLectures: () => {
		return axiosInstance.get('completed');
	},

	fetchCurrentLearningCourses: () => {
		return axiosInstance.get<IEnrolledCourse[]>('enrollment');
	},
};
