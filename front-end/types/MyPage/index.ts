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
