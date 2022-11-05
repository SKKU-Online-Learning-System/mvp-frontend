import API from 'apis/QnA/qnaApi';
import { useRouter } from 'next/router';
import { Container } from 'pages/questions/[questionId]';
import axios, { AxiosError } from 'axios';
import { HTTP_STATUS_CODE } from 'constants/http';
import { useModal } from 'hooks/useModal';
/*
403일때 에러르 보여주는데, 만약 요청 intercept해서 201로 바꿔도 의미 X
서버에서 권한 검사 후 DB에 저장하므로 안전함.
*/
const AnswerForm = ({ questionId }: any) => {
	const router = useRouter();
	const { showModal, setShowLogInModal, renderModal } = useModal();

	const handleSubmit = async (e: any) => {
		e.preventDefault();

		const contents = e.target.contents.value;

		try {
			const res = await API.postAnswer({
				questionId: +questionId,
				contents: contents,
			});

			if (res.data.statusCode === HTTP_STATUS_CODE.CREATED) {
				router.reload();
			}
		} catch (e: unknown | AxiosError) {
			if (
				axios.isAxiosError(e) &&
				e.response?.status === HTTP_STATUS_CODE.FORBIDDEN
			) {
				setShowLogInModal(true);
			} else {
				console.warn(e);
			}
		}
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
				<button type="submit">답변 입력</button>
			</form>
			{showModal && renderModal()}
		</Container>
	);
};

export default AnswerForm;
