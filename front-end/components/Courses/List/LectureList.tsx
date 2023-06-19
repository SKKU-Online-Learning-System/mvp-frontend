import React from 'react';
import { useRouter } from 'next/router';

import LectureCard from './LectureCard';
import { useCourseListFetch } from 'query/hooks/CourseList';

type RouterQueryString = {
	keyword: string;
	category2sId: string;
	difficulty: string;
};

const LectureList = () => {
	const router = useRouter();
	const { keyword, category2sId, difficulty } =
		router.query as RouterQueryString;
	const { data: courseList, isLoading } = useCourseListFetch({
		keyword,
		category2sId,
		difficulty,
	});

	if (isLoading) return <div>로딩중입니다...</div>;

	return (
		<div className="grid grid-cols-4 gap-y-4">
			{!!courseList?.length ? (
				courseList?.map((course, index) => (
					<LectureCard course={course} key={index} />
				))
			) : (
				<div>검색 결과가 없습니다!!!</div>
			)}
		</div>
	);
};

export default LectureList;
