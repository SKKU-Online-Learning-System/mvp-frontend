import CurrentQnA from '@components/Details/ListContents/CurrentQnA/CurrentQnA';
import Curriculum from '@components/Details/ListContents/Curriculum/Curriculum';
import LearningStatus from '@components/Details/ListContents/LearningStatus/LearningStatus';
import LectureIntroduction from '@components/Details/ListContents/LectureIntroduction/LectureIntroduction';
import MainBanner from '@components/Details/MainBanner/MainBanner';
import styled from 'styled-components';
const DetailsPage = () => (
	<>
		<MainBanner />
		<Container>
			<div style={{ display: 'flex', margin: '63px auto' }}>
				<div className="leftBox">
					<LearningStatus />
					<LectureIntroduction />
				</div>

				<CurrentQnA />
			</div>
			<Curriculum />
		</Container>
	</>
);

export default DetailsPage;

const Container = styled.div`
	.leftBox {
		margin: 0 56px 0 0;
		width: 40%;
	}
	margin: 0 auto;
	@media only screen and (min-width: 1200px) {
		/* width: 1650px; */
		width: 1200px;
	}
`;
