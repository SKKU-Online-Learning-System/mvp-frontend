interface CardProps {
	title: string;
	description: string;
}

const Card = ({ title, description }: CardProps) => (
	<div style={{ width: '22%' }}>
		<img style={{ width: '100%' }} src="images/card_img.png" />
		<b>{title}</b>
		<p>{description}</p>
	</div>
);

export default Card;
