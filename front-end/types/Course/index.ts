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
	// how_many_enrolled: number; // 2023/06/15 추가 for 메인배너/인기강좌 관리를 위한 통계 산출
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
export interface IQna {
	answercount: number;
	answers: {
		authorId: number;
		contents: string;
		createdAt: string;
		id: number;
		questionId: number;
		author: {
			id: number;
			nickname: string;
			joinedAt: string;
			role: number;
			email: string;
		};
	}[];
	author: { id: number; nickname: string };
	contents: string;
	createdAt: string;
	id: number;
	title: string;
}

export interface ICourseListParams {
	category2sId?: string;
	keyword?: string;
	difficulty: string;
}
