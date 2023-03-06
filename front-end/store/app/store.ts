import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import commonReducer from 'store/feature/common/commonSlice';

export const store = configureStore({
	reducer: {
		common: commonReducer,
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
