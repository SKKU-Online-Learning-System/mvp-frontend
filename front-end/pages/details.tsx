import CurrentQnA from '@components/Details/ListContents/CurrentQnA/CurrentQnA';
import Curriculum from '@components/Details/ListContents/Curriculum/Curriculum';
import LearningStatus from '@components/Details/ListContents/LearningStatus/LearningStatus';
import LectureIntroduction from '@components/Details/ListContents/LectureIntroduction/LectureIntroduction';
import MainBanner from '@components/Details/MainBanner/MainBanner';
import Layout from '@components/Layout';

const DetailsPage = () => (
	<Layout>
		<MainBanner />
		<div>{/* <LearningStatus /> */}</div>
		<div>{/* <LectureIntroduction /> */}</div>
		<span>{/* <Curriculum /> */}</span>
		<CurrentQnA />
	</Layout>
);

export default DetailsPage;
