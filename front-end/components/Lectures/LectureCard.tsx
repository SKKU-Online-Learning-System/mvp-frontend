import { useRouter } from 'next/router';
import { useAppSelector } from 'app/hooks';
import { RootState } from 'app/store';
const LectureCard = () => {
	const router = useRouter();
	const { lectures } = useAppSelector((state: RootState) => state.lecture);

	const handleClick = (id: number) => {
		//router.push(`/details/${id}`);
		router.push(`/details`);
	};
	return (
		<>
			{lectures.map((elem: any) => {
				return (
					<div
						onClick={(event: React.MouseEvent<HTMLElement>) =>
							handleClick(elem.id)
						}
						key={elem.id}
						style={{ flex: '0 1 25%', padding: '1rem', cursor: 'pointer' }}
					>
						<img style={{ width: '100%' }} src="images/card_img.png" alt="no" />
						<div
							style={{
								fontWeight: 700,
							}}
						>
							{elem.title}
						</div>
						<div
							style={{
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
