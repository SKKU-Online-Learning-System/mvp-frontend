import LearningStatus from '@components/Details/ListContents/LearningStatus/LearningStatus';
import LectureIntroduction from '@components/Details/ListContents/LectureIntroduction/LectureIntroduction';
import MainBanner from '@components/Details/MainBanner/MainBanner';
import Layout from '@components/Layout';

const DetailsPage = () => (
	<Layout>
		<MainBanner />
		<div>{/* <LearningStatus /> */}</div>
		<div>
			<LectureIntroduction />
		</div>
	</Layout>
);

export default DetailsPage;
