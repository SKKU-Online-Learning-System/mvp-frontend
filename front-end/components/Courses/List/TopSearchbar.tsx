import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import HashTagCard from './HashTagCard';

const TopSearchbar = () => {
	const dodbogiLocation = 'images/dodbogi.png';
	const inputRef = useRef<HTMLInputElement | null>(null);
	const router = useRouter();

	const _fetchSearchedCourses = (keyword: string) => {
		router.push({
			pathname: '/courses',
			query: { ...router.query, keyword },
		});
	};

	const handleSearch = async (e: any) => {
		e.preventDefault();
		if (inputRef.current) _fetchSearchedCourses(inputRef.current.value);
	};

	const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (inputRef.current) inputRef.current.value = e.target.value;
	};

	return (
		<Wrapper>
			<Title>
				<img
					src={dodbogiLocation}
					width="40px"
					height="40px"
					style={{ paddingTop: '5px' }}
				/>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						lineHeight: '20px',
					}}
				>
					<div
						style={{
							fontSize: '0.5rem',
							opacity: '0.6',
						}}
					>
						ONLINE MYEONGRYUNDANG
					</div>
					<div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
						배우고 싶은 지식을 검색해보세요!
					</div>
				</div>
			</Title>
			<SearchBarAndTagWrapper>
				<Searchbar onSubmit={handleSearch}>
					<Input
						type="text"
						ref={inputRef}
						placeholder="강의 검색하기"
						onChange={handleInput}
					/>
					<span
						style={{ padding: '16px 4px', cursor: 'pointer' }}
						onClick={handleSearch}
					>
						<img
							src="/images/search_btn.png"
							style={{ opacity: '0.6' }}
							width="32px"
						/>
					</span>
				</Searchbar>
			</SearchBarAndTagWrapper>
		</Wrapper>
	);
};

const Title = styled.div`
	display: flex;
	column-gap: 2px;
	align-items: center;
	padding-bottom: 1rem;
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	border-bottom: 1px solid #dedede;
	border-top: 1px solid #dedede;
	padding: 25px 0 30px 0;
`;

const SearchBarAndTagWrapper = styled.div`
	display: flex;
	column-gap: 20px;
`;
const Searchbar = styled.form`
	border: 2px solid #dedede;
	min-width: 500px;
	height: 80px;
	display: flex;
	align-items: center;
`;

const Input = styled.input`
	width: 100%;
	height: 100%;
	border: none;
	font-size: 1.5rem;
	& :focus {
		outline: 0;
	}
`;

//export default TopSearchbar;
export default React.memo(TopSearchbar);
