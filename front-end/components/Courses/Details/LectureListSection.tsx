import React from 'react';
import { useAppDispatch } from 'store/app/hooks';
import { toggleSection } from 'store/feature/course/courseDetailSlice';
import styled from 'styled-components';
import LectureListItem from './LectureListItem';

const LectureListSection = ({ section }: any) => {
	const dispatch = useAppDispatch();

	return (
		<>
			<SectionBox
				onClick={(e: React.MouseEvent<HTMLElement>) => {
					dispatch(toggleSection(section.id));
				}}
			>
				{section.title}
			</SectionBox>
			<LecturesBox show={section.show}>
				{section.lectures.map((lecture: any, i: number) => {
					return (
						<LectureListItem key={lecture.id} lecture={lecture} index={i} />
					);
				})}
			</LecturesBox>
		</>
	);
};

export default LectureListSection;

const SectionBox = styled.div`
	display: flex;
	background-color: #f0f0f0;
	height: 50px;
	margin: 15px 0 5px 0;
	padding-left: 1.5rem;
	color: #5d5c5c;
	font-size: 18px;
	font-weight: bold;
	align-items: center;
`;

const LecturesBox = styled.div<{ show: boolean }>`
	${(props) => {
		if (props.show) return '';
		else return 'display: none;';
	}}
`;
