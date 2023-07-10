import React, { useState } from 'react';

import CourseHeader from '@components/Courses/Details/CourseHeader';
import QuestionTable from '@components/Questions/QuestionTable';
import QuestionForm from '@components/Questions/QuestionForm';
import { useCourseDetailInfo } from 'hooks/useCourseDetailInfo';
/*
로그인 && 강의 등록이 되어있어야 등록 가능.
*/
const QuestionsByCoursePage = () => {
	const { courseId, qna, course, showModal, onOpenLoginModal, renderModal } =
		useCourseDetailInfo();
	const [openForm, setOpenForm] = useState(false);
	const { is_logged_in: isLoggined, has_enrolled: isEnrolled } = course || {};

	const handleClickButton = () => {
		if (!isLoggined) {
			onOpenLoginModal();
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
			{course && qna && (
				<>
					<CourseHeader
						onOpenLoginModal={onOpenLoginModal}
						courseDetail={course}
						courseId={courseId}
					/>

					<div className="w-[1200px] m-auto flex flex-col items-center">
						<button
							onClick={handleClickButton}
							className="w-[700px] bg-[#69c97f] text-white mt-[10px] mx-0 py-[0.4rem] px-[0.8rem] font-['Noto Sans KR'] text-base border-none rounded-[4px] cursor-pointer duration-300 hover:bg-[#34a84d] hover:outline-none"
						>
							질문하기
						</button>
						{openForm && <QuestionForm courseId={courseId} />}
						<QuestionTable qna={qna} courseName={course.title} />
					</div>
				</>
			)}
			{showModal && renderModal()}
		</>
	);
};

export default QuestionsByCoursePage;
