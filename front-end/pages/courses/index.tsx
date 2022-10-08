import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { AxiosResponse } from 'axios';
import { selectCourseCategory } from 'store/feature/course/courseSelector';
import { courseActions } from 'store/feature/course/courseSlice';
import API from 'apis/Courses/courseApi';

import TopSearchbar from '@components/Courses/List/TopSearchbar';
import BreadCrumb from '@components/common/BreadCrumb';
import LectureList from '@components/Courses/List/LectureList';
import CourseCategory from '@components/Courses/List/CourseCategory';
import DifficultyList from '@components/Courses/List/DifficultyList';

const CoursesListPage = () => {
	const dispatch = useDispatch();
	const courseCategory = useSelector(selectCourseCategory);
	const [menu, setMenu] = useState<string[]>([]);

	useEffect(() => {
		if (!courseCategory.length) {
			API.fetchAllCourseCategories()
				.then((res: AxiosResponse) =>
					dispatch(
						courseActions.setCourseCategory([
							{ id: 0, name: '전체보기' },
							...res.data,
						]),
					),
				)
				.catch((err: unknown) => console.log(err));
		}
	}, []);

	return (
		<>
			{courseCategory && (
				<>
					{/* 화면 전체 */}
					<Wrapper>
						{/* 왼쪽 sidebar 전체 */}
						<SidebarLeft>
							<CourseCategory setMenu={setMenu} />
							<DifficultyList
								title={'난이도'}
								type={['입문', '초급', '중급이상']}
							/>
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
			)}
		</>
	);
};

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

export default CoursesListPage;
