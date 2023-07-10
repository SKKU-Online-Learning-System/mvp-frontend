import React from 'react';
import { useRouter } from 'next/router';

import API from 'apis/QnA/qnaApi';

interface IQuestionForm {
	courseId: string;
}

const QuestionForm = ({ courseId }: IQuestionForm) => {
	const router = useRouter();
	const handleSubmit = (e: any) => {
		e.preventDefault();

		const title = e.target.title.value;
		const contents = e.target.contents.value;

		API.postQuestion({ courseId: +courseId, title, contents });
		router.reload();
	};

	return (
		<div>
			<form onSubmit={handleSubmit} className="flex flex-col">
				<textarea
					name="title"
					cols={150}
					rows={2}
					placeholder="제목을 입력하세요."
					required
					className="m-0.5"
				></textarea>
				<textarea
					name="contents"
					cols={150}
					rows={5}
					placeholder="질문을 입력하세요."
					required
					className="m-0.5"
				></textarea>
				<button type="submit" className="w-[100px]">
					질문 입력
				</button>
			</form>
		</div>
	);
};

export default QuestionForm;
