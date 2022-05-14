import styled from 'styled-components';
import Tag from '@components/Details/Tag';
import { BASE_URL } from 'shared/constants/constant';
import { useEffect } from 'react';
import axios from 'axios';
interface DataProps {
	data: any;
}
const BannerDescription = ({ data }: DataProps) => {
	// useEffect(() => {
	// 	axios
	// 		.post(`${BASE_URL}/api/findLectures/category/parent`, {
	// 			parentCategoryId: 1,
	// 		})
	// 		.then((res) => console.log(res.data))
	// 		.catch((err) => console.log(err));
	// }, []);
	return (
		<DescContainer>
			<DescCategory>{`${data.category[0]} > ${data.category[1]}`}</DescCategory>
			<Margin></Margin>
			<DescSubject>{data.title}</DescSubject>
			<Margin></Margin>
			<DescName>
				<img
					style={{ marginRight: '10px', width: '25px', height: '25px' }}
					src={data.profileimg ? data.profileimg : 'images/details_profile.png'}
					alt=""
				/>
				<a href="#" style={{ color: 'inherit' }}>
					{data.name}
				</a>
			</DescName>
			<Margin></Margin>
			<TagContainer>
				{data.tag.map((ele: string) => {
					return (
						<Tag key={ele.toString()}>
							<a href="#" style={{ color: 'inherit' }}>
								#{ele}
							</a>
						</Tag>
					);
				})}
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
