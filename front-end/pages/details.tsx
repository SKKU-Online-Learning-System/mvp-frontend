import Layout from '@components/Layout';
import Banner from '@components/Details/Banner';
import Menu from '@components/Details/Menu';
import ContentSet from '@components/Details/ContentSet';
import Footer from '@components/Details/Footer';

const DetailsPage = () => (
	<Layout>
		<Banner />
		<Menu />
		{/* <ContentSet /> */}
		<Footer />
	</Layout>
);

export default DetailsPage;
