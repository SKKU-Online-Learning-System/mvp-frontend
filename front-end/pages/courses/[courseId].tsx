import styled from 'styled-components';

import QnA from '@components/Courses/Details/QnA';
import LectureList from '@components/Courses/Details/LectureList';

import CourseHeader from '@components/Courses/Details/CourseHeader';

import { useCourseDetailInfo } from 'hooks/useCourseDetailInfo';

const CourseDetailPage = () => {
	const {
		courseId,
		course,
		qna,
		lecture,
		showModal,
		onOpenLoginModal,
		renderModal,
		isLoading,
	} = useCourseDetailInfo();

	if (isLoading) return <div>Loading...</div>;

	return (
		<>
			{course && (
				<>
					<CourseHeader
						onOpenLoginModal={onOpenLoginModal}
						courseDetail={course}
						courseId={courseId}
					/>
					<Container>
						{lecture && (
							<LectureList
								lectures={lecture}
								onOpenLoginModal={onOpenLoginModal}
								courseDetail={course}
							/>
						)}
						{qna && <QnA courseId={courseId as string} qna={qna} />}
					</Container>
				</>
			)}
			{showModal && renderModal()}
		</>
	);
};

export default CourseDetailPage;

const Container = styled.div`
	width: 1200px;
	margin: 30px auto;
`;
