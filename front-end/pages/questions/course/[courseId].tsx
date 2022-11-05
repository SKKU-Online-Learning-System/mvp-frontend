import CourseHeader from '@components/Courses/Details/CourseHeader';
import QuestionTable from '@components/Questions/QuestionTable';
import { useState } from 'react';
import styled from 'styled-components';
import { useCourseDetailInfo } from 'hooks/useCourseDetailInfo';

import QuestionForm from '@components/Questions/QuestionForm';
/*
로그인 && 강의 등록이 되어있어야 등록 가능.
*/
const QuestionsByCoursePage = () => {
	const {
		courseId,
		qna,
		courseDetail,
		showModal,
		setShowLogInModal,
		renderModal,
	} = useCourseDetailInfo();
	const [openForm, setOpenForm] = useState(false);
	const { is_logged_in: isLoggined, has_enrolled: isEnrolled } =
		courseDetail || {};

	const handleClickButton = () => {
		if (!isLoggined) {
			setShowLogInModal(true);
			return;
		}

		if (!isEnrolled) {
			alert('강좌를 먼저 신청해주세요');
			return;
		}

		setOpenForm((prev) => !prev);
	};

	return (
		<>
			{courseDetail && qna && (
				<>
					<CourseHeader
						setShowLogInModal={setShowLogInModal}
						courseDetail={courseDetail}
						courseId={courseId as string}
					/>

					<Wrapper>
						<Button onClick={handleClickButton}>질문하기</Button>
						{openForm && <QuestionForm courseId={courseId as string} />}
						<QuestionTable qna={qna} courseName={courseDetail.title} />
					</Wrapper>
				</>
			)}
			{showModal && renderModal()}
		</>
	);
};

export default QuestionsByCoursePage;

const Button = styled.button`
	width: 700px;
	background: #69c97f;
	color: #ffffff;
	margin: 10px 0;
	padding: 0.4rem 0.8rem;
	font-family: 'Noto Sans KR', sans-serif;
	font-size: 1rem;
	font-weight: 400;
	border: none;
	border-radius: 4px;
	cursor: pointer;
	transition: 0.3s;
	&:hover {
		background: #34a84d;
		outline: 0;
	}
`;
const Wrapper = styled.div`
	width: 1200px;
	margin: auto;
	display: flex;
	align-items: center;
	flex-direction: column;
`;
