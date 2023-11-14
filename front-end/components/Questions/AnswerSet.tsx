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
		<div className="w-[800px] mbl:w-[300px] m-auto my-8 border-t-2">
			<div className="">
				<div className="my-4 mx-auto font-bold pl-4 text-[1.2rem]">
					답변{' '}
					<span className="text-[var(--color-Primary)]">{answers?.length}</span>
				</div>
			</div>
			{orderedAnswer?.map((answer: any) => {
				return <AnswerDetail key={answer?.id} answers={answer} />;
			})}
		</div>
	);
};

export default AnswerSet;
