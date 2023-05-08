import React, { ReactElement, useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import CategoryCard from '@components/common/CategoryCard';
import MyPageLayout from '@components/MyPage/MyPageLayout';
import withRouteGuard from '@components/withRouteGuard';

const MyPageIndex = (): ReactElement => {
	const margin = '5px';
	const router = useRouter();

	useEffect(() => {
		router.replace('/my-page/history');
	}, [router]);

	return (
		<MyPageLayout>
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
		</MyPageLayout>
	);
};

export default withRouteGuard(MyPageIndex);

const Container = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
`;
