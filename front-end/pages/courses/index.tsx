import React, { useState } from 'react';

import CourseCategory from '@components/Courses/List/CourseCategory';
import DifficultyList from '@components/Courses/List/DifficultyList';
import TopSearchbar from '@components/Courses/List/TopSearchbar';
import LectureList from '@components/Courses/List/LectureList';
import BreadCrumb from '@components/common/BreadCrumb';

// TODO. 검색을 했을경우 breadCrumb 카테고리가 맞지 않는 문제 해결
const CoursesListPage = () => {
	const [menu, setMenu] = useState<string[]>([]);

	const handleClickMenu = (menu: string[]) => {
		setMenu(menu);
	};

	return (
		<>
			{/* 화면 전체 */}
			<div className='flex m-auto w-[1440px] font-["Noto Sans KR"]'>
				{/* 왼쪽 sidebar 전체 */}
				<div className="min-w-[300px] p-16">
					<div>
						<CourseCategory handleClickMenu={handleClickMenu} />
						<DifficultyList title={'난이도'} type={['초급', '중급', '고급']} />
					</div>
				</div>

				{/* 오른쪽 전체, 그 안에서 위(검색창) 아래(강의 리스트) 나눔*/}
				<div className="w-full">
					<TopSearchbar />
					<BreadCrumb
						category={'강좌LIST'}
						menu={menu}
						containerPadding={'2rem 0'}
					/>
					<LectureList />
				</div>
			</div>
		</>
	);
};

export default CoursesListPage;
