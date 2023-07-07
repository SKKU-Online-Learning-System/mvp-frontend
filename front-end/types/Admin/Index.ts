export interface INewCourseInfo {
	category1Id: number;
	category2Id: number;
	createdAt: string;
	description: string;
	difficulty: number;
	id: number;
	instructor: string;
	summary: string;
	thumbnail: string;
	title: string;
}

export interface ICourseRetrieveInfo {
	id: number;
	category1: string;
	courseTitle: string;
	instructorName: string;
	enrollmentCount: number;
	courseCreatedAt: string;
	updatedAt: string;
}

export interface ICourseOrdersInfo {
	courseId: number;
	order: number;
	sequence: number;
}
