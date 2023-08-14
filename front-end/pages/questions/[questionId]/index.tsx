import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import QuestionDetailQ from '@components/Questions/QuestionDetailQ';
import AnswerForm from '@components/Questions/AnswerForm';
import AnswerSet from '@components/Questions/AnswerSet';
import axiosInstance from 'apis';

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
	}, [questionId, router.isReady]);

	return (
		<>
			<div className="bg-[var(--color-mrgreen-9)] w-full py-4"></div>
			<QuestionDetailQ question={question} />
			<AnswerForm questionId={questionId}></AnswerForm>
			<AnswerSet answers={question?.answers} />
		</>
	);
};

export default QuestionDetailPage;
