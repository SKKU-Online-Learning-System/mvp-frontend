import styled from 'styled-components';
const TopSearchbar = () => {
	return (
		<div>
			<Searchbar>
				<input
					type="text"
					placeholder="강의 검색하기"
					style={{
						flex: '0 1 300px',
						border: '1px solid #dedede',
						height: '36px',
					}}
				/>
				<SerchButton>검색</SerchButton>
			</Searchbar>
			<BottomLine />
		</div>
	);
};

export const SerchButton = styled.button`
	border: 1px solid #dedede;
	height: 36px;
	background-color: #1dc078;
	color: #ffffff;
	font-size: 1rem;
	font-weight: 600;
`;

const Searchbar = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: flex-end;
	margin-left: 1rem;
	margin-right: 1rem;
`;

const BottomLine = styled.div`
	border-bottom: 1px solid #dedede;
	margin-left: 0.75rem;
	margin-right: 0.75rem;
	padding-bottom: 1.5rem;
`;
export default TopSearchbar;
