import React from 'react';
import Layout from '@components/MyPage/Layout';
import CategoryCard from '@components/common/CategoryCard';
import styled from 'styled-components';
const index = () => {
	const margin = '5px';
	return (
		<Layout>
			<Container>
				<CategoryCard
					smallHeader="DASHBOARD"
					header="MY PROFILE"
					margin={margin}
				>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae,
					expedita et. Soluta pariatur impedit, earum amet quis eum asperiores
					sed iste, assumenda voluptates ducimus quaerat aperiam nihil labore,
					repellat quam.
				</CategoryCard>
				<CategoryCard
					smallHeader="DASHBOARD"
					header="MY PROFILE"
					margin={margin}
				>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae,
					expedita et. Soluta pariatur impedit, earum amet quis eum asperiores
					sed iste, assumenda voluptates ducimus quaerat aperiam nihil labore,
					repellat quam.
				</CategoryCard>
				<CategoryCard
					smallHeader="DASHBOARD"
					header="MY PROFILE"
					margin={margin}
				>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae,
					expedita et. Soluta pariatur impedit, earum amet quis eum asperiores
					sed iste, assumenda voluptates ducimus quaerat aperiam nihil labore,
					repellat quam.
				</CategoryCard>
				<CategoryCard
					smallHeader="DASHBOARD"
					header="MY PROFILE"
					margin={margin}
				>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae,
					expedita et. Soluta pariatur impedit, earum amet quis eum asperiores
					sed iste, assumenda voluptates ducimus quaerat aperiam nihil labore,
					repellat quam.
				</CategoryCard>
				<CategoryCard
					smallHeader="DASHBOARD"
					header="MY PROFILE"
					margin={margin}
				>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae,
					expedita et. Soluta pariatur impedit, earum amet quis eum asperiores
					sed iste, assumenda voluptates ducimus quaerat aperiam nihil labore,
					repellat quam.
				</CategoryCard>
				<CategoryCard
					smallHeader="DASHBOARD"
					header="MY PROFILE"
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
`;
