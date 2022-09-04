import axiosInstance from 'apis';
import { useEffect, useState } from 'react';
import QuestionBox from './QuestionBox';

const QuestionTable = ({ courseId }: any) => {
	const [questions, setQuestions] = useState<any[]>([]);
	const [courseName, setCourseName] = useState<any[]>([]);
	useEffect(() => {
		axiosInstance
			.get(`questions/course/${courseId}`)
			.then((res) => {
				setQuestions(res.data);
			})
			.catch((e) => console.log(e));
	}, []);
	useEffect(() => {
		axiosInstance
			.get(`courses/${courseId}`)
			.then((res) => {
				setCourseName(res.data.title);
			})
			.catch((e) => console.log(e));
	}, []);

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
