import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
interface CardProps {
	title: string;
	type: string[];
}

const DifficultyList = ({ title, type }: CardProps) => {
	const router = useRouter();
	const initialRenderRef = useRef(false);
	const [checkedList, setCheckedList] = useState([false, false, false]);

	const handleClick = (index: number) => () => {
		setCheckedList((prev: boolean[]) =>
			prev.map((elem: boolean, idx: number) => (idx === index ? !elem : elem)),
		);
	};

	useEffect(() => {
		// skip first render
		if (!initialRenderRef.current) {
			initialRenderRef.current = true;
			return;
		}

		const difficulty = checkedList
			.map((value, idx) => (value ? idx + 1 : ''))
			.filter((val) => val)
			.join(',');

		const query: { difficulty?: string } = {
			difficulty,
			...router.query,
		};

		if (!difficulty) delete query.difficulty;

		router.push({
			pathname: '/courses',
			query,
		});
	}, [checkedList]);

	return (
		<Wrapper>
			<TypeHeader>{title}</TypeHeader>
			{type.map((x, index) => (
				<div key={x} style={{ color: 'rgb(120, 120, 120)' }}>
					<input type="checkbox" onClick={handleClick(index)} name={x} /> {x}
				</div>
			))}
		</Wrapper>
	);
};
const Wrapper = styled.div`
	justify-content: center;
	align-items: center;
`;

const TypeHeader = styled.div`
	font-weight: 700;
	color: rgb(89, 89, 89);
	border-bottom: 1px solid rgb(228, 228, 228);
	border-top: 1px solid rgb(228, 228, 228);
	margin: 1rem 0;
	padding: 0.5rem;
	align-items: center;
`;

export default DifficultyList;
