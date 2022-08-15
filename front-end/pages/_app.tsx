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

function MyComponent({ children }: any) {
	const dispatch = useAppDispatch();
	const { isLoggined } = useAppSelector(
		(state: RootState) => state.userAuthState,
	);
	useEffect(() => {
		if (!isLoggined) {
			axiosInstance
				.get('auth/profile')
				.then((res) => {
					if (res.status === 200) {
						dispatch(setIsLoggined(true));
					}
				})
				.catch((e: any) => console.log(e));
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
