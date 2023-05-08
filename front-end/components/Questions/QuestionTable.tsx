import axiosInstance from 'apis';
import API from 'apis/QnA/qnaApi';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { ICourseDetail, IQna } from 'types/Course';
import QuestionBox from './QuestionBox';
import React from 'react';
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
