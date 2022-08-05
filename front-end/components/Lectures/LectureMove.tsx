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
import React, { useState } from 'react';
import _ from 'lodash';

const LectureMove = () => {
	const dispatch = useAppDispatch();
	const { lectures, pageNum, clickedId } = useAppSelector((state: RootState) => state.lecture);
	const [ lectureNum, setLectureNum ] = useState(0);
	const [ collapsed, setCollapsed ] = useState(true);
	let new_lectures;

	const showLectures = async (p_num: number) => {
		try {
			if(p_num !== 1 && clickedId === 0){
				dispatch(setPageNum(p_num));
				new_lectures = Object.assign({}, lectures);
				let result = await fetchAllLecturesPerPage(pageNum);
								
				for(let i=0;i<lectures.courses.length;i++){
					result.data.courses.push(lectures.courses[i])
				}
				
				result.data.courses.sort((a, b) => {
					return a.id - b.id;
				})
				result.data.courses = _.uniqBy(result.data.courses, 'id');
				setLectureNum(result.data.courses.length)
				dispatch(setLectures(result.data));
			}
		} catch (e: any) {
			console.error(e);
		}
	};
	
	return (
		<>
			{collapsed && <button onClick={() => showLectures(2)}>show</button>}
		</>
	);
};


// 전체 강의 개수는 api에서 쉽게 가져올 수 있다 -> lectures.length
// 여기서 만약 result.data.courses.length === lectures.length면 버튼 없앤다


export default LectureMove;
