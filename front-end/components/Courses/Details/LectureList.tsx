import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axiosInstance from 'apis';
import LectureListSection from './LectureListSection';
import { useAppSelector } from 'store/app/hooks';
import { RootState } from 'store/app/store';

const LectureList = ({ courseId }: any) => {
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
				return <LectureListSection key={section.title} section={section} />;
			})}
		</Container>
	);
};

export default LectureList;

const Container = styled.div`
	width: 80%;
	margin: auto;
	padding: 18px 23px;
	font-family: 'Noto Sans KR';

	h2 {
		margin: 0;
		color: #393939;
		font-weight: bold;
	}
`;
