import axiosInstance from 'apis';
import { ICourseInfo, ILatestLecture } from 'types/MyPage';

export default {
	fetchRecentLectures: (): Promise<ILatestLecture[]> => {
		return axiosInstance
			.get('history', { willUseCustomErrorHandler: true })
			.then((res) => res.data);
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

	fetchQuestions: () => {
		return axiosInstance.get('/questions');
	},
};
