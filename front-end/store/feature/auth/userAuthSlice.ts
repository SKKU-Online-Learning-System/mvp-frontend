import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { userLoginAuthState } from 'constants/userAuthState';

export type userAuthState = {
	isLoggined: number; // 0 미확인, 1 로그인 성공, 2 로그인 불가.
};

const initialState: userAuthState = {
	isLoggined: userLoginAuthState.NOT_CHECKED_YET,
};

export const userAuthStateSlice = createSlice({
	name: 'userAuthState',
	initialState,
	reducers: {
		setIsLoggined: (state, action: PayloadAction<number>) => {
			state.isLoggined = action.payload;
		},
	},
});

export const { setIsLoggined } = userAuthStateSlice.actions;

export default userAuthStateSlice.reducer;
