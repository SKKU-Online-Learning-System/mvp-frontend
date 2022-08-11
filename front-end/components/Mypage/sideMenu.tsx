import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

let menuList = [
	{title: '수강중인 강좌', link: 'learning'},
	{title: '수강 완료 강좌', link: 'complete'},
	{title: '찜한 강좌', link: 'wishlist'},
	{title: '즐겨찾기 강좌', link: 'bookmark'},
	{title: '내 질의응답', link: 'myQnA'},
	{title: '최근 수강 강좌', link: ''},
]
const SideMenu = () => {
	return (
		<>
		{menuList.map((item) => (
			<Link href={'/myPage/'+item.link}>
				<CardTop> {item.title} </CardTop>
			</Link>
		))}
		</>
	);
};

const CardTop = styled.div`
	margin : 0px 10px;
	border: 1px solid #e4e4e4;
	cursor: pointer;
	padding: 1rem 0.85rem;
	background: #fafafa;
	font-weight: 600;
	color: #595959;
	&:hover{  
		background-color : skyblue;
		color : blue
	}
	&:nth-child(1) {
        margin-top: 100px;
    }
`;
export default SideMenu;
