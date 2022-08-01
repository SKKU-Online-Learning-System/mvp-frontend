import {
	setLectures,
	setAllLectures,
	setPageNum,
} from 'store/feature/lecture/lectureSlice';
import { useAppDispatch, useAppSelector } from 'store/app/hooks';
import { RootState } from 'store/app/store';
import {
	fetchAllLecturesPerPage,
	fetchSearchedData,
} from 'apis/Lectures/lectureApi';

import React from 'react';
import next from 'next';

const LectureMove = () => {
	const dispatch = useAppDispatch();
	const { lectures, pageNum } = useAppSelector((state: RootState) => state.lecture);

	const showLectures = async (p_num: number) => {
		//e.preventDefault();
		try {
			dispatch(setPageNum(p_num))
			let result = await fetchAllLecturesPerPage(pageNum);
			dispatch(setLectures(result.data));
			//no such thing as .records in this api
		} catch (e: any) {
			console.error(e);
		}
	};

	return (
		<>
			<button onClick={() => showLectures(2)}>show</button>
		</>
	);
};

export default LectureMove;
