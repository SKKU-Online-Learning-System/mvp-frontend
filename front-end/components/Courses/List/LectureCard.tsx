import { useRouter } from 'next/router';
import { useAppSelector } from 'store/app/hooks';
import { RootState } from 'store/app/store';
import HashTagCard from './HashTagCard';
import styled from 'styled-components';
import { SyntheticEvent } from 'react';
import { defaultErrorImage } from 'constants/index';
type courseType = {
	category1: string;
	category2: string;
	createdAt: string;
	description: string;
	difficulty: number;
	hashtag: string[];
	id: number;
	instructor: string;
	summary: string;
	thumbnail: string;
	title: string;
};

const width = ~~(1140 / 4);
const LectureCard = () => {
	const router = useRouter();
	const { lectures } = useAppSelector((state: RootState) => state.lecture);

	const handleImgError = (e: SyntheticEvent<HTMLImageElement>) => {
		(e.target as HTMLImageElement).src = defaultErrorImage;
	};

	const handleClick = (id: number) => {
		router.push(`/courses/${id}`);
	};

	return (
		<Wrapper>
			{lectures.courses.map((elem: courseType) => {
				return (
					<span
						style={{ paddingRight: '1rem', cursor: 'pointer', width: width }}
						onClick={() => handleClick(elem.id)}
						key={elem.id}
					>
						<img
							width="100%"
							src={`/api/images/banners/${elem.thumbnail}`}
							onError={handleImgError}
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
