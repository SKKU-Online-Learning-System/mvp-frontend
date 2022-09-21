import axiosInstance from 'apis';
import { postQuestion } from 'apis/QnA/qnaApi';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const QuestionForm = ({ courseId }: any) => {
	const router = useRouter();
	const handleSubmit = async (e: any) => {
		e.preventDefault();

		const title = e.target.title.value;
		const contents = e.target.contents.value;

		postQuestion({ courseId: +courseId, title, contents });
		router.reload();
		console.log(courseId, title, contents);
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
				{/* <input type="text" name="courseId" value={courseId} hidden /> */}
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
