import styled from 'styled-components';
import LectureCard from './LectureCard';

import API from 'apis/Courses/courseApi';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { AxiosResponse } from 'axios';
import { useRouter } from 'next/router';
import { ICourseInfo } from 'types/Course/index';

const LectureList = () => {
	const dispatch = useDispatch();
	const router = useRouter();
	const { keyword, category2sId, difficulty } = router.query;
	const [courseLists, setCourseLists] = useState<ICourseInfo[]>([]);

	// TODO : 검색후에 돌아왔을때, 다시 강의를 새로 불러오는 문제, 원래 페이지가 나와야함.
	useEffect(() => {
		if (!router.isReady) return;
		// 검색어 없는경우
		if (!keyword && !category2sId && !difficulty) {
			API.fetchCourseLists()
				.then((res: AxiosResponse) => {
					setCourseLists(res.data.courses);
				})
				.catch((error: unknown) => console.warn(error));

			return;
		}
		// 검색 or 난이도 버튼 누른경우
		if (keyword || difficulty) {
			const _keyword = (keyword ?? '') as string;
			const _difficulty = (difficulty ?? undefined) as string | undefined;

			API.fetchSearchedCourses(_keyword, _difficulty)
				.then((res: AxiosResponse) => {
					setCourseLists(res.data.courses);
				})
				.catch((error: unknown) => console.warn(error));

			return;
		}
		// 카테고리 메뉴에서 클릭한경우
		if (category2sId) {
			API.fetchCourseLists(category2sId as string)
				.then((res: AxiosResponse) => {
					setCourseLists(res.data.courses);
				})
				.catch((error: unknown) => console.warn(error));

			return;
		}
	}, [router.isReady, keyword, category2sId, difficulty]);

	return (
		<Wrapper>
			{courseLists?.length ? (
				courseLists.map((course, index) => (
					<LectureCard course={course} key={index} />
				))
			) : (
				<div>검색 결과가 없습니다!!!</div>
			)}
		</Wrapper>
	);
};
const Wrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	row-gap: 1rem;
`;

export default LectureList;
