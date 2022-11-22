export interface ILatestLecture {
	id?: number;
	lastTime: number;
	updatedAt: string;
	isFinished: boolean;
	lecture: {
		id: number;
		title: string;
		duration: number;
		filename: string;
		course: {
			id: number;
			title: string;
			thumbnail: string;
		};
	};
}

export interface ICourseInfo {
	createdAt: string;
	bookmark: boolean;
	course: {
		id: number;
		title: string;
		summary: string;
		description: string;
		thumbnail: string;
		difficulty: number;
		createdAt: string;
		instructor: {
			nickname: string;
		};
		category1: {
			name: string;
		};
		category2: {
			name: string;
		};
	};
}

export interface ILectureCount {
	courseId: number;
	lectures_count: string;
}

export interface IFinishedLectureCount {
	courseId: number;
	courseTitle: string;
	finishedLecture: string;
}
