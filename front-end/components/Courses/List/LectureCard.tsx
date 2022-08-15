import { useRouter } from 'next/router';
import { useAppSelector } from 'store/app/hooks';
import { RootState } from 'store/app/store';
import { setClickedId } from 'store/feature/lecture/lectureSlice';
import HashTagCard from './HashTagCard';
import styled from 'styled-components';

const LectureCard = () => {
	const router = useRouter();
	const { clickedId, lectures } = useAppSelector(
		(state: RootState) => state.lecture,
	);

	const handleClick = (id: number) => {
		router.push(`/courses/${id}`);
	};

	return (
		<Wrapper>
			{lectures.courses.map((elem: any) => {
				return (
					<span
						style={{ paddingRight: '1rem', cursor: 'pointer' }}
						onClick={(event: React.MouseEvent<HTMLElement>) =>
							handleClick(elem.id)
						}
						key={elem.id}
					>
						<img
							style={{ width: '300px' }}
							src="images/card_img.png"
							alt="no"
						/>
						<div
							style={{
								display: 'flex',
								gap: '4px',
								overflowY: 'auto',
								width: '300px',
							}}
						>
							{elem.hashtag.map((name: string, idx: number) => (
								<HashTagCard name={name} key={idx} />
							))}
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
					</span>
				);
			})}
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 1rem;
`;
export default LectureCard;
