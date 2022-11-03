import { useRouter } from 'next/router';
import { ICourseDetail, IQna } from 'types/Course';
import { ILectureList } from 'types/Lecture';
import { useState, useEffect } from 'react';
import { useModal } from './useModal';
import API from 'apis/Courses/courseApi';

export const useCourseDetailInfo = () => {
	const router = useRouter();
	const { courseId } = router.query;
	const [courseDetail, setCourseDetail] = useState<ICourseDetail>();
	const [qna, setQna] = useState<IQna[]>();
	const [lectures, setLectures] = useState<ILectureList[]>();
	const { showModal, setShowLogInModal, renderModal } = useModal();

	useEffect(() => {
		if (!router.isReady) return;

		const fetchCourse = API.fetchCourseDetail(courseId as string);
		const fetchLectures = API.fetchCourseDetailLectures(courseId as string);
		const fetchQna = API.fetchCourseDetailQna(courseId as string);

		Promise.all([fetchCourse, fetchLectures, fetchQna])
			.then((res) => {
				const [course, lecture, qna] = res.map((elem) => elem.data);

				setCourseDetail(course);
				setLectures(lecture);
				setQna(qna.slice(0, 3));
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
