import Link from 'next/link';
import styled from 'styled-components';
import { durationToHhMmSs } from 'utils/durationToHhMmSs';
import { useRouter } from 'next/router';
// courseId가 있어야 lecturePicker 목록을 불러올 수 있음.
const LectureListItem = ({ lecture, index }: any) => {
	const router = useRouter();
	const { courseId } = router.query;

	return (
		<Link
			href={{
				pathname: `/lectures/${lecture.id}`,
				query: { courseId },
			}}
		>
			<Container>
				<span className="index">{index + 1}</span>
				<span className="title">{lecture.title}</span>
				<span className="duration">{durationToHhMmSs(lecture.duration)}</span>
			</Container>
		</Link>
	);
};

export default LectureListItem;

const Container = styled.div`
	display: flex;
	height: 48px;
	align-items: center;
	cursor: pointer;
	span {
		color: #404040;
		font-size: 16px;
	}
	.index {
		width: 10%;
		text-align: center;
	}
	.title {
		width: 75%;
		padding-left: 5px;
	}
	.duration {
		width: 15%;
		text-align: center;
	}
	&:hover {
		background-color: #eaeaea;
	}
`;
