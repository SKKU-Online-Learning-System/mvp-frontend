import React, { useEffect, useState } from 'react';

import AnswerDetail from './AnswerDetail';

interface Type {
	id: number;
	contents: string;
	createdAt: Date;
	author: { email: string };
	answers: any[];
}

const AnswerSet = ({ answers }: any) => {
	const [orderedAnswer, setorderedAnswer] = useState<any[]>([]);

	useEffect(() => {
		const orderedDate = answers?.sort(
			(a: Type, b: Type) =>
				new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
		);
		setorderedAnswer(orderedDate);
	}, [answers]);

	return (
		<div className="border-[1px] border-solid border-[#e9ecef] my-8 mx-auto bg-[#f8f9fa]">
			<div className="w-[800px] m-auto">
				<div className="my-4 mx-auto font-bold pl-4 text-[1.2rem]">
					총 {answers?.length}개의 답변이 달렸습니다.
				</div>
			</div>
			{orderedAnswer?.map((answer: any) => {
				return <AnswerDetail key={answer?.id} answers={answer} />;
			})}
		</div>
	);
};

export default AnswerSet;
