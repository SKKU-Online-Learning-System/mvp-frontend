import styled from 'styled-components';

const category = [
	'최근 학습강의',
	'최근 내 질문',
	'학습통계',
	'My Skills',
	'관심강의',
];

const Dashboard = () => {
	return (
		<DashboardWrapper>
			<FlexColumnWrapper>
				<h2>My Dashboard</h2>
				<h2 style={{ marginTop: 0 }}>
					<div>내 대쉬보드</div>
					<div>바로가기</div>
				</h2>
				<ul
					style={{
						display: 'flex',
						listStyle: 'none',
						margin: 0,
						padding: 0,
						whiteSpace: 'nowrap',
					}}
				>
					{category.map((elem, idx) => (
						<CategoryList key={idx}>{elem}</CategoryList>
					))}
				</ul>
			</FlexColumnWrapper>
			<div style={{ display: 'flex', gap: '20px' }}>
				<CategoryCard header={'최근 학습한 강의'} />
				<CategoryCard header={'내가 찜한 강의'} />
				<CategoryCard header={'최근 내 질문'} />
				<CategoryCard header={'내 알림 모아보기'} />
			</div>
		</DashboardWrapper>
	);
};

const CategoryCard = ({ header }) => {
	return (
		<CardWrapper>
			<div
				style={{
					position: 'relative',
					background: 'rgba(0,0,0,0.7)',
					color: 'white',
					minWidth: '180px',
					padding: '20px 20px 10px 20px',
					fontSize: '24px',
					fontWeight: 'bold',
				}}
			>
				<img
					style={{ right: 0, top: 0, position: 'absolute', cursor: 'pointer' }}
					src={'images/plus_icon.png'}
					width="24px"
					onClick={() => alert('plus')}
				></img>
				{header}
			</div>
			<CardContentWrapper>
				<CardChildren>
					<div>또하나의 길또하나의 길또하나의 길또하나의 길또하나의 길</div>
				</CardChildren>
				<CardChildren>또하나의 길</CardChildren>
				<CardChildren>또하나의 길</CardChildren>
			</CardContentWrapper>
		</CardWrapper>
	);
};

const DashboardWrapper = styled.div`
	display: flex;
	background-color: #e7eaee;
	width: 100%;
	padding: 30px 50px;
`;

const FlexColumnWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding-right: 50px;
`;

const CategoryList = styled.li`
	font-size: 12px;
	&:hover {
		color: rgba(0, 0, 0, 0.3);
	}
	&:not(:last-child)::after {
		content: '·';
		padding: 0 8px;
	}
`;

const CardWrapper = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 300px;
`;

const CardContentWrapper = styled.div`
	background-color: white;
	padding-bottom: 20px;
`;

const CardChildren = styled.div`
	margin: 0 20px;
	padding: 8px 0;
	&:not(:last-child) {
		border-bottom: 1px solid gray;
	}
`;

export default Dashboard;
