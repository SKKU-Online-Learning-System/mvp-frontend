import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useAppDispatch } from 'store/app/hooks';
import { setLectures, setMenu } from 'store/feature/lecture/lectureSlice';
import { fetchSearchedCourses } from 'apis/Courses/courseApi';
import { useRouter } from 'next/router';

import HashTagCard from './HashTagCard';

interface Props {
	checkList: boolean[];
}

const TopSearchbar = ({ checkList }: Props) => {
	const dodbogiLocation = 'images/dodbogi.png';
	const inputRef = useRef<HTMLInputElement | null>(null);
	const dispatch = useAppDispatch();
	const router = useRouter();
	const { s } = router.query;

	const _fetchSearchedCourses = async (s: string) => {
		const res = checkList.map((elem, idx) => (elem ? idx + 1 : false));
		const difficulty = res.filter((elem) => elem).join();

		try {
			const result = await fetchSearchedCourses(s, difficulty || undefined);
			dispatch(setLectures(result.data));
			dispatch(setMenu([]));
			//no such thing as .records in this api
		} catch (e: unknown) {
			console.error(e);
		}
	};

	const handleSearch = async (e: any) => {
		e.preventDefault();
		if (inputRef.current) _fetchSearchedCourses(inputRef.current.value);
	};

	const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (inputRef.current) inputRef.current.value = e.target.value;
	};

	useEffect(() => {
		if (!router.isReady) return;

		if (s) {
			_fetchSearchedCourses(s as string);
			return;
		}

		if (inputRef.current) _fetchSearchedCourses(inputRef.current.value);
	}, [router.isReady, s, checkList]);

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
