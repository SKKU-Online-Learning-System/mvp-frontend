import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import API from 'apis/Courses/courseApi';
import { durationToHhMmSs } from 'utils/durationToHhMmSs';
import { useRouter } from 'next/router';
import { ILectureList } from 'types/Lecture/index';

type ToggleType = {
	isCollapsed: boolean;
};

interface ILecturePicker {
	courseId?: string;
}

export const LecturePicker = ({ courseId }: ILecturePicker) => {
	const router = useRouter();

	const [lectureList, setLectureList] = useState<ILectureList[]>([]);
	const [isCollapsed, setIsCollapsed] = useState<boolean[]>([]); // true면 펼쳐짐, false면 닫힘.

	const _fetchCourseDetailLectures = async (_courseId: string) => {
		const res = await API.fetchCourseDetailLectures(_courseId);
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
		router.push({ pathname: `/lectures/${lectureId}`, query: { courseId } });
	};

	useEffect(() => {
		if (courseId) _fetchCourseDetailLectures(courseId);
	}, []);

	return (
		<LecturePickerWrapper>
			{lectureList.length > 0 &&
				lectureList.map((elem, idx) => {
					return (
						<React.Fragment key={idx}>
							<LectureTitleHeader
								isCollapsed={isCollapsed[idx]}
								onClick={() => handleToggleCollapse(idx)}
							>
								{elem?.title}
							</LectureTitleHeader>
							<CollpaseBody isCollapsed={isCollapsed[idx]}>
								{elem?.lectures.map((item, _idx: number) => (
									<LectureHeader
										key={_idx}
										onClick={() => handleMoveToAnotherLecture(item.id)}
									>
										<li>{item.title}</li>
										<li>{durationToHhMmSs(item.duration)}</li>
									</LectureHeader>
								))}
							</CollpaseBody>
						</React.Fragment>
					);
				})}
		</LecturePickerWrapper>
	);
};

const LecturePickerWrapper = styled.div`
	border: 1px solid #e7e9eb;
	height: 768px;
	overflow-y: scroll;
	min-width: 300px;
`;

const LectureTitleHeader = styled.div<ToggleType>`
	cursor: pointer;
	display: flex;
	min-width: 200px;
	padding: 10px;
	justify-content: space-between;
	background-color: #e7e9eb;
	color: #595959;

	&::after {
		content: '';
		display: inline-block;
		border: solid #595959;
		border-width: 0 2px 2px 0;
		padding: 2.5px;
		margin-bottom: 10px;
		margin-top: 10px;
		transform: ${(props) =>
			props.isCollapsed ? 'rotate(45deg)' : 'rotate(-45deg)'};
		transition: transform 0.2s;
	}
`;

const LectureHeader = styled.div`
	cursor: pointer;
	display: flex;
	justify-content: space-between;
	column-gap: 16px;
	row-gap: 8px;
	list-style: none;
	padding: 10px;

	& :hover {
		background-color: #efefef;
	}
`;

const CollpaseBody = styled.div<ToggleType>`
	// transition 걸기위해서 필요
	overflow-y: hidden;
	max-height: ${(props) => (props.isCollapsed ? '4500px' : '0')};
	// row 1개당 45px기준, 목록 100개.
	transition: max-height 0.3s ease;
`;
