import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export type lectureState = {
	lectureType: string[][];
	clickedId: number;
	lectures: object[];
};

const initialState: lectureState = {
	lectureType: [],
	clickedId: 0,
	lectures: [],
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
		setLectures: (state, action: PayloadAction<object[]>) => {
			state.lectures = action.payload;
		},
	},
});

export const { addLectureType, setClickedId, setLectures } =
	lectureSlice.actions;

// calling the above actions would be useless if we could not access the data in the state. So, we use something called a selector which allows us to select a value from the state.
//export const selectCount = (state: RootState) => state.counter.value;

// exporting the reducer here, as we need to add this to the store
export default lectureSlice.reducer;
