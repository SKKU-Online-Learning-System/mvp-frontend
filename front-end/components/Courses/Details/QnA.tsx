import React from 'react';
import { AiFillCaretRight } from 'react-icons/ai';
import Link from 'next/link';
import { useRouter } from 'next/router';

import QnAItem from './QnAItem';
import { IQna } from 'types/Course';

type PropsType = {
	courseId: number;
	qna: IQna[];
};

const QnA = ({ courseId, qna }: PropsType) => {
	const router = useRouter();
	const recentQna = qna.slice(0, 3);

	const handleClick = () => {
		router.push(`/questions/course/${courseId}`);
	};

	return (
		<div className="w-[80%] m-auto p-[25px] font-[var(--font-NotoSans)]">
			<header className="m-0 mb-4 ">
				<div className="text-[0.5rem] text-[#c2c1c1] font-bold">
					Recent Questions
				</div>
				<div className="flex">
					<h2 className="pr-[18px] font-semibold text-2xl">최근 한 질문</h2>
					<Link href={`/questions/course/${courseId}`}>
						<div className="flex text-xs hover:opacity-90 font-medium my-auto text-[var(--color-onPrimary)] bg-[var(--color-Primary)] rounded-md py-1 px-2 cursor-pointer">
							{recentQna.length > 0 ? '더보기' : '질문하기'}
							<AiFillCaretRight className="my-auto" />
						</div>
					</Link>
				</div>
			</header>
			{recentQna.length === 0 && (
				<div className="flex items-center">
					<div className="py-0 px-[18px]">첫 질문의 주인공이 되어보세요</div>
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
