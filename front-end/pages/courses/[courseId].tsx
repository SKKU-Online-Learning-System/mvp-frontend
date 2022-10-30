import styled from 'styled-components';

import QnA from '@components/Courses/Details/QnA';
import LectureList from '@components/Courses/Details/LectureList';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import API from 'apis/Courses/courseApi';
import { useDispatch } from 'react-redux';
import { setLectures, setQna } from 'store/feature/course/courseDetailSlice';
import CourseHeader from '@components/Courses/Details/CourseHeader';
import { ICourseDetail } from 'types/Course';
// TODO. 비로그인 회원 or 강의 신청하지 않은 유저는 클릭시에 alert 띄워주기
const CourseDetailPage = () => {
	const dispatch = useDispatch();
	const router = useRouter();
	const { courseId } = router.query;
	const [courseDetail, setCourseDetail] = useState<ICourseDetail>();

	useEffect(() => {
		if (!router.isReady) return;
		(async () => {
			const course = await API.fetchCourseDetail(courseId as string);
			const lectures = await API.fetchCourseDetailLectures(courseId as string);
			const qna = await API.fetchCourseDetailQna(courseId as string);
			setCourseDetail(course.data);
			dispatch(setLectures(lectures?.data));
			if (qna.data.length > 3) dispatch(setQna(qna.data.slice(0, 3)));
			else dispatch(setQna(qna?.data));
		})();
	}, [router.isReady, courseId]);

	return (
		<>
			{courseDetail && (
				<>
					(
					<CourseHeader
						courseDetail={courseDetail}
						courseId={courseId as string}
					/>
					<Container>
						<LectureList />
						<QnA />
					</Container>
					)
				</>
			)}
		</>
	);
};

export default CourseDetailPage;

const Container = styled.div`
	width: 1200px;
	margin: 30px auto;
`;
