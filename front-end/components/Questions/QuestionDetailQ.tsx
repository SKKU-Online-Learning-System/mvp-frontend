// questions/{questionId}
// import { useRouter } from 'next/router';
import React, { ReactElement } from 'react';
// import QuestionDeleteModal from './QuestionDeleteModal';
const QuestionDetailQ = ({ question }: any) => {
	// console.log(question.answers.length);
	const date = new Date(question?.createdAt);
	// const router = useRouter();

	// try {
	// 	const res = await API.postAnswer({
	// 		questionId: +questionId,
	// 	});

	// 	if (res.data.statusCode === HTTP_STATUS_CODE.CREATED) {
	// 		router.reload();
	// 	}
	// } catch (e: unknown | AxiosError) {
	// 	if (
	// 		axios.isAxiosError(e) &&
	// 		e.response?.status === HTTP_STATUS_CODE.FORBIDDEN
	// 	) {
	// 		onOpenLoginModal();
	// 	} else {
	// 		console.warn(e);
	// 	}
	// }
	return (
		<div className="w-[800px] mbl:w-[300px] mt-5 mx-auto rounded-md mb-3">
			<div className="p-4">
				<div className="text-2xl font-bold">
					<span className=" text-[var(--color-Primary)]">Q </span>
					{question?.title || '제목없음'}
				</div>
				<div className="border-b-[1px] border-solid border-[#adb5bd] text-[#adb5bd] px-0 py-[7px] mb-5">
					{question?.author.nickname} · {date.toLocaleString()}
				</div>
				<div className="leading-[1.7]">{question?.contents || '내용없음'}</div>
				{question?.answers.length == 0 ? (
					<div className="flex gap-x-1 mt-7">
						<button
							// onClick={QuestionDeleteModal}
							className="px-2 py-1 text-xs font-semibold text-gray-600 transition-all border rounded-md hover:bg-slate-200"
						>
							질문 수정
						</button>
						<button className="px-2 py-1 text-xs font-semibold text-gray-600 transition-all border rounded-md hover:bg-slate-200">
							질문 삭제
						</button>
					</div>
				) : null}
			</div>
		</div>
	);
};

export default QuestionDetailQ;
