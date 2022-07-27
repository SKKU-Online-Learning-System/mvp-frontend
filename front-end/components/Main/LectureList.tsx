import styled from 'styled-components';

const LectureList = ({ headerText, headerColor }) => {
	return (
		<div>
			<CommonHeader text={headerText} color={headerColor} />
			<div style={{ display: 'flex', padding: '20px 35px', overflowX: 'auto' }}>
				{new Array(5).fill(1).map((elem, idx) => (
					<LectureCard key={idx} />
				))}
			</div>
		</div>
	);
};

export const CommonHeader = ({ text, color }) => {
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

const LectureCard = () => {
	return (
		<LectureCardWrapper>
			<img src="images/lecture_thumbnail.png" />
			<div style={{ display: 'flex', gap: '5px' }}>
				<HashTagChip>#python</HashTagChip>
				<HashTagChip>#코딩입문</HashTagChip>
				<HashTagChip>#자동매매</HashTagChip>
			</div>
			<div style={{ fontWeight: 'bold' }}>
				파이썬 시작하기: 파이썬 입문자를 위한개념 정리
			</div>
			<div style={{ fontSize: '12px', opacity: '0.6' }}>
				파이썬이란 무엇인가? 개발 환경 구축부터 기초 파이썬 문법, 자동 매매
				구현, 실전 서비스까지!
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
	width: 295px;
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
