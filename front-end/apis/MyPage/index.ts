import axiosInstance from 'apis';
import {
	ICourseInfo,
	ILatestLecture,
	ILectureCount,
	IFinishedLectureCount,
} from 'types/MyPage';

export default {
	fetchRecentLectures: (): Promise<ILatestLecture[]> => {
		return axiosInstance
			.get('history', { willUseCustomErrorHandler: true })
			.then((res) => res.data);
	},

	fetchCompletedCourses: (): Promise<ICourseInfo[]> => {
		return axiosInstance
			.get('completed', { willUseCustomErrorHandler: true })
			.then((res) => res.data);
	},

	fetchCurrentLearningCourses: (): Promise<ICourseInfo[]> => {
		return axiosInstance
			.get('enrollment', {
				willUseCustomErrorHandler: true,
			})
			.then((res) => res.data);
	},

	fetchLectureCounts: (): Promise<ILectureCount[]> => {
		return axiosInstance.get('/lectures/count').then((res) => res.data);
	},

	fetchFinishedLectureList: (): Promise<IFinishedLectureCount[]> => {
		return axiosInstance
			.get('/history/lectures/finished')
			.then((res) => res.data);
	},

	fetchQuestions: () => {
		return axiosInstance.get('/questions');
	},
};
