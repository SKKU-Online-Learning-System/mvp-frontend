import QuestionDetail from '@components/Questions/QuestionDetail';
import { useRouter } from 'next/router';

const QuestionDetailPage = () => {
	const router = useRouter();
	const { questionId } = router.query;

	return <QuestionDetail questionId={questionId}></QuestionDetail>;
};

export default QuestionDetailPage;
