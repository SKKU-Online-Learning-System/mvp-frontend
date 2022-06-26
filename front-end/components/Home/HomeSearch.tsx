import styled from 'styled-components';
import Tag from './Tag';

const HomeSearch = () => {
	return (
		<HomeSearchLayout>
			<h2>온라인 명륜당에서 성장을 도와드려요</h2>
			<div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
				<HomeSearchInput placeholder="배우고 싶은 지식을 입력하세요" />
				<SearchButton />
			</div>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					width: '100%',
					flexWrap: 'wrap',
				}}
			>
				<Tag>#MVC</Tag>
				<Tag>#Spring Boot</Tag>
				<Tag>#Back-End</Tag>
				<Tag>#JPA</Tag>
				<Tag>#Front-End</Tag>
				<Tag>#React</Tag>
				<Tag>#TypeScript</Tag>
			</div>
		</HomeSearchLayout>
	);
};

export default HomeSearch;

const HomeSearchLayout = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 600px;
`;

const HomeSearchInput = styled.input`
	padding-left: 24px;
	border: 2px solid #cdcdcd;
	border-radius: 5px;
	width: 100%;
	height: 50px;
	font-size: 14pt;
	&:focus {
		outline: none;
		border-color: black;
	}
	&::placeholder {
		color: #cdcdcd;
	}
`;

const SearchButton = styled.button`
	background: none;
	background-image: url('images/search_btn.png');
	margin-left: -50px;
	border: none;
	width: 40px;
	height: 40px;
	&:focus {
		outline: none;
	}
	padding: none;
`;
