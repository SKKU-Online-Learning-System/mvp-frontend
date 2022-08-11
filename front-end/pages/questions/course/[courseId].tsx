import QuestionForm from '@components/Questions/QuestionForm';
import QuestionTable from '@components/Questions/QuestionTable';
import { useRouter } from 'next/router';

const QuestionsByCoursePage = () => {
	const router = useRouter();
	const { courseId } = router.query;

	return (
		<>
			<h1>Course ID: {courseId}</h1>
			<QuestionForm courseId={courseId} />
			<QuestionTable courseId={courseId}></QuestionTable>;
		</>
	);
};

export default QuestionsByCoursePage;
