import React from 'react';
import { useRouter } from 'next/router';

const QuestionTableRow = ({ question }: any) => {
	const router = useRouter();

	const {
		id,
		author: { email: author },
		contents,
		createdAt,
		answers,
	} = question;

	const handleClick = (questionId: number) => {
		router.push(`/questions/${questionId}`);
	};

	return (
		<tr>
			<td>{id}</td>
			<td>{author}</td>
			<div onClick={() => handleClick(id)}>
				<td>{contents}</td>
			</div>
			<td>{createdAt}</td>
			<td>{answers.length}</td>
		</tr>
	);
};

export default QuestionTableRow;
