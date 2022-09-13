import axiosInstance from '..';

export const fetchAllLectureCategories = () => {
	return axiosInstance.get(`courses/categories`);
};

export const fetchLectureLists = (category: string) => {
	return axiosInstance.get(`courses/search?category2Id=${category}`);
};

export const fetchSearchedData = (name: string, difficulty: string) => {
	if (difficulty) {
		return axiosInstance.get(`courses?s=${name}&difficulty=${difficulty}`);
	} else {
		return axiosInstance.get(`courses/search?keyword=${name}`);
	}
};

export const fetchAllLecturesPerPage = (pageNum: number) => {
	return axiosInstance.get(`courses/search?page=${pageNum}`);
};

export const fetchLectureVideoUrl = (lectureId: string) => {
	return axiosInstance.get(`/file/video/lecture/${lectureId}`);
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
