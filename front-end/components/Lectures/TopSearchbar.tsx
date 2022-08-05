import React, { useRef } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from 'store/app/hooks';
import { setLectures, setClickedId } from 'store/feature/lecture/lectureSlice';
import { RootState } from 'store/app/store';
import {
	fetchSearchedData,
	fetchAllLecturesPerPage,
} from 'apis/Lectures/lectureApi';

interface Props {
	checkList: boolean[];
}

const TopSearchbar = ({ checkList }: Props) => {
	const inputRef = useRef<any>(null);
	const dispatch = useAppDispatch();

	const handleSearch = async (e: any) => {
		e.preventDefault();
		dispatch(setClickedId(0))
		let res = checkList.map((elem, idx) => (elem ? idx + 1 : false));
		let str = res.filter((elem) => elem).join();
		try {
			let result = await fetchSearchedData(inputRef.current.value, str);
			dispatch(setLectures(result.data));
		} catch (e: any) {
			console.error(e);
		}
	};

	const handleInput = (e: any) => {
		inputRef.current.value = e.target.value;
	};

	return (
		<div>
			<Searchbar onSubmit={handleSearch}>
				<input
					ref={inputRef}
					type="text"
					placeholder="강의 검색하기"
					onChange={handleInput}
					style={{
						flex: '0 1 300px',
						border: '1px solid #dedede',
						height: '36px',
					}}
				/>
				<SerchButton type="submit" onClick={handleSearch}>
					검색
				</SerchButton>
			</Searchbar>
			<BottomLine />
		</div>
	);
};


const Searchbar = styled.form`
	display: flex;
	justify-content: flex-end;
	align-items: flex-end;
	margin-left: 1rem;
	margin-right: 1rem;
`;

const SerchButton = styled.button`
	border: 1px solid #dedede;
	height: 36px;
	background-color: #1dc078;
	color: #ffffff;
	font-size: 1rem;
	font-weight: 600;
	cursor: pointer;
`;

const BottomLine = styled.div`
	border-bottom: 1px solid #dedede;
	margin-left: 0.75rem;
	margin-right: 0.75rem;
	padding-bottom: 1.5rem;
`;
//export default TopSearchbar;
export default React.memo(TopSearchbar);
