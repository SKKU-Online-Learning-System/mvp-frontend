export interface ISearchedCourse {
	length: number;
	courses: ICourseInfo[];
}

export interface ICourseInfo {
	id: number;
	title: string;
	summary: string;
	description: string;
	thumbnail: string;
	difficulty: number;
	createdAt: string;
	instructor: string;
	category1: string;
	category2: string;
	hashtag: string[];
}

export interface ICourseCategory {
	id: number;
	name: string;
	category2s?: {
		id: number;
		name: string;
	}[];
}

export interface ICourseDetail {
	id: number;
	title: string;
	summary: string;
	description: string;
	thumbnail: string;
	difficulty: number;
	createdAt: string;
	instructor: {
		id: number;
		email: string;
		nickname: string;
	};
	category1: {
		id: number;
		name: string;
	};
	category2: {
		id: number;
		name: string;
	};
	hashtags: string[];
	is_logged_in: boolean;
	has_enrolled: boolean;
}
