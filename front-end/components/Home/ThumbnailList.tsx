import CardList from './CardList';

interface ThumbnailListProps {
  title: string;
  subtitle?: string;
}

const ThumbnailList = ({title, subtitle}: ThumbnailListProps) => {
  return subtitle? (
    <div style={{width: '100%', marginTop: '60px'}}>
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <CardList/>
    </div>
  ) : (
    <div style={{width: '100%', marginTop: '60px'}}>
      <h2>{title}</h2>
      <CardList/>
    </div>
  );
}

export default ThumbnailList;

    