import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from 'store/app/hooks';
import { setClickedId } from 'store/feature/lecture/lectureSlice';
import CardItem from './CardItem';
import { RootState } from 'store/app/store';

interface CardProps {
	title: string;
	type: string[][];
	index: number;
}

// <>(fragment)를 붙이지 않으면, Element[]가 return됐다고 나오면서 error생김. 한개씩 리턴해야함.
const ContentCard = ({ title, type, index }: CardProps) => {
	const dispatch = useAppDispatch();
	const { clickedId, lectureType } = useAppSelector(
		(state: RootState) => state.lecture,
	);
	const [collapsed, setCollapsed] = useState(false);

	function toggleCollapse() {
		setCollapsed((preValue) => !preValue);
	}

	return title === '' ? (
		<>
			{type[0] &&
				type[0].map((category: any) => (
					<Card
						onClick={() => {
							dispatch(setClickedId(category.id));
						}}
						key={category.id}
					>
						{category.name}
					</Card>
				))}
		</>
	) : (
		<>
			<CardTop
				onClick={() => {
					toggleCollapse();
				}}
			>
				{title}
			</CardTop>
			{lectureType[0][index].category2s.map((subItem: any) => (
				<CardItem
					id={subItem.id}
					item={subItem.name}
					collapse={collapsed}
					key={subItem.id}
				/>
			))}
		</>
	);
};
// key 줄때 unique & 연속되는 숫자로 주는게 좋음.
//맨 첫번쨰 컴포넌트만 border-top 주고싶은데, 방법을 모르겠음.
const CardTop = styled.div`
	border: 1px solid #e4e4e4;
	cursor: pointer;
	padding: 0.85rem;
	background: #fafafa;
	font-weight: 600;
	color: #595959;
`;
const Card = styled.div`
	display: flex;
	border-bottom: 1px solid #e4e4e4;
	border-right: 1px solid #e4e4e4;
	border-left: 1px solid #e4e4e4;
	cursor: pointer;
	padding: 0.85rem;
	background: #fafafa;
	font-weight: 600;
	color: #595959;
`;

export default React.memo(ContentCard);
