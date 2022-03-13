import React, { useRef } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { setLectures, setClickedId } from 'feature/lecture/lectureSlice';
import { RootState } from 'app/store';

const TopSearchbar = () => {
	const inputRef = useRef(null);
	const dispatch = useAppDispatch();
	const { allLectures } = useAppSelector((state: RootState) => state.lecture);

	const handleSearch = (e: any) => {
		// console.log(inputRef.current.value);
		// //검색내용 store에 넣기.
		// dispatch(setClickedId(-1)); // 이게 없으면 useEffect에서 전체클릭 -> 검색 -> 전체클릭 시 useEffect가 작동하지 않음.
		// if (inputRef.current.value === '없음') {
		// 	dispatch(setLectures([{ id: -1 }]));
		// } else {
		// 	let searchResults = allLectures.filter(
		// 		(elem: any) =>
		// 			elem.lectureName
		// 				.toUpperCase()
		// 				.includes(inputRef.current.value.toUpperCase()) ||
		// 			elem.lectureIntro
		// 				.toUpperCase()
		// 				.includes(inputRef.current.value.toUpperCase()),
		// 	);
		// 	if (searchResults.length === 0) {
		// 		dispatch(setLectures([{ id: -1 }]));
		// 	} else {
		// 		dispatch(setLectures(searchResults));
		// 	}
		// }
		// e.preventDefault();
	};

	const handleInput = (e: any) => {
		// inputRef.current.value = e.target.value;
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
				<SerchButton type="submit">검색</SerchButton>
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
