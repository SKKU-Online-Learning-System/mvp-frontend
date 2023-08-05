import React from 'react';

import { IQna } from 'types/Course';
import QuestionBox from './QuestionBox';

interface IQuestionTable {
	courseName: string;
	qna: IQna[];
}

const QuestionTable = ({ courseName, qna }: IQuestionTable) => {
	return (
		<ul className="mt-3 mb-24 border-y border-y-gray-400">
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
