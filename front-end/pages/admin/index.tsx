// import React, { ReactElement, useState } from 'react';

// import TopSearchbar from '@components/Courses/List/TopSearchbar';
// import BreadCrumb from '@components/common/BreadCrumb';
// import LectureList from '@components/Courses/List/LectureList';
// import CourseCategory from '@components/Courses/List/CourseCategory';
// import DifficultyList from '@components/Courses/List/DifficultyList';

// // TODO. 검색을 했을경우 breadCrumb 카테고리가 맞지 않는 문제 해결
// const CoursesListPage = (): ReactElement => {
// 	const [menu, setMenu] = useState<string[]>([]);

// 	const handleClickMenu = (menu: string[]) => {
// 		setMenu(menu);
// 	};

// 	return (
// 		<>
// 			<div className="w-[1440px] flex flex-row m-auto font-['Noto Sans KR']">
// 				<div className="bg-[var(--color-green-700)] min-w-[300px] p-16">
// 					<div className="">
// 						<CourseCategory handleClickMenu={handleClickMenu} />
// 						<DifficultyList title={'난이도'} type={['초급', '중급', '고급']} />
// 					</div>
// 				</div>

// 				<div className="w-full">
// 					<TopSearchbar />
// 					<BreadCrumb
// 						category={'강좌LIST'}
// 						menu={menu}
// 						containerPadding={'2rem 0'}
// 					/>
// 					<LectureList />
// 				</div>
// 			</div>
// 		</>
// 	);
// };

// export default CoursesListPage;

import React, { ReactElement } from 'react';
import { useRouter } from 'next/router';

const AdminIndex = (): ReactElement => {
	const router = useRouter();

	return <></>;
};

export default AdminIndex;
