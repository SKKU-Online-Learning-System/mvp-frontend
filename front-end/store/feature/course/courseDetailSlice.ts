import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// 사용되지는 않지만, 상용 배포 전까지는 살려두곘습니다.

interface courseDetailState {}

const initialState: courseDetailState = {};

const reducers = {};

export const courseDetailSlice = createSlice({
	name: 'course',
	initialState,
	reducers,
});

export const courseDetailActions = courseDetailSlice.actions;

export default courseDetailSlice.reducer;
