import Layout from '@components/Layout';
import SidebarLeft from '@components/Lectures/SidebarLeft';
import LectureBody from '@components/Lectures/LectureBody';

import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { addLectureType } from '../feature/lecture/lectureSlice';

import axios from 'axios';
import { RootState } from 'app/store';

//52.78.92.40:3000/api/category/parent
const LecturesPage = () => {
	const dispatch = useAppDispatch();
	const { lectureType } = useAppSelector((state: RootState) => state.lecture);

	useEffect(() => {
		if (lectureType.length === 0) {
			// axios
			// 	.post(GET_ALL_PARENT_CATEGORIES_API)
			// 	.then((res) => dispatch(addLectureType(res.data)))
			// 	.catch((err) => console.log(err));
		}
	}, []);

	return (
		<>
			{lectureType && (
				<Layout>
					{/* 화면 전체 */}
					<div
						style={{
							width: '100%',
							display: 'flex',
							flexDirection: 'row',
							padding: '2rem 0',
						}}
					>
						{/* 왼쪽 sidebar 전체 */}
						<SidebarLeft />
						{/* 오른쪽 전체, 그 안에서 위(검색창) 아래(강의 리스트) 나눔*/}
						<LectureBody />
					</div>
				</Layout>
			)}
		</>
	);
};

export default LecturesPage;
