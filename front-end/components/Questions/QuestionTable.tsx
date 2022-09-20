import axiosInstance from 'apis';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import QuestionBox from './QuestionBox';

const QuestionTable = ({ courseId }: any) => {
	const [questions, setQuestions] = useState<any[]>([]);
	const [courseName, setCourseName] = useState<any[]>([]);
	const router = useRouter();
	useEffect(() => {
		if (!router.isReady) return;
		axiosInstance
			.get(`questions/course/${courseId}`)
			.then((res) => {
				const orderedDate = res.data.sort(
					(a, b) => new Date(b.createdAt) - new Date(a.createdAt),
				);
				setQuestions(orderedDate);
			})
			.catch((e) => console.log('questions/course/${courseId}' + e));
	}, [router.isReady]);
	useEffect(() => {
		if (!router.isReady) return;
		axiosInstance
			.get(`courses/${courseId}`)
			.then((res) => {
				setCourseName(res.data.title);
			})
			.catch((e) => console.log(e));
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
