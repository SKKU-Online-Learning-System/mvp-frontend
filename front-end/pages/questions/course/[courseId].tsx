import CourseHeader from '@components/Courses/Details/CourseHeader';
import QuestionTable from '@components/Questions/QuestionTable';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import styled from 'styled-components';
import {
	fetchCourseDetail,
	fetchCourseDetailLectures,
	fetchCourseDetailQna,
} from 'apis/Courses/courseApi';
import {
	setCourse,
	setLectures,
	setQna,
} from 'store/feature/course/courseDetailSlice';
import { useAppDispatch } from 'store/app/hooks';
const QuestionsByCoursePage = () => {
	const router = useRouter();
	const dispatch = useAppDispatch();
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
			<Wrapper>
				<Button>질문하기</Button>
				<QuestionTable courseId={courseId} />
				{/* <QuestionForm courseId={courseId} /> */}
			</Wrapper>
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
