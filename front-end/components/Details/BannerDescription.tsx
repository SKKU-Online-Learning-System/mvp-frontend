import styled from 'styled-components';
import Tag from '@components/Details/Tag';
import { BASE_URL } from 'shared/constants/constant';
import { useEffect } from 'react';
import axios from 'axios';
const DUMMY_DATA = {
	category: ['개발 프로그래밍', '웹 개발'],
	title: '실전! 스프링 부트와 JPA 활용1 - 웹 애플리케이션 개발',
	name: '홍길동',
	tag: ['JAVA', 'Spring Boot', 'Back-End', '웹앱', 'Spring'],
	img: 'data:image/png;base64,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',
	numOfLecture: 36,
	Introduction: {
		title: '초급자를 위해 준비한 [백엔드, 웹 개발] 강의입니다.',
		desc: '실무에 가까운 예제로, 스프링 부트와 JPA를 활용해서 웹 애플리케이션을 설계하고 개발합니다. 이 과정을 통해 스프링 부트와 JPA를 실무에서 어떻게 활용해야 하는지 이해할 수 있습니다.',
		details: [
			'스프링 부트와 JPA를 활용해서 실무에서 자바 웰 애플리케이션을 개발할 수 있습니다',
			'스프링 부트와 JPA를 활용하는 최적의 방법을 이해합니다.',
			'도메인 모델을 이해하고 설계할 수 있습니다.',
			'도메인 주도 설계를 이해합니다.',
		],
	},
};
const BannerDescription = () => {
	useEffect(() => {
		axios
			.post(`${BASE_URL}/api/findLectures/category/parent`, {
				parentCategoryId: 1,
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
