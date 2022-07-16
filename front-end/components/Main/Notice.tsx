import styled from 'styled-components';

const Notice = () => {
	return (
		<Container>
			<NoticeWrapper>
				<div
					style={{
						position: 'relative',
						paddingRight: '40px',
						fontSize: '30px',
						borderRight: '2px solid rgba(0,0,0,0.2)',
						fontWeight: 700,
					}}
				>
					<div
						style={{
							left: '3px',
							top: '-2px',
							position: 'absolute',
							borderTop: '2px solid red',
							width: '20px',
						}}
					/>
					<span style={{ whiteSpace: 'nowrap' }}>온라인 명륜당</span>
					<span>
						<br />
						새소식
					</span>
				</div>

				<TextCard />
				<TextCard />
				<TextCard />
				<TextCard />
				<TextCard />
			</NoticeWrapper>
		</Container>
	);
};

const TextCard = () => {
	return (
		<TextCardWrapper>
			<span>2022.06.29</span>
			<p style={{ margin: 0, padding: '5px 0', fontWeight: 'bold' }}>
				온라인 명륜당 신규 카테고리 추가 소식
			</p>
			<div style={{ fontSize: '12px' }}>온라인 명륜당 신규 카테고.. 어쩌고</div>
			<div style={{ fontSize: '10px', paddingTop: '10px', paddingLeft: '2px' }}>
				MORE +
			</div>
		</TextCardWrapper>
	);
};

export default Notice;

const Container = styled.div`
	width: 100%;
	height: 210px;
`;

const NoticeWrapper = styled.div`
	max-width: 1650px;
	display: flex;
	padding: 40px;
`;
// w:302 h:213
const TextCardWrapper = styled.div`
	display: flex;
	max-width: 300px;
	flex-direction: column;

	padding: 0 20px;
`;
