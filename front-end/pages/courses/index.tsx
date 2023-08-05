import React from 'react';

import CourseListLayout from '@components/Courses/List/CourseListLayout';
import TopSearchbar from '@components/Courses/List/TopSearchbar';
import LectureList from '@components/Courses/List/LectureList';
import courseAPI from '../../apis/Courses/courseApi';
import { ICourseCategory } from 'types/Course';

type PropsType = {
	categories: ICourseCategory[];
};

// TODO. 검색을 했을경우 breadCrumb 카테고리가 맞지 않는 문제 해결
const CoursesListPage = ({ categories }: PropsType) => {
	const categoryList = [{ id: 0, name: '전체보기' }, ...categories];

	return (
		<CourseListLayout categories={categoryList}>
			<div className="flex justify-center items-center bg-white max-w-[1400px] mx-auto p-10 pb-24 font-['Noto Sans KR']">
				<div className="w-full">
					<TopSearchbar />
					<LectureList />
				</div>
			</div>
		</CourseListLayout>
	);
};

export async function getStaticProps() {
	const categories = await courseAPI.fetchAllCourseCategories();
	return { props: { categories } };
}

export default CoursesListPage;
