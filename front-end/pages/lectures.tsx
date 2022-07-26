import Layout from '@components/Layout';
import TopSearchbar from '@components/Lectures/TopSearchbar';
import BreadCrumb from '@components/Lectures/BreadCrumb';
import LectureTag from '@components/Lectures/LectureTag';
import LectureList from '@components/Lectures/LectureList';
import LectureMove from '@components/Lectures/LectureMove';

import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { addLectureType } from '../feature/lecture/lectureSlice';
import { fetchAllLectureCategories } from 'shared/apis/lectureApi';
import ContentMenu from '@components/Lectures/ContentMenu';
import { RootState } from 'app/store';
import styled from 'styled-components';
import SelectorCard from '@components/Lectures/SelectorCard';

const LecturesPage = () => {
	const dispatch = useAppDispatch();
	const { lectureType } = useAppSelector((state: RootState) => state.lecture);
	const [checkList, setCheckList] = useState<boolean[]>([false, false, false]);

	useEffect(() => {
		if (lectureType.length === 0) {
			fetchAllLectureCategories()
				.then((res: any) => dispatch(addLectureType(res.data)))
				.catch((err: any) => console.log(err));
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
							<SelectCardWrapper>
								<SelectorCard
									checkList={checkList}
									setCheckList={setCheckList}
									title={'난이도'}
									type={['입문', '초급', '중급이상']}
									
								/>
							</SelectCardWrapper>
						</SidebarLeft>
						{/* 오른쪽 전체, 그 안에서 위(검색창) 아래(강의 리스트) 나눔*/}

						<LectureBody>
							{/* 상단 검색바 */}
							<TopSearchbar checkList={checkList} />
							{/* 전체| 크리에이티브 부분 */}
							<BreadCrumb />
							{/* TAG */}
							<LectureTag />
							{/* 강의 보여주는 부분 */}
							<LectureList />
							<LectureMove />
						</LectureBody>
					</Wrapper>
				</>
			)}
		</>
	);
};

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	padding: 2rem 0;
`;

const SelectCardWrapper = styled.div`
	padding: 0 3vw;
`;

const SidebarLeft = styled.div`
	flex: 2;
`;

const LectureBody = styled.div`
	flex: 8;
`;

export default LecturesPage;
