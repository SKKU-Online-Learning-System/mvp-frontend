import styled from "styled-components";
interface CardProps {
	title: string;
	type: string[];
}

const SelectorCard = ({ title, type }: CardProps) => {
	return (
		<div style={{ justifyContent: "center", alignItems: "center" }}>
			<TypeHeader>{title}</TypeHeader>
			{type.map((x) => (
				<div style={{ color: "rgb(120, 120, 120)" }}>
					<input type="checkbox" /> {x}
				</div>
			))}
		</div>
	);
};

const TypeHeader = styled.div`
	font-weight: 700;
	color: rgb(89, 89, 89);
	border-bottom: 1px solid rgb(228, 228, 228);
	border-top: 1px solid rgb(228, 228, 228);
	margin: 1rem 0;
	padding: 0.5rem;
	align-items: center;
`;

export default SelectorCard;
