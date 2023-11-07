import React, { useEffect, useState } from 'react';

import AnswerDetail from './AnswerDetail';
import { Answer } from 'types/Course';

interface Type {
	id: number;
	contents: string;
	createdAt: Date;
	author: { email: string };
	answers: Answer[];
}

const AnswerSet = ({ answers }: any): JSX.Element => {
	const [orderedAnswer, setorderedAnswer] = useState<Answer[]>([]);

	useEffect(() => {
		const orderedDate = answers?.sort(
			(a: Type, b: Type) =>
				new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
		);
		setorderedAnswer(orderedDate);
	}, [answers]);

	return (
		<div className="w-[800px] mbl:w-[300px] m-auto my-8 border-t-2">
			<div className="">
				<div className="my-4 mx-auto font-bold pl-4 text-[1.2rem]">
					답변{' '}
					<span className="text-[var(--color-Primary)]">{answers?.length}</span>
				</div>
			</div>
			{orderedAnswer?.map((answer: Answer) => {
				return <AnswerDetail key={answer?.id} answer={answer} />;
			})}
		</div>
	);
};

export default AnswerSet;
