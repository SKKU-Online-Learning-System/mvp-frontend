import styled from 'styled-components';

import QnA from '@components/Courses/Details/QnA';
import LectureList from '@components/Courses/Details/LectureList';

import CourseHeader from '@components/Courses/Details/CourseHeader';

import { useCourseDetailInfo } from 'hooks/useCourseDetailInfo';
// TODO. 비로그인 회원 or 강의 신청하지 않은 유저는 클릭시에 alert 띄워주기
const CourseDetailPage = () => {
	const {
		courseId,
		courseDetail,
		qna,
		lectures,
		showModal,
		setShowLogInModal,
		renderModal,
	} = useCourseDetailInfo();

	return (
		<>
			{courseDetail && (
				<>
					<CourseHeader
						setShowLogInModal={setShowLogInModal}
						courseDetail={courseDetail}
						courseId={courseId as string}
					/>
					<Container>
						{lectures && (
							<LectureList
								lectures={lectures}
								setShowLogInModal={setShowLogInModal}
								courseDetail={courseDetail}
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
