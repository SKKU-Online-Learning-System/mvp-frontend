import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CardList } from './CardList';
import { fetchBannerImgUrls } from 'apis/Main/bannerApi';

const MainBanner = () => {
	const [imageUrl, setImageUrl] = useState<string[]>([]);

	const makeFullUrlLists = (fileName: string[]) => {
		let tempFullUrlLists: string[] = [];
		fileName.forEach((elem) =>
			tempFullUrlLists.push(`${process.env.NEXT_PUBLIC_API_SERVER}${elem}`),
		);
		setImageUrl(tempFullUrlLists);
	};

	useEffect(() => {
		fetchBannerImgUrls()
			.then((res) => makeFullUrlLists(res.data))
			.catch((err) => console.log(err));
	}, []);

	return (
		<Container>
			{imageUrl.length > 0 && <CardList imageUrlLists={imageUrl} />}
		</Container>
	);
};

const Container = styled.div`
	width: 100%;
	background: linear-gradient(#1f5191, #022240);
	padding: 50px 60px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export default MainBanner;
