import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import courseReducer from '../feature/course/courseSlice';
import courseDetailReducer from '../feature/course/courseDetailSlice';
import commonReducer from 'store/feature/common/commonSlice';

export const store = configureStore({
	reducer: {
		course: courseReducer,
		courseDetail: courseDetailReducer,
		common: commonReducer,
		// This is where we add reducers.
		// Since we don't have any yet, leave this empty
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
