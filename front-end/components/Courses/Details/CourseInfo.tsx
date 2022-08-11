import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from 'store/app/hooks';
import { RootState } from 'store/app/store';

const CourseInfo = () => {
	const course = useAppSelector(
		(state: RootState) => state.courseDetail.course,
	);

	return (
		<Container>
			<h4>{`${course.category1} > ${course.category2}`}</h4>
			<h2>{course.title}</h2>
			<h4>{course.description}</h4>
			<p>{`강사: ${course.instructor}`}</p>
			<div>
				{course.hashtag.map((ele) => {
					return <div key={ele} className="hashtag">{`#${ele}`}</div>;
				})}
			</div>
		</Container>
	);
};

export default CourseInfo;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	color: white;
	padding: 0 50px;
	& h1,
	h2,
	h3,
	h4 p {
		margin: 5px;
	}
	.hashtag-container {
	}
	.hashtag {
		display: inline;
		background-color: #f0f0f0;
		color: #696969;
		width: 100%;
		padding: 0 0.8rem;
		border-radius: 3rem;
		margin: 0.2rem;
		font-weight: bold;
	}
`;
