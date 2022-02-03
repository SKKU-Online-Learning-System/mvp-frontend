import React, { useRef } from 'react';
import styled from 'styled-components';
import { useAppDispatch } from 'app/hooks';
import { setLectures, setClickedId } from 'feature/lecture/lectureSlice';

const TopSearchbar = () => {
	const inputRef = useRef(null);
	const dispatch = useAppDispatch();

	const handleSearch = (e: any) => {
		console.log(inputRef.current.value);
		//검색내용 store에 넣기.
		dispatch(setClickedId(-1)); // 이게 없으면 useEffect에서 전체클릭 -> 검색 -> 전체클릭 시 useEffect가 작동하지 않음.
		if (inputRef.current.value === '없음') {
			dispatch(setLectures([{ id: -1 }]));
		} else {
			dispatch(
				setLectures([
					{
						id: 42,
						lectureName: `${inputRef.current.value} : 검색 완료 결과`,
						lectureIntro: `${inputRef.current.value} : 검색에 성공했습니다`,
						lecturerId: 'TestLecturer',
						parentCategoryId: 7,
						childCategoryId: 40,
						thumbnail:
							'/home/ubuntu/mvp-backend/back-end/routes/thumbnails/42/aaa.png',
						time: '2022-01-02T15:36:49.000Z',
						difficulty: 1,
					},
				]),
			);
		}

		e.preventDefault();
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
