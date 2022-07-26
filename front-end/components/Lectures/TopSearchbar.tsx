import React, { useCallback, useRef, useState } from 'react';
<<<<<<< Updated upstream
=======
import { debounce } from 'lodash';
>>>>>>> Stashed changes
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { setLectures, setPageNum } from 'feature/lecture/lectureSlice';
import { RootState } from 'app/store';
<<<<<<< Updated upstream
import { fetchSearchedData, fetchAllLecturesPerPage } from '../../shared/apis/lectureApi';
=======
import { fetchSearchedData } from '@apis/Lectures/lectureApi';
>>>>>>> Stashed changes

interface Props {
	checkList: boolean[];
}

const TopSearchbar = ({ checkList }: Props) => {
	const inputRef = useRef<any>(null);
	const [Key, setKey] = useState();
	const dispatch = useAppDispatch();
	const { pageNum } = useAppSelector((state: RootState) => state.lecture);
	let p_num = 1;
	const handleSearch = async (e: any) => {
		e.preventDefault();
		let res = checkList.map((elem, idx) => (elem ? idx + 1 : false));
		let str = res.filter((elem) => elem).join();

		try {
			let result = await fetchSearchedData(inputRef.current.value, str);
			dispatch(setLectures(result.data));
			//no such thing as .records in this api
<<<<<<< Updated upstream
=======
			console.log(result.data);
>>>>>>> Stashed changes
		} catch (e: any) {
			console.error(e);
		}
	};

	const handleInput = (e: any) => {
		inputRef.current.value = e.target.value;
<<<<<<< Updated upstream
<<<<<<< Updated upstream
		setKey(e.target.value)
	};
=======
=======
>>>>>>> Stashed changes
		setKey(e.target.value);
	}, 5000);
>>>>>>> Stashed changes

	function check() {
		console.log(Key);
	}

	return (
		<div>
			<Searchbar onSubmit={handleSearch}>
				<input
					ref={inputRef}
					type="text"
					placeholder="강의 검색하기"
					onChange={handleInput}
					onClick={check}
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
