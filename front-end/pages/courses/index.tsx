import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { RootState } from 'store/app/store';
import { useAppDispatch, useAppSelector } from 'store/app/hooks';
import { addLectureType } from 'store/feature/lecture/lectureSlice';
import { AxiosResponse } from 'axios';

import { fetchAllCourseCategories } from 'apis/Courses/courseApi';
import TopSearchbar from '@components/Courses/List/TopSearchbar';
import BreadCrumb from '@components/common/BreadCrumb';
import LectureList from '@components/Courses/List/LectureList';
import ContentMenu from '@components/Courses/List/ContentMenu';
import SelectorCard from '@components/Courses/List/SelectorCard';

const CoursesListPage = () => {
	const dispatch = useAppDispatch();
	const { lectureType, menu } = useAppSelector(
		(state: RootState) => state.lecture,
	);
	const [checkList, setCheckList] = useState<boolean[]>([false, false, false]);

	useEffect(() => {
		if (lectureType.length === 0) {
			fetchAllCourseCategories()
				.then((res: AxiosResponse) => dispatch(addLectureType(res.data)))
				.catch((err: unknown) => console.log(err));
		}
	}, []);

	return (
		<>
			{lectureType && (
				<>
					{/* 화면 전체 */}
					<Wrapper>
						{/* 왼쪽 sidebar 전체 */}
						<SidebarLeft>
							<ContentMenu />
							<SelectorCard
								checkList={checkList}
								setCheckList={setCheckList}
								title={'난이도'}
								type={['입문', '초급', '중급이상']}
							/>
						</SidebarLeft>
						{/* 오른쪽 전체, 그 안에서 위(검색창) 아래(강의 리스트) 나눔*/}

						<LectureBody>
							{/* 상단 검색바 */}
							<TopSearchbar checkList={checkList} />
							{/* 전체| 크리에이티브 부분 */}
							<BreadCrumb
								category={'강좌LIST'}
								menu={menu}
								containerPadding={'2rem 0'}
							/>
							{/* TAG */}
							{/* 강의 보여주는 부분 */}
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
