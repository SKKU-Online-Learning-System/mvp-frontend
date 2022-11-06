import axiosInstance from 'apis';
import { useEffect, useState, SyntheticEvent } from 'react';
import styled from 'styled-components';
import { defaultErrorImage } from 'constants/index';
import { useRouter } from 'next/router';

const LectureList = ({ headerText, headerColor }: any) => {
	const [populars, setPopulars] = useState([]);

	useEffect(() => {
		axiosInstance.get('/courses/popular').then((res) => setPopulars(res.data));
	}, []);

	return (
		<div>
			<CommonHeader text={headerText} color={headerColor} />
			<GridWrapper>
				{populars.slice(0, 5).map((lecture, idx) => (
					<LectureCard key={idx} lecture={lecture} />
				))}
			</GridWrapper>
		</div>
	);
};

export const CommonHeader = ({ text, color }: any) => {
	return (
		<Wrapper>
			<div style={{ position: 'relative' }}>
				<div
					style={{
						width: '20px',
						height: '2px',
						background: color,
						position: 'absolute',
						top: -2,
						left: '3px',
					}}
				/>
				{text}
			</div>
		</Wrapper>
	);
};

const LectureCard = ({ lecture }: any) => {
	const router = useRouter();

	const handleImgError = (e: SyntheticEvent<HTMLImageElement>) => {
		(e.target as HTMLImageElement).src = defaultErrorImage;
	};

	const handleClick = (id: number) => {
		router.push(`/courses/${id}`);
	};

	return (
		<LectureCardWrapper onClick={() => handleClick(lecture.id)}>
			<img width={'100%'} src={lecture.thumbnail} onError={handleImgError} />
			<div style={{ fontWeight: 'bold' }}>{lecture.title}</div>
			<div style={{ fontSize: '12px', opacity: '0.6' }}>
				{lecture.description}
			</div>
		</LectureCardWrapper>
	);
};

const Wrapper = styled.div`
	width: 100%;
	font-size: 32px;
	font-weight: bold;
	border-bottom: 2px solid rgba(0, 0, 0, 0.2);
	padding-bottom: 12px;
	padding-left: 45px;
	padding-top: 60px;
`;

const GridWrapper = styled.div`
	display: grid;
	grid-column-gap: 16px;
	grid-row-gap: 16px;
	grid-template-columns: repeat(5, 1fr);
	padding: 20px 35px;
`;

const LectureCardWrapper = styled.div`
	cursor: pointer;
	width: 100%;
	overflow: hidden;
	position: relative;
`;

export default LectureList;
