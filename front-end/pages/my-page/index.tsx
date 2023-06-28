import React, { ReactElement, useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

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
				<div smallHeader="DASHBOARD" header="MY PROFILE" margin={margin}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae,
					expedita et. Soluta pariatur impedit, earum amet quis eum asperiores
					sed iste, assumenda voluptates ducimus quaerat aperiam nihil labore,
					repellat quam.
				</div>
				<div smallHeader="DASHBOARD" header="MY PROFILE" margin={margin}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae,
					expedita et. Soluta pariatur impedit, earum amet quis eum asperiores
					sed iste, assumenda voluptates ducimus quaerat aperiam nihil labore,
					repellat quam.
				</div>
				<div smallHeader="DASHBOARD" header="MY PROFILE" margin={margin}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae,
					expedita et. Soluta pariatur impedit, earum amet quis eum asperiores
					sed iste, assumenda voluptates ducimus quaerat aperiam nihil labore,
					repellat quam.
				</div>
				<div smallHeader="DASHBOARD" header="MY PROFILE" margin={margin}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae,
					expedita et. Soluta pariatur impedit, earum amet quis eum asperiores
					sed iste, assumenda voluptates ducimus quaerat aperiam nihil labore,
					repellat quam.
				</div>
				<div smallHeader="DASHBOARD" header="MY PROFILE" margin={margin}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae,
					expedita et. Soluta pariatur impedit, earum amet quis eum asperiores
					sed iste, assumenda voluptates ducimus quaerat aperiam nihil labore,
					repellat quam.
				</div>
				<div smallHeader="DASHBOARD" header="MY PROFILE" margin={margin}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae,
					expedita et. Soluta pariatur impedit, earum amet quis eum asperiores
					sed iste, assumenda voluptates ducimus quaerat aperiam nihil labore,
					repellat quam.
				</div>
			</Container>
		</MyPageLayout>
	);
};

export default withRouteGuard(MyPageIndex);

const Container = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
`;
