import React, { useState } from 'react';

import CourseCategory from '@components/Courses/List/CourseCategory';
import TopSearchbar from '@components/Courses/List/TopSearchbar';
import LectureList from '@components/Courses/List/LectureList';

// TODO. 검색을 했을경우 breadCrumb 카테고리가 맞지 않는 문제 해결
const CoursesListPage = () => {
	const [menu, setMenu] = useState<string[]>([]);

	const handleClickMenu = (menu: string[]) => {
		setMenu(menu);
	};

	return (
		<>
			{/* <div className="min-h-full">
				<h2 className="select-none w-full bg-[var(--color-green-700)] p-8 font-['Gugi'] text-2xl text-white border-b-2 border-solid border-[var(--color-Background)]">
					{'온라인명륜당 > 강좌 List'}
				</h2>
				<div className="flex min-h-screen">
					<div className="w-1/6 min-h-full bg-[var(--color-Primary)] min-w-[280px]">
						<ul className="flex flex-col items-start justify-start h-full p-12 pr-0">
							<li className="relative w-full">
								<button id="compose">편성</button>
							</li>
						</ul>
					</div>
				</div>
			</div> */}
			<div className="flex max-w-[1400px] p-8 mx-auto font-['Noto Sans KR']">
				<div className="flex ">
					<nav className="w-1/6">
						<CourseCategory handleClickMenu={handleClickMenu} />
					</nav>
					<div className="w-full">
						<div className="px-6 mb-5 "></div>
						<TopSearchbar />
						<LectureList />
					</div>
				</div>
			</div>
		</>
	);
};

export default CoursesListPage;
