export interface ILectureList {
	id: number;
	title: string;
	lectures: ILectureInfo[];
}

export interface ILectureInfo {
	createdAt: string;
	duration: number;
	filename: string;
	id: number;
	title: string;
}
