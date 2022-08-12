import React, { useRef } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from 'store/app/hooks';
import { setLectures, setClickedId, setMenu } from 'store/feature/lecture/lectureSlice';
import { RootState } from 'store/app/store';
import LectureTag from '@components/Lectures/LectureTag';
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
	const { menu } = useAppSelector(
		(state: RootState) => state.lecture,
	);

	const handleSearch = async (e: any) => {
		e.preventDefault();
		dispatch(setClickedId(0))
		dispatch(setMenu(''))
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
			<Top>
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
				<TagArea>
					<LectureTag />
				</TagArea>
			</Top>
			<BottomLine />
		</div>
	);
};

const Top = styled.div`
	display: flex; 
	flex-wrap: wrap;
	margin-left: 0.75rem;
`;

const Searchbar = styled.form`
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	margin-top: 5px;
	margin-right: 1rem;
`;

const TagArea = styled.div`
	width: 80%;
`;

const SerchButton = styled.button`
	border: 1px solid #dedede;
	height: 36px;
	width: 80px;
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
