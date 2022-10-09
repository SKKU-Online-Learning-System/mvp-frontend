import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import courseReducer from '../feature/course/courseSlice';
import courseDetailReducer from '../feature/course/courseDetailSlice';
import userAuthReducer from 'store/feature/auth/userAuthSlice';

export const store = configureStore({
	reducer: {
		course: courseReducer,
		courseDetail: courseDetailReducer,
		userAuthState: userAuthReducer,
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
