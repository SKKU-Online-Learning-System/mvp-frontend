import React, { FormEvent, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const TopSearchbar = () => {
	const dodbogiLocation = 'images/dodbogi.png';
	const [text, setText] = useState('');
	const router = useRouter();
	const { keyword } = router.query;

	const _fetchSearchedCourses = (keyword: string | undefined) => {
		const query = { ...router.query, keyword };
		if (!keyword) {
			delete query.keyword;
		}

		router.push({
			pathname: '/courses',
			query,
		});
	};

	const handleSearch = async (e: FormEvent) => {
		e.preventDefault();
		_fetchSearchedCourses(text);
	};

	const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setText(e.target.value);
	};

	useEffect(() => {
		if (!router.isReady) return;

		keyword ? setText(keyword as string) : setText('');
	}, [router.isReady, keyword]);

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
						value={text}
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
