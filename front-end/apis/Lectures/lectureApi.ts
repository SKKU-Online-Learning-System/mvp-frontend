import axiosInstance from '..';
import { ILatestLecture } from 'types/MyPage';
import { ILectureVideo } from 'types/Lecture';

export default {
	fetchLectureVideoUrl: (lectureId: string): Promise<ILectureVideo[]> => {
		return axiosInstance.get(`lectures/${lectureId}`).then((res) => res.data);
	},
	fetchLectureHistory: (lectureId: string): Promise<ILatestLecture> => {
		return axiosInstance
			.get(`/history/lectures/${lectureId}`, {
				willUseCustomErrorHandler: true,
			})
			.then((res) => res.data);
	},
	updateLectureHistory: ({
		lectureId,
		lastTime,
	}: {
		lectureId: number;
		lastTime: number;
	}): Promise<void> => {
		return axiosInstance.patch('/history', { lectureId, lastTime });
	},
	updateLectureComplete: (courseId: number): Promise<void> => {
		return axiosInstance.post('/completed', { courseId });
	},
};
