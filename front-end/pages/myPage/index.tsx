

import React from 'react';
import Layout from '@components/Main/MyPage/Layout';
import CategoryCard from '@components/Common/CategoryCard';
import styled from 'styled-components';
const index = () => {
	const margin = '5px';
	return (
			<Container>
				<CategoryCard
					smallHeader="DASHBOARD"
					header="수강중인 강좌"
					margin={margin}
				>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae,
					expedita et. Soluta pariatur impedit, earum amet quis eum asperiores
					sed iste, assumenda voluptates ducimus quaerat aperiam nihil labore,
					repellat quam.
				</CategoryCard>
				<CategoryCard
					smallHeader="DASHBOARD"
					header="수강 완료 강좌"
					margin={margin}
				>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae,
					expedita et. Soluta pariatur impedit, earum amet quis eum asperiores
					sed iste, assumenda voluptates ducimus quaerat aperiam nihil labore,
					repellat quam.
				</CategoryCard>
				<CategoryCard
					smallHeader="DASHBOARD"
					header="찜한 강좌"
					margin={margin}
				>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae,
					expedita et. Soluta pariatur impedit, earum amet quis eum asperiores
					sed iste, assumenda voluptates ducimus quaerat aperiam nihil labore,
					repellat quam.
				</CategoryCard>
				<CategoryCard
					smallHeader="DASHBOARD"
					header="즐겨찾기 강좌"
					margin={margin}
				>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae,
					expedita et. Soluta pariatur impedit, earum amet quis eum asperiores
					sed iste, assumenda voluptates ducimus quaerat aperiam nihil labore,
					repellat quam.
				</CategoryCard>
				<CategoryCard
					smallHeader="DASHBOARD"
					header="내 질의응답"
					margin={margin}
				>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae,
					expedita et. Soluta pariatur impedit, earum amet quis eum asperiores
					sed iste, assumenda voluptates ducimus quaerat aperiam nihil labore,
					repellat quam.
				</CategoryCard>
				<CategoryCard
					smallHeader="DASHBOARD"
					header="최근 수강 강좌"
					margin={margin}
				>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae,
					expedita et. Soluta pariatur impedit, earum amet quis eum asperiores
					sed iste, assumenda voluptates ducimus quaerat aperiam nihil labore,
					repellat quam.
				</CategoryCard>
			</Container>
	);
};

export default index;
const Container = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
`;