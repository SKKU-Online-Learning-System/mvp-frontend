import {
	setLectures,
	setAllLectures,
} from 'store/feature/lecture/lectureSlice';
import { useAppDispatch, useAppSelector } from 'store/app/hooks';
import { RootState } from 'store/app/store';
import {
	fetchAllLecturesPerPage,
	fetchSearchedData,
} from 'apis/Lectures/lectureApi';

import React from 'react';

const LectureMove = () => {
	const dispatch = useAppDispatch();
	const { pageNum } = useAppSelector((state: RootState) => state.lecture);

	const showLectures = async (any: number) => {
		//e.preventDefault();
		try {
			let result = await fetchAllLecturesPerPage(pageNum);
			dispatch(setLectures(result.data));
			//no such thing as .records in this api
		} catch (e: any) {
			console.error(e);
		}
	};

	//page 수 결정하는 법? usestate? 그러면 각 검색 / 카드 클릭 마다 페이지 넘버 저장 후 여기서 맵핑
	//그냥 여기서 해결
	//여기서 해결 안됨
	return (
		<>
			<button onClick={() => showLectures(1)}>show</button>
		</>
	);
};

export default LectureMove;
