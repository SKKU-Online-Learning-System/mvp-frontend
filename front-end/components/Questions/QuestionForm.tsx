import axiosInstance from 'apis';

const QuestionForm = ({ courseId }: any) => {
	const handleSubmit = async (e: any) => {
		e.preventDefault();

		const courseId = e.target.courseId.value;
		const contents = e.target.contents.value;

		// const result = await axiosInstance.post(`questions/course/${courseId}`, {
		// 	contents,
		// });

		console.log(courseId, contents);
	};

	return (
		<form onSubmit={handleSubmit}>
			<textarea
				name="contents"
				cols={200}
				rows={5}
				placeholder="질문을 입력하세요."
				required
			></textarea>
			<input type="text" name="courseId" value={courseId} hidden />
			<button type="submit">질문 입력</button>
		</form>
	);
};

export default QuestionForm;
