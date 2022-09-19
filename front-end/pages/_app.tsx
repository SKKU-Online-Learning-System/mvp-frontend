import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'store/app/hooks';
import { RootState } from 'store/app/store';
import { setIsLoggined } from 'store/feature/auth/userAuthSlice';
import { AppProps } from 'next/app';
import { NextPage } from 'next';
import Head from 'next/head';
import GlobalStyles from 'styles/GlobalStyles';
import { Provider } from 'react-redux';
import { store } from 'store/app/store';
import Layout from '@components/Layout';
import axiosInstance from 'apis';
import { AxiosError, AxiosResponse } from 'axios';
import { userLoginAuthState } from '../constants/userAuthState';
import { HTTP_STATUS_CODE } from '../constants/statusCode';

function MyComponent({ children }: any) {
	const dispatch = useAppDispatch();
	const { isLoggined } = useAppSelector(
		(state: RootState) => state.userAuthState,
	);

	useEffect(() => {
		if (isLoggined === userLoginAuthState.NOT_CHECKED_YET) {
			axiosInstance
				.get('auth/profile')
				.then((res: AxiosResponse) => {
					if (res.status === HTTP_STATUS_CODE.OK) {
						dispatch(setIsLoggined(userLoginAuthState.LOGGINED));
					}
				})
				.catch((e: AxiosError) => {
					if (e?.response?.status === HTTP_STATUS_CODE.FORBIDDEN) {
						dispatch(setIsLoggined(userLoginAuthState.NOT_LOGGINED));
					}
				});
		}
	}, []);

	return <>{children}</>;
}

const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
	return (
		<Provider store={store}>
			<MyComponent>
				<Layout>
					<Head>
						<title>온라인 명륜당</title>
					</Head>
					<GlobalStyles />
					<Component {...pageProps} />
				</Layout>
			</MyComponent>
		</Provider>
	);
};

export default MyApp;
