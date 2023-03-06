import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';

import TopSearchbar from '@components/Courses/List/TopSearchbar';
import BreadCrumb from '@components/common/BreadCrumb';
import LectureList from '@components/Courses/List/LectureList';
import CourseCategory from '@components/Courses/List/CourseCategory';
import DifficultyList from '@components/Courses/List/DifficultyList';

// TODO. 검색을 했을경우 breadCrumb 카테고리가 맞지 않는 문제 해결
const CoursesListPage = (): ReactElement => {
	const [menu, setMenu] = useState<string[]>([]);

	const handleClickMenu = (menu: string[]) => {
		setMenu(menu);
	};

	return (
		<>
			{/* 화면 전체 */}
			<Wrapper>
				{/* 왼쪽 sidebar 전체 */}
				<SidebarLeft>
					<CourseCategory handleClickMenu={handleClickMenu} />
					<DifficultyList title={'난이도'} type={['초급', '중급', '고급']} />
				</SidebarLeft>

				{/* 오른쪽 전체, 그 안에서 위(검색창) 아래(강의 리스트) 나눔*/}
				<LectureBody>
					<TopSearchbar />
					<BreadCrumb
						category={'강좌LIST'}
						menu={menu}
						containerPadding={'2rem 0'}
					/>
					<LectureList />
				</LectureBody>
			</Wrapper>
		</>
	);
};

export default CoursesListPage;

const Wrapper = styled.div`
	width: 1440px;
	display: flex;
	flex-direction: row;
	margin: auto;
	font-family: Noto Sans KR;
`;
const SidebarLeft = styled.div`
	min-width: 300px;
	padding: 0 2rem;
`;
const LectureBody = styled.div`
	width: 100%;
`;
