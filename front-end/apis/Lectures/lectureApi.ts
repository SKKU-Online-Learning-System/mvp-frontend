import axiosInstance from '..';
import { ILatestLecture } from 'types/MyPage';
import { ILectureVideo } from 'types/Lecture';

export default {
	fetchLectureVideoUrl: (lectureId: string) => {
		return axiosInstance.get<ILectureVideo[]>(`lectures/${lectureId}`);
	},
	fetchLectureHistory: (lectureId: string) => {
		return axiosInstance.get<ILatestLecture>(`/history/lectures/${lectureId}`, {
			willUseCustomErrorHandler: true,
		});
	},
	updateLectureHistory: ({
		lectureId,
		lastTime,
	}: {
		lectureId: number;
		lastTime: number;
	}) => {
		return axiosInstance.patch('/history', { lectureId, lastTime });
	},
	postLectureComplete: (courseId: number) => {
		return axiosInstance.post('/completed', { courseId });
	},
};
