import React from 'react';
import Layout from '@components/MyPage/Layout';
import CategoryCard from '@components/common/CategoryCard';
import styled from 'styled-components';
import CommonHeader from '@components/common/CommonHeader';
import DashProfile from '@components/MyPage/Dashboard/DashProfile';
const index = () => {
	const margin = '5px';
	return (
		<Layout>
			<CommonHeader lineColor="orange" cat1="MY PAGE" cat2="DASHBOARD" />
			<Container>
				<DashProfile />
				<CategoryCard
					smallHeader="DASHBOARD"
					header="최근 알림보기"
					margin={margin}
				>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae,
					expedita et. Soluta pariatur impedit, earum amet quis eum asperiores
					sed iste, assumenda voluptates ducimus quaerat aperiam nihil labore,
					repellat quam.
				</CategoryCard>
				<CategoryCard
					smallHeader="DASHBOARD"
					header="최근 내 질문"
					margin={margin}
				>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae,
					expedita et. Soluta pariatur impedit, earum amet quis eum asperiores
					sed iste, assumenda voluptates ducimus quaerat aperiam nihil labore,
					repellat quam.
				</CategoryCard>
				<CategoryCard smallHeader="DASHBOARD" header="학습통계" margin={margin}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae,
					expedita et. Soluta pariatur impedit, earum amet quis eum asperiores
					sed iste, assumenda voluptates ducimus quaerat aperiam nihil labore,
					repellat quam.
				</CategoryCard>
				<CategoryCard
					smallHeader="DASHBOARD"
					header="최근 학습중인 강좌/강의"
					margin={margin}
				>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae,
					expedita et. Soluta pariatur impedit, earum amet quis eum asperiores
					sed iste, assumenda voluptates ducimus quaerat aperiam nihil labore,
					repellat quam.
				</CategoryCard>
				<CategoryCard
					smallHeader="DASHBOARD"
					header="완료한 강좌"
					margin={margin}
				>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae,
					expedita et. Soluta pariatur impedit, earum amet quis eum asperiores
					sed iste, assumenda voluptates ducimus quaerat aperiam nihil labore,
					repellat quam.
				</CategoryCard>
			</Container>
		</Layout>
	);
};

export default index;
const Container = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	margin-top: 1rem;
`;
