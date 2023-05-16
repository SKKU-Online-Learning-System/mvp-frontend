import React from 'react';

import { IQna } from 'types/Course';
import QuestionBox from './QuestionBox';

interface IQuestionTable {
	courseName: string;
	qna: IQna[];
}

const QuestionTable = ({ courseName, qna }: IQuestionTable) => {
	return (
		<ul>
			{qna.map((question) => {
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
