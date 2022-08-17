import axiosInstance from 'apis';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const LectureList = ({ headerText, headerColor }: any) => {
	const [populars, setPopulars] = useState([]);

	useEffect(() => {
		axiosInstance.get('/courses/popular').then((res) => setPopulars(res.data));
	}, []);

	return (
		<div>
			<CommonHeader text={headerText} color={headerColor} />
			<div style={{ display: 'flex', padding: '20px 35px', overflowX: 'auto' }}>
				{populars.slice(0, 5).map((lecture, idx) => (
					<LectureCard key={idx} lecture={lecture} />
				))}
			</div>
		</div>
	);
};

const CommonHeader = ({ text, color }: any) => {
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
	return (
		<LectureCardWrapper>
			<img src="images/lecture_thumbnail.png" />
			{/* <img src="https://mrdang.kro.kr/api/images/" /> */}
			{/* <div style={{ display: 'flex', gap: '5px' }}>
				<HashTagChip>#python</HashTagChip>
				<HashTagChip>#코딩입문</HashTagChip>
				<HashTagChip>#자동매매</HashTagChip>
			</div> */}
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

const LectureCardWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 270px;
	padding: 10px;
`;

const HashTagChip = styled.div`
	min-width: 60px;
	background-color: #e6e6e6;
	border-radius: 10px;
	white-space: nowrap;
	font-size: 10px;
	padding: 3px 6px;
	margin: 8px 0;
`;

export default LectureList;
