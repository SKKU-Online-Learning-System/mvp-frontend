import React from 'react';
import { GetServerSidePropsContext } from 'next';

import CourseHeader from '@components/Courses/Details/CourseHeader';
import LectureList from '@components/Courses/Details/LectureList';
import courseAPI from '../../apis/Courses/courseApi';
import QnA from '@components/Courses/Details/QnA';
import { LectureProgress } from 'types/Lecture';
import qnaAPI from '../../apis/QnA/qnaApi';
import { useModal } from 'hooks/useModal';
import { ICourseDetail, IQna } from 'types/Course';
import { ILectureList } from 'types/Lecture';

type PropsType = {
	courseId: number;
	course: ICourseDetail;
	qna: IQna[];
	lectures: ILectureList[];
	progresses: LectureProgress[] | undefined;
};

const CourseDetailPage = ({
	courseId,
	course,
	qna,
	lectures,
	progresses,
}: PropsType) => {
	const { showModal, onOpenLoginModal, renderModal } = useModal();

	if (!progresses) return <div>what</div>;

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
						{lectures && (
							<LectureList
								lectures={lectures}
								onOpenLoginModal={onOpenLoginModal}
								courseDetail={course}
								progresses={progresses}
							/>
						)}
						<hr className="my-6" />
						{qna && <QnA courseId={courseId} qna={qna} />}
					</div>
				</>
			)}
			{showModal && renderModal()}
		</>
	);
};

export async function getServerSideProps({
	params,
	req,
}: GetServerSidePropsContext) {
	if (!params || !params.courseId) return { props: {} };

	const courseId = +params.courseId;
	const course = await courseAPI.fetchCourseDetail(courseId);
	const qna = await qnaAPI.fetchCourseDetailQna(courseId);
	const lectures = await courseAPI.fetchCourseDetailLectures(courseId);

	const cookies = req.headers.cookie;
	if (!cookies) return { props: { courseId, course, qna, lectures } };

	const progresses = await courseAPI.fetchProgress(courseId, cookies);

	return { props: { courseId, course, qna, lectures, progresses } };
}

export default CourseDetailPage;
