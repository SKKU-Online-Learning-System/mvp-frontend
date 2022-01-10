import { AppProps } from 'next/app';
import { NextPage } from 'next';
import Head from 'next/head';
import GlobalStyles from 'styles/GlobalStyles';
import { Provider } from 'react-redux';
import { store } from '../app/store';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
	return (
		<Provider store={store}>
			<Head>
				<title>온라인 명륜당</title>
			</Head>
			<GlobalStyles />
			<Component {...pageProps} />
		</Provider>
	);
};

export default MyApp;
