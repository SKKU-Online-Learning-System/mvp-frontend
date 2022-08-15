import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type userAuthState = {
	isLoggined: boolean;
};

const initialState: userAuthState = {
	isLoggined: false,
};

export const userAuthStateSlice = createSlice({
	name: 'userAuthState',
	initialState,
	reducers: {
		setIsLoggined: (state, action: PayloadAction<boolean>) => {
			state.isLoggined = action.payload;
		},
	},
});

export const { setIsLoggined } = userAuthStateSlice.actions;

export default userAuthStateSlice.reducer;
