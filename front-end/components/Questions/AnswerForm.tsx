import React, { ReactElement } from 'react';
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/router';

import { Container } from 'pages/questions/[questionId]';
import { HTTP_STATUS_CODE } from 'constants/http';
import { useModal } from 'hooks/useModal';
import API from 'apis/QnA/qnaApi';

const AnswerForm = ({ questionId }: any): ReactElement => {
	const router = useRouter();
	const { showModal, onOpenLoginModal, renderModal } = useModal();

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
				onOpenLoginModal();
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
