import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export type lectureState = {
	lectureType: string[][];
};

const initialState: lectureState = {
	lectureType: [],
};

export const lectureSlice = createSlice({
	name: 'lecture',
	initialState,
	reducers: {
		addLectureType: (state, action: PayloadAction<string[]>) => {
			state.lectureType.push(action.payload);
		},
	},
});

export const { addLectureType } = lectureSlice.actions;

// calling the above actions would be useless if we could not access the data in the state. So, we use something called a selector which allows us to select a value from the state.
//export const selectCount = (state: RootState) => state.counter.value;

// exporting the reducer here, as we need to add this to the store
export default lectureSlice.reducer;
