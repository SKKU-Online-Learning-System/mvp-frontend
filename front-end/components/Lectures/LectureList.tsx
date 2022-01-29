import styled from 'styled-components';
import LectureCard from './LectureCard';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { RootState } from 'app/store';

import { BASE_URL } from 'shared/constants/apis';
const LectureList = () => {
	// local state로 저장
	const dispatch = useAppDispatch();
	const { clickedId } = useAppSelector((state: RootState) => state.lecture);
	const [lectureList, setLectureList] = useState<string[]>();

	useEffect(() => {
		if (clickedId === 0) {
			// 전체보기
			axios
				.post(`${BASE_URL}/api/lectures`)
				.then((res) => setLectureList(res.data.results))
				.catch((err) => console.log(err));
		} else {
			// 카테고리 보기
			axios
				.post(`${BASE_URL}/api/findLectures/category/parent`, {
					parentCategoryId: clickedId,
				})
				.then((res) => setLectureList(res.data))
				.catch((err) => console.log(err));
		}
	}, [clickedId]);

	return (
		<LectureHeader>
			{lectureList && <LectureCard lectureInfo={lectureList} />}
		</LectureHeader>
	);
};

const LectureHeader = styled.div`
	display: flex;
	cursor: pointer;
	flex-flow: row wrap;
`;
export default LectureList;
