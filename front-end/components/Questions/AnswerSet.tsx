import React, { useEffect, useState } from 'react';

import { Container } from 'pages/questions/[questionId]';
import AnswerDetail from './AnswerDetail';

const AnswerSet = ({ answers }: any) => {
	const [orderedAnswer, setorderedAnswer] = useState<any[]>([]);

	useEffect(() => {
		const orderedDate = answers?.sort(
			(a, b) => new Date(a.createdAt) - new Date(b.createdAt),
		);
		setorderedAnswer(orderedDate);
	}, [answers]);

	return (
		<div className="border-[1px] border-solid border-[#e9ecef] my-8 mx-auto bg-[#f8f9fa]">
			<Container>
				<div className="my-4 mx-auto font-bold pl-4 text-[1.2rem]">
					총 {answers?.length}개의 답변이 달렸습니다.
				</div>
			</Container>
			{orderedAnswer?.map((answer: any) => {
				return <AnswerDetail key={answer?.id} answers={answer} />;
			})}
		</div>
	);
};

export default AnswerSet;
