import styled from 'styled-components';
interface CardProps {
	title: string;
	type: string[];
}
// <>(fragment)를 붙이지 않으면, Element[]가 return됐다고 나오면서 error생김. 한개씩 리턴해야함.
const ContentCard = ({ title, type }: CardProps) => {
	console.log(title);
	return title === '' ? (
		<>
			{type.map((x) => (
				<Card>{x}</Card>
			))}
		</>
	) : (
		<CardTop>{title}</CardTop>
	);
};
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
