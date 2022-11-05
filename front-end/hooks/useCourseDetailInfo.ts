import { useRouter } from 'next/router';
import { ICourseDetail, IQna } from 'types/Course';
import { ILectureList } from 'types/Lecture';
import { useState, useEffect } from 'react';
import { useModal } from './useModal';
import courseAPI from 'apis/Courses/courseApi';
import qnaAPI from 'apis/QnA/qnaApi';

// QuestionTable은 전체 qna가 필요, 그 외엔 Top 3개만 필요
export const useCourseDetailInfo = () => {
	const router = useRouter();
	const { courseId } = router.query;
	const [courseDetail, setCourseDetail] = useState<ICourseDetail>();
	const [qna, setQna] = useState<IQna[]>();
	const [lectures, setLectures] = useState<ILectureList[]>();
	const { showModal, setShowLogInModal, renderModal } = useModal();

	useEffect(() => {
		if (!router.isReady) return;

		const fetchCourse = courseAPI.fetchCourseDetail(courseId as string);
		const fetchLectures = courseAPI.fetchCourseDetailLectures(
			courseId as string,
		);
		const fetchQna = qnaAPI.fetchCourseDetailQna(courseId as string);

		Promise.all([fetchCourse, fetchLectures, fetchQna])
			.then((res) => {
				const [course, lecture, qna] = res.map((elem) => elem.data);

				setCourseDetail(course);
				setLectures(lecture);
				setQna(
					qna.sort((a: IQna, b: IQna) => (a.createdAt < b.createdAt ? 1 : -1)),
				);
			})
			.catch((e) => console.warn(e));
	}, [router.isReady, courseId]);

	return {
		courseId,
		courseDetail,
		qna,
		lectures,
		showModal,
		setShowLogInModal,
		renderModal,
	};
};
