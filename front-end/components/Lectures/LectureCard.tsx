import { useRouter } from 'next/router';
import { useAppSelector } from 'app/hooks';
import { RootState } from 'app/store';
import TagCard from './TagCard';

const LectureCard = () => {
	const router = useRouter();
	const { lectures } = useAppSelector((state: RootState) => state.lecture);

	const handleClick = (id: number) => {
		//router.push(`/details/${id}`);
		router.push(`/details`);
	};
	return (
		<>
			{lectures?.map((elem: any) => {
				return (
					<div
						onClick={(event: React.MouseEvent<HTMLElement>) =>
							handleClick(elem.id)
						}
						key={elem.id}
						style={{ flex: '0 1 25%', padding: '1rem', cursor: 'pointer' }}
					>
						<img
							style={{ width: '300px' }}
							src="images/card_img.png"
							alt="no"
						/>
						<div style={{ display: 'flex', flexFlow: 'row wrap' }}>
							<TagCard name={elem.hashtag} />
						</div>
						<div
							style={{
								fontWeight: 700,
								maxWidth: '300px',
								textOverflow: 'ellipsis',
								overflow: 'hidden',
							}}
						>
							{elem.title}
						</div>
						<div
							style={{
								width: '300px',
								color: '#7d7d7d',
								fontSize: '0.9rem',
								overflow: 'hidden',
								height: '100px',
							}}
						>
							{elem.description}
						</div>
					</div>
				);
			})}
		</>
	);
};
export default LectureCard;
