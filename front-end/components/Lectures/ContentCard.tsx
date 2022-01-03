import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setClickedId } from '../../feature/lecture/lectureSlice';
interface CardProps {
	title: string;
	type: string[][];
}

// <>(fragment)를 붙이지 않으면, Element[]가 return됐다고 나오면서 error생김. 한개씩 리턴해야함.
const ContentCard = ({ title, type }: CardProps) => {
	const dispatch = useAppDispatch();

	return title === '' ? (
		<>
			{type[0] &&
				type[0].map((category) => (
					<Card
						onClick={() => {
							dispatch(setClickedId(category.id));
						}}
						key={category.id}
					>
						{category.categoryName}
					</Card>
				))}
		</>
	) : (
		<CardTop
			onClick={() => {
				dispatch(setClickedId(0));
			}}
		>
			{title}
		</CardTop>
	);
};
// key 줄때 unique & 연속되는 숫자로 주는게 좋음.
//맨 첫번쨰 컴포넌트만 border-top 주고싶은데, 방법을 모르겠음.
const CardTop = styled.div`
	display: flex;
	border: 1px solid #e4e4e4;

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

	padding: 0.85rem;
	background: #fafafa;
	font-weight: 600;
	color: #595959;
`;

export default ContentCard;
