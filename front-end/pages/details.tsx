import LearningStatus from '@components/Details/ListContents/LearningStatus/LearningStatus';
import MainBanner from '@components/Details/MainBanner/MainBanner';
import Layout from '@components/Layout';

const DetailsPage = () => (
	<Layout>
		<MainBanner />
		<div>
			<LearningStatus />
		</div>
	</Layout>
);

export default DetailsPage;
