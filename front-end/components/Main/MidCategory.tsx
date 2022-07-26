import styled from 'styled-components';
import { CardList } from './CardList';
const imageUrlLists = [
	'images/mid_category1.png',
	'images/mid_category2.png',
	'images/mid_category3.png',
	'images/mid_category4.png',
	'images/mid_category5.png',
];

const MidCategory = () => {
	return (
		<Wrapper>
			<HeaderText>
				<p style={{ opacity: 0.3, letterSpacing: '4.5px' }}>
					ONLINE MYEONGRYUNDANG
				</p>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						padding: '0 0 20px 0',
					}}
				>
					<div>아직 원하는 강의를 못찾으셨나요?</div>
					<div style={{ fontWeight: 'bold' }}>원하는 분야를 선택해 보세요.</div>
				</div>
			</HeaderText>
			<Container>
				<CardList imageUrlLists={imageUrlLists} />
			</Container>
		</Wrapper>
	);
};

export default MidCategory;
const Container = styled.div`
	width: 100%;
	background: #e7eaee;
	padding: 50px 60px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

const HeaderText = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	& > div {
		font-size: 2rem;
	}
`;
