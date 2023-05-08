import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { userLoginAuthState } from 'constants/commonState';

interface IcommonState {
	isLoggined: number; // 0 미확인, 1 로그인 성공, 2 로그인 불가.
	errorInfo: number;
}

const initialState: IcommonState = {
	isLoggined: userLoginAuthState.NOT_CHECKED_YET,
	errorInfo: 0,
};

const reducers = {
	setIsLoggined: (state: IcommonState, action: PayloadAction<number>) => {
		state.isLoggined = action.payload;
	},
	setErrorInfo: (state: IcommonState, action: PayloadAction<number>) => {
		state.errorInfo = action.payload;
	},
};

export const commonStateSlice = createSlice({
	name: 'commonState',
	initialState,
	reducers,
});

export const commonActions = commonStateSlice.actions;
export default commonStateSlice.reducer;
