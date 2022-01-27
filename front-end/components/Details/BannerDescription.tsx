import styled from 'styled-components';
import Tag from '@components/Details/Tag';
import { BASE_URL } from 'shared/constants/constant';
import { useEffect } from 'react';
import axios from 'axios';

const BannerDescription = () => {
	useEffect(() => {
		// if (clickedId === 0) {
		// 	// 전체보기
		// axios
		// 	.post(`${BASE_URL}/api/findLectures/category/parent`, {
		// 		parentCategoryId: 1,
		// 	})
		// 	.then((res) => console.log(res))
		// 	.catch((err) => console.log(err));
		// } else {
		// 	// 카테고리 보기
		// 	axios
		// 		.post(`${BASE_URL}/api/findLectures/category/parent`, {
		// 			parentCategoryId: clickedId,
		// 		})
		// 		.then((res) => setLectureList(res.data))
		// 		.catch((err) => console.log(err));
		// }
		axios
			.post(`${BASE_URL}/api/findLectures/category/parent`, {
				parent: 1,
				parentCategoryId: 13,
			})
			.then((res) => console.log(res.data))
			.catch((err) => console.log(err));
	}, []);
	return (
		<DescContainer>
			<DescCategory>개발 프로그래밍 {'>'} 웹 개발</DescCategory>
			<Margin></Margin>
			<DescSubject>
				실전! 스프링 부트와 JPA 활용1 - 웹 애플리케이션 개발
			</DescSubject>
			<Margin></Margin>
			<DescName>
				<img
					style={{ marginRight: '10px' }}
					src="images/details_profile.png"
					alt=""
				/>
				홍길동
			</DescName>
			<Margin></Margin>
			<TagContainer>
				<Tag>#JAVA</Tag>
				<Tag>#Spring Boot</Tag>
				<Tag>#Back-End</Tag>
				<Tag>#웹앱</Tag>
				<Tag>#Spring</Tag>
			</TagContainer>
		</DescContainer>
	);
};

const DescContainer = styled.div`
	color: #fff;
	margin-left: 40px;
`;
const DescCategory = styled.div`
	font-family: Roboto;
	font-style: normal;
	font-weight: normal;
	font-size: 18px;
	line-height: 21px;
`;
const DescSubject = styled.div`
	font-family: NanumSquare;
	font-style: normal;
	font-weight: 800;
	font-size: 32px;
	line-height: 36px;
`;
const DescName = styled.div`
	font-family: Roboto;
	font-style: normal;
	font-weight: normal;
	font-size: 18px;
	line-height: 21px;
`;
const Margin = styled.div`
	margin: 20px 0;
`;
const TagContainer = styled.div`
	display: flex;
`;

export default BannerDescription;
