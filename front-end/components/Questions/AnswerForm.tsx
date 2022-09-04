import axiosInstance from 'apis';
import { Container } from 'pages/questions/[questionId]';

const AnswerForm = ({ questionId }: any) => {
	const handleSubmit = async (e: any) => {
		e.preventDefault();

		const questionId = e.target.questionId.value;
		const contents = e.target.contents.value;

		// const result = await axiosInstance.post(`answers/question/${questionId}`, {
		// 	contents,
		// });

		console.log(questionId, contents);
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
