import styled from 'styled-components';
import LectureCard from './LectureCard';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { RootState } from 'app/store';
const LectureList = () => {
	// local state로 저장
	const dispatch = useAppDispatch();
	const { clickedId } = useAppSelector((state: RootState) => state.lecture);
	const [lectureList, setLectureList] = useState<string[]>();

	useEffect(() => {
		if (clickedId === 0) {
			axios
				.post('http://52.78.92.40:3000/api/lectures')
				.then((res) => setLectureList(res.data.results))
				.catch((err) => console.log(err));
		} else {
			axios
				.post('http://52.78.92.40:3000/api/findLectures/category/parent', {
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
	flex-flow: row wrap;
`;
export default LectureList;
