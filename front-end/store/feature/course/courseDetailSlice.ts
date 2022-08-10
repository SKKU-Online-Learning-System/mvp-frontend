import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type courseDetailState = {
	course: {
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
	};
	lectures: [
		{
			id: number;
			title: string;
			show: boolean;
			lectures: [
				{
					id: number;
					title: string;
					duration: number;
					filename: string;
					createdAt: string;
				},
			];
		},
	];
	qna: [
		{
			id: number;
			contents: string;
			createdAt: string;
			author: {
				id: number;
				nickname: string;
			};
			answers: [
				{
					id: number;
					contents: string;
					createdAt: string;
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
		createdAt: '',
		instructor: '',
		category1: '',
		category2: '',
		hashtag: [],
	},
	lectures: [
		{
			id: 0,
			title: '',
			show: true,
			lectures: [
				{
					id: 0,
					title: '',
					duration: 0,
					filename: '',
					createdAt: '',
				},
			],
		},
	],
	qna: [
		{
			id: 0,
			contents: '',
			createdAt: '',
			author: {
				id: 0,
				nickname: '',
			},
			answers: [
				{
					id: 0,
					contents: '',
					createdAt: '',
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
			state.lectures.map((section) => (section.show = true));
		},
		setQna: (state, action: PayloadAction<object>) => {
			Object.assign(state.qna, action.payload);
		},
		toggleSection: (state, action: PayloadAction<number>) => {
			const sectionId = action.payload;
			state.lectures.map((section) => {
				if (section.id === sectionId) section.show = !section.show;
			});
		},
	},
});

export const { setCourse, setLectures, setQna, toggleSection } =
	courseDetailSlice.actions;

export default courseDetailSlice.reducer;
