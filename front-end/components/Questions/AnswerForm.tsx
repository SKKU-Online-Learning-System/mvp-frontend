import axiosInstance from 'apis';
import { postAnswer } from 'apis/QnA/qnaApi';
import { useRouter } from 'next/router';
import { Container } from 'pages/questions/[questionId]';

const AnswerForm = ({ questionId }: any) => {
	const router = useRouter();
	const handleSubmit = async (e: any) => {
		e.preventDefault();

		// const questionId = e.target.questionId.value;
		const contents = e.target.contents.value;
		postAnswer({ questionId: +questionId, contents: contents });
		router.reload();
	};

	return (
		<Container>
			<form onSubmit={handleSubmit}>
				<textarea
					name="contents"
					cols={130}
					rows={5}
					placeholder="답변을 입력하세요."
					required
				/>
				<input type="text" name="questionId" value={questionId} hidden />
				<button type="submit">답변 입력</button>
			</form>
		</Container>
	);
};

export default AnswerForm;
