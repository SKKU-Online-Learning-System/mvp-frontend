import CurrentQnA from '@components/Details/ListContents/CurrentQnA/CurrentQnA';
import Curriculum from '@components/Details/ListContents/Curriculum/Curriculum';
import LearningStatus from '@components/Details/ListContents/LearningStatus/LearningStatus';
import LectureIntroduction from '@components/Details/ListContents/LectureIntroduction/LectureIntroduction';
import MainBanner from '@components/Details/MainBanner/MainBanner';
import Layout from '@components/Layout';

const DetailsPage = () => (
	<Layout>
		<MainBanner />
		<div style={{ display: 'flex', margin: '63px auto' }}>
			<div style={{ margin: '0 56px 0 0' }}>
				<LearningStatus />
				<LectureIntroduction />
			</div>
			<CurrentQnA />
		</div>
		<Curriculum />
	</Layout>
);

export default DetailsPage;
