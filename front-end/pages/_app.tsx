import React, { useEffect } from 'react';

import { AppProps } from 'next/app';
import { NextPage } from 'next';
import Head from 'next/head';
import GlobalStyles from 'styles/GlobalStyles';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from 'store/app/store';
import Layout from '@components/Layout';
import axiosInstance from 'apis';
import { AxiosError, AxiosResponse } from 'axios';
import { userLoginAuthState } from '../constants/commonState';
import { HTTP_STATUS_CODE } from '../constants/http';
import { selectIsLoggined } from 'store/feature/common/commonSelector';
import { commonActions } from 'store/feature/common/commonSlice';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

if (process.env.NODE_ENV === 'development') {
	require('../mocks/index');
}
// TODO. 옵션 찾아보고 필요한것 확인.
const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
});

function MyComponent({ children }: any) {
	const dispatch = useDispatch();
	const isLoggined = useSelector(selectIsLoggined);

	useEffect(() => {
		if (isLoggined === userLoginAuthState.NOT_CHECKED_YET) {
			axiosInstance
				.get('auth/profile')
				.then((res: AxiosResponse) => {
					if (res.status === HTTP_STATUS_CODE.OK) {
						dispatch(commonActions.setIsLoggined(userLoginAuthState.LOGGINED));
					}
				})
				.catch((e: AxiosError) => {
					const statusCode = e?.response?.status;
					if (
						statusCode === HTTP_STATUS_CODE.FORBIDDEN ||
						statusCode === HTTP_STATUS_CODE.UNAUTHORIZED
					) {
						dispatch(
							commonActions.setIsLoggined(userLoginAuthState.NOT_LOGGINED),
						);
					}
				});
		}
	}, []);

	return <>{children}</>;
}

const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
	return (
		<QueryClientProvider client={queryClient}>
			<Head>
				<title>온라인 명륜당</title>
			</Head>
			<Provider store={store}>
				<MyComponent>
					<Layout>
						<GlobalStyles />
						<Component {...pageProps} />
					</Layout>
				</MyComponent>
			</Provider>
		</QueryClientProvider>
	);
};

export default MyApp;
