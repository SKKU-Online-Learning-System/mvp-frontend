import CardList from './CardList';

interface ThumbnailListProps {
	title: string;
	subtitle?: string;
	data: string[];
}

const ThumbnailList = ({ title, subtitle, data }: ThumbnailListProps) => {
	return (
		<>
			{subtitle ? (
				<div style={{ width: '100%', marginTop: '60px' }}>
					<h2>{title}</h2>
					<p>{subtitle}</p>
					<CardList data={data} />
				</div>
			) : (
				<div style={{ width: '100%', marginTop: '60px' }}>
					<h2>{title}</h2>
					<CardList data={data} />
				</div>
			)}
		</>
	);
};

export default ThumbnailList;
