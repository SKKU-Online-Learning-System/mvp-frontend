import Card from './Card';

interface Data {
	data: any;
}

const CardList = ({ data }: Data) => {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'space-between',
				flexFlow: 'wrap',
			}}
		>
			{data.map((res: any, index: number) => (
				<Card key={index} title={res.title} description={res.description} />
			))}
		</div>
	);
};

export default CardList;
