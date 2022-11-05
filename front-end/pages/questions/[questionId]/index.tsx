import AnswerDetail from '@components/Questions/AnswerDetail';
import AnswerForm from '@components/Questions/AnswerForm';
import AnswerSet from '@components/Questions/AnswerSet';
import QuestionDetail from '@components/Questions/QuestionDetail';
import QuestionDetailQ from '@components/Questions/QuestionDetailQ';
import axiosInstance from 'apis';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

/*
- 강의를 수강중인 유저만 댓글을 달 수 잇어야 함. 서버에서 403 응답주는중.
*/
const QuestionDetailPage = () => {
	const router = useRouter();
	const { questionId } = router.query;
	const [question, setQuestion] = useState<{
		id: number;
		contents: string;
		createdAt: Date;
		author: { email: string };
		answers: any[];
	}>();

	useEffect(() => {
		if (!router.isReady) return;
		axiosInstance
			.get(`questions/${questionId}`)
			.then((res) => setQuestion(res.data))
			.catch((e) => console.log(e));
	}, [router.isReady]);
	return (
		<>
			<QuestionDetailQ question={question} />

			<AnswerSet answers={question?.answers} />
			<AnswerForm questionId={questionId}></AnswerForm>
			{/* <AnswerDetail answers={question?.answers[0]} />
			<QuestionDetail questionId={questionId} /> */}
		</>
	);
};

export default QuestionDetailPage;
export const Container = styled.div`
	width: 800px;
	margin: auto;
`;
