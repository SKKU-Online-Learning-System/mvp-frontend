import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type lectureState = {
	lectureType: string[][];
	clickedId: number;
	lectures: any;
	allLectures: object[]; // (임시) 검색용 전체 결과 리스트
	pageNum: number;
	menu: string;
};

const initialState: lectureState = {
	lectureType: [],
	clickedId: 0,
	lectures: [],
	allLectures: [],
	pageNum: 1,
	menu: '',
};

export const lectureSlice = createSlice({
	name: 'lecture',
	initialState,
	reducers: {
		addLectureType: (state, action: PayloadAction<string[]>) => {
			state.lectureType.push(action.payload);
		},
		setClickedId: (state, action: PayloadAction<number>) => {
			state.clickedId = action.payload;
		},
		setLectures: (state, action: PayloadAction<any>) => {
			state.lectures = action.payload;
		},
		setAllLectures: (state, action: PayloadAction<object[]>) => {
			state.allLectures = action.payload;
		},
		setPageNum: (state, action: PayloadAction<number>) => {
			state.pageNum = action.payload;
		},
		setMenu:(state, action: PayloadAction<string>) => {
			state.menu = action.payload
		},
	},
});

<<<<<<< HEAD
export const { addLectureType, setClickedId, setLectures, setAllLectures, setPageNum, setMenu } =
	lectureSlice.actions;
=======
export const {
	addLectureType,
	setClickedId,
	setLectures,
	setAllLectures,
	setPageNum,
} = lectureSlice.actions;
>>>>>>> development

// calling the above actions would be useless if we could not access the data in the state. So, we use something called a selector which allows us to select a value from the state.
//export const selectCount = (state: RootState) => state.counter.value;

// exporting the reducer here, as we need to add this to the store
export default lectureSlice.reducer;
