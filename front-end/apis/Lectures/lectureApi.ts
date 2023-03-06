import axiosInstance from '..';
import { ILatestLecture } from 'types/MyPage';
import { ILectureVideo } from 'types/Lecture';

const functions = {
	fetchLectureVideoUrl: async (lectureId: string): Promise<ILectureVideo[]> => {
		const res = await axiosInstance.get(`lectures/${lectureId}`);
		return res.data;
	},
	fetchLectureHistory: async (lectureId: string): Promise<ILatestLecture> => {
		const res = await axiosInstance.get(`/history/lectures/${lectureId}`, {
			willUseCustomErrorHandler: true,
		});
		return res.data;
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

export default functions;
