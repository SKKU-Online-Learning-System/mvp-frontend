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
	const width = 1140 / 4;

	const handleClick = (id: number) => {
		router.push(`/courses/${id}`);
	};

	return (
		<Wrapper>
			{lectures.courses.map((elem: any) => {
				return (
					<span
						style={{ paddingRight: '1rem', cursor: 'pointer', width: width }}
						onClick={(event: React.MouseEvent<HTMLElement>) =>
							handleClick(elem.id)
						}
						key={elem.id}
					>
						<img
							width="100%"
							src={`/api/images/banners/${elem.thumbnail}`}
							alt="no"
						/>
						<div
							style={{
								display: 'flex',
								gap: '4px',
								overflowY: 'auto',
							}}
						>
							{elem.hashtag.map((name: string, idx: number) => (
								<HashTagCard name={name} key={idx} />
							))}
						</div>
						<div
							style={{
								fontWeight: 700,
								textOverflow: 'ellipsis',
								overflow: 'hidden',
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
					</span>
				);
			})}
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	row-gap: 1rem;
`;
export default LectureCard;
