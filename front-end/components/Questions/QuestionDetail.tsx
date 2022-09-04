import axiosInstance from 'apis';
import { useEffect, useState } from 'react';
import Answer from './Answer';
import AnswerForm from './AnswerForm';

const QuestionDetail = ({ questionId }: any) => {
	const [question, setQuestion] = useState<{
		id: number;
		contents: string;
		createdAt: Date;
		author: { email: string };
		answers: any[];
	}>();

	useEffect(() => {
		axiosInstance
			.get(`questions/${questionId}`)
			.then((res) => setQuestion(res.data))
			.catch((e) => console.log(e));
	}, []);

	return (
		<>
			<h1>Answers</h1>
			{question?.answers.map((answer) => {
				return <Answer key={answer.id} answer={answer}></Answer>;
			})}
		</>
	);
};

export default QuestionDetail;
