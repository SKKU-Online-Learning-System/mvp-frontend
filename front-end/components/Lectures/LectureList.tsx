import styled from 'styled-components';
import LectureCard from './LectureCard';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useState, useEffect } from 'react';
import { setLectures, setAllLectures } from 'feature/lecture/lectureSlice';
import axios from 'axios';
import { RootState } from 'app/store';
import { fetchLectureLists } from 'shared/apis/lectureApi';

const LectureList = () => {
	// local state로 저장
	const dispatch = useAppDispatch();
	const { clickedId, lectures } = useAppSelector(
		(state: RootState) => state.lecture,
	);
	// TODO : 검색후에 돌아왔을때, 다시 강의를 새로 불러오는 문제, 원래 페이지가 나와야함.
	useEffect(() => {
		if (clickedId === 0) {
			//전체보기
			fetchLectureLists(clickedId.toString())
				.then((res) => {
					dispatch(setLectures(res.data));
					dispatch(setAllLectures(res.data)); // 검색 결과 임시로 전체 저장
				})
				.catch((err) => console.log(err));
		} else if (clickedId !== -1) {
			// 카테고리 보기
			fetchLectureLists(clickedId.toString())
				.then((res) => {
					dispatch(setLectures(res.data));
					dispatch(setAllLectures(res.data)); // 검색 결과 임시로 전체 저장
				})
				.catch((err) => console.log(err));
		}
	}, [clickedId]);

	return (
		<LectureHeader>
			{lectures &&
				(lectures.length === 0 ? (
					<div>검색 결과가 없습니다!!!</div>
				) : (
					<LectureCard />
				))}
		</LectureHeader>
	);
};

const LectureHeader = styled.div`
	display: flex;
	flex-flow: row wrap;
`;
export default LectureList;
