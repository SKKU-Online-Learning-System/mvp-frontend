import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { fetchCourseDetailLectures } from 'apis/Courses/courseApi';
import { durationToHhMmSs } from 'utils/durationToHhMmSs';
import { useRouter } from 'next/router';

type ToggleType = {
	isCollapsed: boolean;
};

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

interface ILectureType {
	lectures: LectureInfo[];
	id: number;
	title: string;
}

export const LecturePicker: React.FC<Props> = ({ courseId }) => {
	const router = useRouter();

	const [lectureList, setLectureList] = useState<ILectureType[]>([]);
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
		router.push({ pathname: `/lectures/${lectureId}`, query: { courseId } });
	};

	useEffect(() => {
		if (courseId) _fetchCourseDetailLectures(courseId);
	}, []);

	return (
		<LecturePickerWrapper>
			{lectureList.length > 0 &&
				lectureList.map((elem: ILectureType, idx: number) => {
					return (
						<React.Fragment key={idx}>
							<LectureTitleHeader
								isCollapsed={isCollapsed[idx]}
								onClick={() => handleToggleCollapse(idx)}
							>
								{elem?.title}
							</LectureTitleHeader>
							<CollpaseBody isCollapsed={isCollapsed[idx]}>
								{elem?.lectures.map((item: LectureInfo, _idx: number) => (
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
	overflow-y: auto;
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
	max-height: ${(props) => (props.isCollapsed ? '100em' : '0')};
	transition: max-height 0.3s ease;
`;
