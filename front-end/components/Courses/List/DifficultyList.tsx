import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
interface ICardProps {
	title: string;
	type: string[];
}

const DifficultyList = ({ title, type }: ICardProps) => {
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
		<div className="items-center justify-center">
			<div className="my-4 mx-0 p-[0.5rem] items-center font-bold text-[rgb(89, 89, 89)] border-y-[1px] border-solid border-[rgb(228, 228, 228)]">
				{title}
			</div>
			{type.map((x, index) => (
				<div className="text-[rgb(120, 120, 120)]" key={x}>
					<input type="checkbox" onClick={handleClick(index)} name={x} /> {x}
				</div>
			))}
		</div>
	);
};

export default DifficultyList;
