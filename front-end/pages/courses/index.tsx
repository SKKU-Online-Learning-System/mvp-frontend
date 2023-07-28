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
			{/* <div className='flex m-auto w-[1440px] font-["Noto Sans KR"]'> */}
			<div className="flex flex-1 max-w-[1200px] p-8 my-0 mx-auto font-['Noto Sans KR']">
				<div className="flex ">
					{/* 왼쪽 sidebar 전체 */}
					<aside className="w-1/6 ">
						<nav>
							<CourseCategory handleClickMenu={handleClickMenu} />
						</nav>
					</aside>

					{/* 오른쪽 전체, 그 안에서 위(검색창) 아래(강의 리스트) 나눔*/}
					<div className="w-full">
						<div className="px-6 mb-5 ">
							<BreadCrumb
								category={'강좌LIST'}
								menu={menu}
								containerPadding={'2rem 0'}
							/>
						</div>
						<TopSearchbar />

						{/* <DifficultyList type={['초급', '중급', '고급']} /> */}
						<LectureList />
					</div>
				</div>
			</div>
		</>
	);
};

export default CoursesListPage;
