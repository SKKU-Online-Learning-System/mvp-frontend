import axiosInstance from 'apis';
import API from 'apis/QnA/qnaApi';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import QuestionBox from './QuestionBox';

interface IQuestionTable {
	courseId: string;
}
/*
API가 중복되어서 불리고 있음, 구조 개선 필요
*/
const QuestionTable = ({ courseId }: IQuestionTable) => {
	const [questions, setQuestions] = useState<any[]>([]);
	const [courseName, setCourseName] = useState<any[]>([]);
	const router = useRouter();
	useEffect(() => {
		if (!router.isReady) return;
		const fetchQuestions = API.fetchQuestions(courseId);
		const fetchCourseName = API.fetchCourseName(courseId);

		Promise.all([fetchQuestions, fetchCourseName])
			.then((res) => {
				const [questions, courseName] = res.map((elem) => elem.data);

				setQuestions(
					questions.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1)),
				);
				setCourseName(courseName.title);
			})
			.catch((e) => console.warn(e));
	}, [router.isReady]);

	return (
		<ul>
			{questions.map((question) => {
				return (
					<QuestionBox
						key={question.id}
						question={question}
						courseName={courseName}
					/>
				);
			})}
		</ul>
	);
};

export default QuestionTable;
