import styled from 'styled-components';

import QnA from '@components/Courses/Details/QnA';
import LectureList from '@components/Courses/Details/LectureList';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import {
	fetchCourseDetail,
	fetchCourseDetailLectures,
	fetchCourseDetailQna,
} from 'apis/Courses/courseApi';
import { useAppDispatch } from 'store/app/hooks';
import {
	setCourse,
	setLectures,
	setQna,
} from 'store/feature/course/courseDetailSlice';
import CourseHeader from '@components/Courses/Details/CourseHeader';

const CourseDetailPage = () => {
	const dispatch = useAppDispatch();
	const router = useRouter();
	const { courseId } = router.query;

	useEffect(() => {
		if (!router.isReady) return;
		(async () => {
			if (isNaN(Number(courseId))) return;
			const course: any = await fetchCourseDetail(courseId);
			const lectures: any = await fetchCourseDetailLectures(courseId);
			const qna: any = await fetchCourseDetailQna(courseId);
			dispatch(setCourse(course?.data));
			dispatch(setLectures(lectures?.data));
			if (qna.data.length > 3) dispatch(setQna(qna.data.slice(0, 3)));
			else dispatch(setQna(qna?.data));
		})();
	}, [router.isReady, courseId]);

	return (
		<>
			<CourseHeader />
			<Container>
				<LectureList />
				<QnA />
			</Container>
		</>
	);
};

export default CourseDetailPage;

const Container = styled.div`
	width: 1200px;
	margin: 30px auto;
`;
