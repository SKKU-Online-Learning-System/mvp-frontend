import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type courseDetailState = {
	course: {
		id: number;
		title: string;
		summary: string;
		description: string;
		thumbnail: string;
		difficulty: number;
		createdAt: Date;
		instructor: string;
		category1: string;
		category2: string;
		hashtag: string[];
	};
	lectures: [
		{
			id: number;
			title: string;
			lectures: [
				{
					id: number;
					title: string;
					duration: number;
					filename: string;
					createdAt: Date;
				},
			];
		},
	];
	qna: [
		{
			id: number;
			contents: string;
			createdAt: Date;
			author: {
				id: number;
				nickname: string;
			};
			answers: [
				{
					id: number;
					contents: string;
					createdAt: Date;
					author: {
						id: number;
						nickname: string;
					};
				},
			];
		},
	];
};

const initialState: courseDetailState = {
	course: {
		id: 0,
		title: '',
		summary: '',
		description: '',
		thumbnail: '',
		difficulty: 0,
		createdAt: new Date(),
		instructor: '',
		category1: '',
		category2: '',
		hashtag: [],
	},
	lectures: [
		{
			id: 0,
			title: '',
			lectures: [
				{
					id: 0,
					title: '',
					duration: 0,
					filename: '',
					createdAt: new Date(),
				},
			],
		},
	],
	qna: [
		{
			id: 0,
			contents: '',
			createdAt: new Date(),
			author: {
				id: 0,
				nickname: '',
			},
			answers: [
				{
					id: 0,
					contents: '',
					createdAt: new Date(),
					author: {
						id: 0,
						nickname: '',
					},
				},
			],
		},
	],
};

export const courseDetailSlice = createSlice({
	name: 'course',
	initialState,
	reducers: {
		setCourse: (state, action: PayloadAction<object>) => {
			Object.assign(state.course, action.payload);
		},
		setLectures: (state, action: PayloadAction<object>) => {
			Object.assign(state.lectures, action.payload);
		},
		setQna: (state, action: PayloadAction<object>) => {
			Object.assign(state.qna, action.payload);
		},
	},
});

export const { setCourse, setLectures, setQna } = courseDetailSlice.actions;

export default courseDetailSlice.reducer;
