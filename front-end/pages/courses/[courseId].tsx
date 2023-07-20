import React from 'react';

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
					<div className="w-[1200px] my-[30px] mx-auto">
						{lecture && (
							<LectureList
								lectures={lecture}
								onOpenLoginModal={onOpenLoginModal}
								courseDetail={course}
							/>
						)}
						<hr className="my-6" />
						{qna && <QnA courseId={courseId as string} qna={qna} />}
					</div>
				</>
			)}
			{showModal && renderModal()}
		</>
	);
};

export default CourseDetailPage;
