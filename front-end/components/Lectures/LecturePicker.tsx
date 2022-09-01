import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { fetchCourseDetailLectures } from 'apis/Courses/courseApi';
import { durationToHhMmSs } from 'utils/durationToHhMmSs';
import { useRouter } from 'next/router';

type Props = {
	courseId?: string;
};

type LectureInfo = {
	createdAt: string;
	duration: number;
	filename: string;
	id: number;
	title: string;
};

type LectureType = {
	lectures: LectureInfo[];
	id: number;
	title: string;
};

export const LecturePicker: React.FC<Props> = ({ courseId }) => {
	const router = useRouter();
	// courseId 받아야함.
	const [lectureList, setLectureList] = useState<LectureType[]>([]);
	const [isCollapsed, setIsCollapsed] = useState<boolean[]>([]); // true면 펼쳐짐, false면 닫힘.

	const _fetchCourseDetailLectures = async (_courseId: string) => {
		const res = await fetchCourseDetailLectures(_courseId);
		setLectureList(res.data);
		setIsCollapsed(new Array(res.data.length).fill(true));
	};

	const handleToggleCollapse = (index: number) => {
		const newArray = isCollapsed.map((bool, idx) =>
			index === idx ? !bool : bool,
		);

		setIsCollapsed(newArray);
	};

	const handleMoveToAnotherLecture = (lectureId: number) => {
		router.push(`/lectures/${lectureId}`);
	};

	useEffect(() => {
		if (courseId) _fetchCourseDetailLectures(courseId);
	}, []);

	return (
		<div
			style={{
				border: '1px solid black',
				height: '768px',
				minWidth: '300px',
			}}
		>
			{lectureList.length > 0 &&
				lectureList.map((elem: LectureType, idx: number) => {
					return (
						<React.Fragment key={idx}>
							<LectureTitleHeader onClick={() => handleToggleCollapse(idx)}>
								{elem?.title}
							</LectureTitleHeader>
							{isCollapsed[idx] &&
								elem?.lectures.map((item: LectureInfo, _idx: number) => (
									<LectureHeader
										key={_idx}
										onClick={() => handleMoveToAnotherLecture(item.id)}
									>
										<li>{item.title}</li>
										<li>{durationToHhMmSs(item.duration)}</li>
									</LectureHeader>
								))}
						</React.Fragment>
					);
				})}
		</div>
	);
};
/*
1. 토글버튼 달기 (o)
2. props로 넘겨서 contents 바꾸기
3. 클릭시에 router.push하기.

http://localhost:3000/lectures/3 으로 바로 접근하는경우, 문제가 생김. CourseId를 몰라서 오른쪽에 Picker 내용을 불러올 수 없음.
*/

const LectureTitleHeader = styled.ul`
	display: flex;
	justify-content: space-between;
	padding: 0;
	margin: 0;
	background-color: grey;
	&:hover {
		opacity: 0.7;
	}

	&::after {
		content: ' > ';
		padding-right: 8px;
	}
`;

const LectureHeader = styled.div`
	display: flex;
	justify-content: space-between;
	column-gap: 16px;
	row-gap: 8px;
	list-style: none;
	& :hover {
		background-color: rgba(0, 0, 0, 0.3);
	}
`;
