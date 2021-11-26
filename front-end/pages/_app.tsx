import { AppProps } from "next/app";
import { NextPage } from "next";
import Head from 'next/head'
import wrapper from "../store";
import GlobalStyles from "styles/GlobalStyles";

const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<Head>
				<title>온라인 명륜당</title>
			</Head>
			<GlobalStyles/>
    	<Component {...pageProps} />
		</>
	);
};

export default wrapper.withRedux(MyApp);