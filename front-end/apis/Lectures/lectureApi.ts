import axiosInstance from '..';

export const fetchLectureVideoUrl = (lectureId: string) => {
	return axiosInstance.get(`lectures/${lectureId}`);
};

export const fetchLectureHistory = (lectureId: string) => {
	return axiosInstance.get(`/history/lecture/${lectureId}`);
};

export const updateLectureHistory = ({
	lectureId,
	lastTime,
}: Record<string, string | number>) => {
	return axiosInstance.patch('/history', { lectureId, lastTime });
};
