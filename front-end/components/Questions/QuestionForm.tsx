import React, { ReactElement } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import API from 'apis/QnA/qnaApi';

interface IQuestionForm {
	courseId: string;
}

const QuestionForm = ({ courseId }: IQuestionForm): ReactElement => {
	const router = useRouter();
	const handleSubmit = (e: any) => {
		e.preventDefault();

		const title = e.target.title.value;
		const contents = e.target.contents.value;

		API.postQuestion({ courseId: +courseId, title, contents });
		router.reload();
	};

	return (
		<Wrapper>
			<form onSubmit={handleSubmit} className="form-style">
				<textarea
					name="title"
					cols={150}
					rows={2}
					placeholder="제목을 입력하세요."
					required
				></textarea>
				<textarea
					name="contents"
					cols={150}
					rows={5}
					placeholder="질문을 입력하세요."
					required
				></textarea>
				<button type="submit">질문 입력</button>
			</form>
		</Wrapper>
	);
};

export default QuestionForm;

const Wrapper = styled.div`
	.form-style {
		display: flex;
		flex-direction: column;
	}
	button {
		width: 100px;
	}
	textarea {
		margin: 2px;
	}
`;
