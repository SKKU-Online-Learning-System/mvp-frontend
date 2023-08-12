import React, { useEffect, useState } from 'react';
import { GetServerSidePropsContext } from 'next';

import CourseHeader from '@components/Courses/Details/CourseHeader/CourseHeader';
import CourseBody from '@components/Courses/Details/CourseBody';
import courseAPI from '../../apis/Courses/courseApi';
import { ICourseDetail, IQna } from 'types/Course';
import QnA from '@components/Courses/Details/QnA';
import { LectureProgress } from 'types/Lecture';
import { ILectureList } from 'types/Lecture';
import qnaAPI from '../../apis/QnA/qnaApi';
import { useModal } from 'hooks/useModal';

type PropsType = {
	courseId: number;
	course: ICourseDetail;
	qna: IQna[];
	lectures: ILectureList[];
};

const CourseDetailPage = ({ courseId, course, qna, lectures }: PropsType) => {
	const [progress, setProgress] = useState<LectureProgress[]>();
	const { showModal, onOpenLoginModal, renderModal } = useModal();

	useEffect(() => {
		async function func() {
			const progress = await courseAPI.fetchProgress(courseId);
			setProgress(progress);
		}
		func();
	}, []);

	if (!course) return <div>Failed to retrieve course data . . .</div>;
	if (!progress) return <div>Loading . . .</div>;

	return (
		<main>
			<section>
				<CourseHeader
					onOpenLoginModal={onOpenLoginModal}
					courseDetail={course}
					courseId={courseId}
				/>
				<CourseBody
					courseId={courseId}
					lectures={lectures}
					course={course}
					progress={progress}
					onOpenLoginModal={onOpenLoginModal}
				/>
				<hr className="w-[1080px] mx-auto my-6" />
				<QnA courseId={courseId} qna={qna} />
			</section>
			{showModal && renderModal()}
		</main>
	);
};

export async function getServerSideProps({
	params,
}: GetServerSidePropsContext) {
	if (!params || !params.courseId) return { props: {} };

	const courseId = +params.courseId;
	const course = await courseAPI.fetchCourseDetail(courseId);
	const qna = await qnaAPI.fetchCourseDetailQna(courseId);
	const lectures = await courseAPI.fetchCourseDetailLectures(courseId);

	return { props: { courseId, course, qna, lectures } };
}

export default CourseDetailPage;
