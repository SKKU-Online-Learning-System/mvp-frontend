import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISearchedCourse, ICourseCategory } from 'types/Course/index';

interface ICourseState {
	courseCategory: ICourseCategory[];
	searchedCourseInfo: ISearchedCourse;
}

const initialState: ICourseState = {
	courseCategory: [],
	searchedCourseInfo: {
		length: 0,
		courses: [],
	},
};

const reducers = {
	setCourseCategory: (
		state: ICourseState,
		action: PayloadAction<ICourseCategory[]>,
	) => {
		state.courseCategory = action.payload;
	},
	setSearchedCourse: (
		state: ICourseState,
		action: PayloadAction<ISearchedCourse>,
	) => {
		state.searchedCourseInfo = action.payload;
	},
};

export const courseSlice = createSlice({
	name: 'lecture',
	initialState,
	reducers,
});

export const courseActions = courseSlice.actions;
export default courseSlice.reducer;
