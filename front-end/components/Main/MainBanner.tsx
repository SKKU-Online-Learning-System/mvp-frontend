import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import API from 'apis/Main';
import { IMainBanners } from 'types/Main';
import { useRouter } from 'next/router';
// TODO. query string 형식으로 요청 보내기
const MainBanner = () => {
	const router = useRouter();
	const [bannerList, setBannerList] = useState<IMainBanners[]>([]);

	const getImageUrl = (path: string) => {
		const url = new URL(`${process.env.NEXT_PUBLIC_API_SERVER}`);
		/*
		백엔드 요청 환경변수에 origin만으로 이루어지지 않고, path가 섞여있는 경우가 있음.
		https://www.xxx.com/apis ~~ 이런 케이스.
		URL 인터페이스를 깔끔하게 사용하기 어려운 케이스
		*/

		if (url.pathname === '/') url.pathname = path;
		else {
			url.pathname = `${url.pathname}${path}`;
		}

		return url.toString();
	};

	const handleImageClick = (category2sId: number | null) => () => {
		router.push({ pathname: '/courses', query: { category2sId } });
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
						onClick={handleImageClick(banner.category2Id)}
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

export default MainBanner;

const Container = styled.div`
	min-width: 1440px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: linear-gradient(#1f5191, #022240);
	padding: 50px 60px;
`;
