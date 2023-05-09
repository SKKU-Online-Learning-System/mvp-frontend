import React, { ReactElement, useEffect } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { AxiosError, AxiosResponse } from 'axios';

import { store } from 'store/app/store';
import { userLoginAuthState } from '../constants/commonState';
import { HTTP_STATUS_CODE } from '../constants/http';
import { selectIsLoggined } from 'store/feature/common/commonSelector';
import { commonActions } from 'store/feature/common/commonSlice';
import GlobalStyles from 'styles/GlobalStyles';
import Layout from '@components/Layout';
import axiosInstance from 'apis';
import '../styles/output.css';

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

function MyComponent({ children }: { children: ReactElement }) {
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
	}, [dispatch, isLoggined]);

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
