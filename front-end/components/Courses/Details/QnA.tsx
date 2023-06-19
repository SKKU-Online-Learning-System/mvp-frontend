import React from 'react';
import { useRouter } from 'next/router';

import QnAItem from './QnAItem';
import { IQna } from 'types/Course';
interface IQnA {
	courseId: string;
	qna: IQna[];
}

const QnA = ({ courseId, qna }: IQnA) => {
	const router = useRouter();
	const recentQna = qna.slice(0, 3);

	const handleClick = () => {
		router.push(`/questions/course/${courseId}`);
	};

	return (
		<div className="w-[80%] m-auto p-[25px] font-['Noto Sans KR']">
			<header className="m-0 mb-4 ml-[18px]">
				<div className="text-[0.5rem] text-[#c2c1c1] font-bold">
					Recent Questions
				</div>
				<div className="flex">
					<h2 className="m-0 p-0 pl-[15px] pr-[18px] font-bold">
						최근 한 질문
					</h2>
					{recentQna.length > 0 && (
						<div
							className="font-semibold text-[#f2f4f6] bg-[#7dad47] rounded-[7px] py-2 px-3 cursor-pointer"
							onClick={handleClick}
						>
							질문 더보기
						</div>
					)}
				</div>
			</header>

			{recentQna.length === 0 && (
				<div className="flex items-center">
					<div className="py-0 px-[18px]">첫 질문의 주인공이 되어보세요</div>
					<div
						className="font-semibold text-[#f2f4f6] bg-[#7dad47] rounded-[7px] py-2 px-3 cursor-pointer"
						onClick={handleClick}
					>
						질문 올려보기
					</div>
				</div>
			)}

			{recentQna.map((ele) => {
				return (
					<QnAItem
						key={ele.id}
						questionTitle={ele.title}
						answer={ele.answers[0]?.contents || '답변을 기다리고 있어요'}
					/>
				);
			})}
		</div>
	);
};

export default QnA;

// li {
// 	border-bottom: solid;
// 	border-color: #dfdfdf;
// 	color: #393939;
// 	font-size: 0.95rem;
// 	margin: 3px 0;
// }
// p {
// 	color: #bcbcbc;
// 	font-size: 0.8rem;
// 	font-weight: bold;
// }
// ul {
// 	margin: 0;
// 	padding: 0 0 0 15px;
// }
