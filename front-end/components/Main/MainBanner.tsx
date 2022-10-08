import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import API from 'apis/Main';
import { IMainBanners } from 'types/Main';
// TODO. query string 형식으로 요청 보내기
const MainBanner = () => {
	const [bannerList, setBannerList] = useState<IMainBanners[]>([]);

	const getImageUrl = (path: string) => {
		const url = new URL(`${process.env.NEXT_PUBLIC_API_BASEURL}`);
		url.pathname = path;

		return url.toString();
	};

	useEffect(() => {
		API.fetchBannerImgUrls()
			.then((res) => setBannerList(res.data))
			.catch((err) => console.log(err));
	}, []);

	return (
		<Container>
			{bannerList.length > 0 &&
				bannerList.map((banner, index) => (
					<div
						key={index}
						style={{
							paddingRight: '10px',
							overflow: 'auto',
							cursor: 'pointer',
						}}
						onClick={() => alert('기능 개발중입니다.')}
					>
						<img
							crossOrigin="anonymous"
							src={getImageUrl(banner.filename)}
							alt="bannerItem"
							style={{ maxWidth: '250px', width: '250px', height: '250px' }}
						/>
					</div>
				))}
		</Container>
	);
};

const Container = styled.div`
	min-width: 1440px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: linear-gradient(#1f5191, #022240);
	padding: 50px 60px;
`;

export default MainBanner;
