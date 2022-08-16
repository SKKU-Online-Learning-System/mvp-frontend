import React, { useCallback, useRef, useState } from 'react';
import styled from 'styled-components';
import { useAppDispatch } from 'store/app/hooks';
import { setLectures, setMenu } from 'store/feature/lecture/lectureSlice';
import { RootState } from 'store/app/store';
import {
	fetchSearchedData,
	fetchAllLecturesPerPage,
} from 'apis/Lectures/lectureApi';

import HashTagCard from './HashTagCard';

interface Props {
	checkList: boolean[];
}

const TopSearchbar = ({ checkList }: Props) => {
	const dodbogiLocation = 'images/dodbogi.png';
	const inputRef = useRef<any>(null);
	const dispatch = useAppDispatch();

	let tags = ['Python', 'Java'];
	for (var i = 0; i < 10; i++) {
		tags.push(tags[0] + i.toString());
	}

	const handleSearch = async (e: any) => {
		e.preventDefault();
		let res = checkList.map((elem, idx) => (elem ? idx + 1 : false));
		let str = res.filter((elem) => elem).join();

		try {
			let result = await fetchSearchedData(inputRef.current.value, str);
			dispatch(setLectures(result.data));
			dispatch(setMenu([]));
			//no such thing as .records in this api
		} catch (e: any) {
			console.error(e);
		}
	};

	const handleInput = (e: any) => {
		inputRef.current.value = e.target.value;
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
				<HashTagWrapper>
					{tags.map((elem, idx) => (
						<HashTagCard
							onClick={() => alert('추후 개발 예정')}
							name={elem}
							key={idx}
						/>
					))}
				</HashTagWrapper>
			</SearchBarAndTagWrapper>
		</Wrapper>
	);
};

const HashTagWrapper = styled.div`
	display: flex;
	max-height: 80px;
	overflow-y: auto;
	flex-wrap: wrap;
	gap: 4px;
`;

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
