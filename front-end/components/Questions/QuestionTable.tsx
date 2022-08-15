import axiosInstance from 'apis';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import QuestionTableRow from './QuestionTableRow';

const QuestionTable = ({ courseId }: any) => {
	const [questions, setQuestions] = useState<any[]>([]);

	useEffect(() => {
		axiosInstance
			.get(`questions/course/${courseId}`)
			.then((res) => setQuestions(res.data))
			.catch((e) => console.log(e));
	}, []);

	return (
		<>
			<table>
				<thead>
					<tr>
						<th>id</th>
						<th>author</th>
						<th>contents</th>
						<th>createdAt</th>
						<th>answers</th>
					</tr>
				</thead>
				<tbody>
					{questions.map((question) => {
						return (
							<QuestionTableRow
								key={question.id}
								question={question}
							></QuestionTableRow>
						);
					})}
				</tbody>
			</table>
		</>
	);
};

export default QuestionTable;
