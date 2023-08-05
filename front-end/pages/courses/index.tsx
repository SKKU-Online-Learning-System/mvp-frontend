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
	return (
		<CourseListLayout categories={categories}>
			<div className="flex max-w-[1400px] p-8 mx-auto font-['Noto Sans KR']">
				<div className="flex ">
					<div className="w-full">
						<TopSearchbar />
						<LectureList />
					</div>
				</div>
			</div>
		</CourseListLayout>
	);
};

export async function getStaticProps() {
	const res = await courseAPI.fetchAllCourseCategories();
	return {
		props: {
			categories: res,
		},
	};
}

export default CoursesListPage;
