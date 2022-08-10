import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from 'store/app/hooks';
import { RootState } from 'store/app/store';
import LectureListSection from './LectureListSection';

const LectureList = () => {
	const lectures = useAppSelector(
		(state: RootState) => state.courseDetail.lectures,
	);

	return (
		<Container>
			<header>
				<div
					style={{ fontSize: '0.5rem', color: '#c2c1c1', fontWeight: 'bold' }}
				>
					CURRICULUM
				</div>
				<h2>강의 커리큘럼</h2>
			</header>

			{lectures.map((section) => {
				return <LectureListSection key={section.id} section={section} />;
			})}
		</Container>
	);
};

export default LectureList;

const Container = styled.div`
	width: 80%;
	margin: auto;
	padding: 25px;
	font-family: 'Noto Sans KR';

	h2 {
		margin: 0 0 5px 0;
		color: #393939;
		font-weight: bold;
	}
`;
