import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

interface ICardProps {
	// title: string;
	type: string[];
}

const DifficultyList = ({ type }: ICardProps) => {
	const router = useRouter();
	const initialRenderRef = useRef(false);
	const [checkedList, setCheckedList] = useState([false, false, false]);

	const handleClick = (index: number) => () => {
		setCheckedList((prev) =>
			prev.map((elem, idx) => (idx === index ? !elem : elem)),
		);
	};

	useEffect(() => {
		// skip first render
		if (!initialRenderRef.current) {
			initialRenderRef.current = true;
			return;
		}

		const difficulty = checkedList
			.reduce((acc: number[], cur, idx) => {
				if (cur) acc.push(idx + 1);
				return acc;
			}, [])
			.join(',');

		const query: { difficulty?: string } = {
			...router.query,
			difficulty,
		};

		if (!difficulty) delete query.difficulty;

		router.push({
			pathname: '/courses',
			query,
		});
	}, [checkedList]);

	return (
		// <div className="items-center justify-center flex relative">
		<div className="py-4 px-2 rounded-md focus:outline-none  space-x-4">
			{type.map((x, index) => (
				<label
					className={`border-[1.5px] rounded-full px-3 py-1 text-[var(--color-onBackground-300)] inline-flex items-center hover:bg-[var(--color-onPrimary-100)]
					 ${checkedList[index] ? 'text-[var(--color-Primary)]' : ''} 
					 ${checkedList[index] ? 'border-[var(--color-Primary)]' : ''}
					`}
					key={x}
				>
					<span className="absolute w-1 h-1 overflow-hidden ">
						<input
							className="opacity-0"
							type="checkbox"
							onClick={handleClick(index)}
							name={x}
						/>
					</span>
					{x}
				</label>
			))}
		</div>
	);
};

export default DifficultyList;
