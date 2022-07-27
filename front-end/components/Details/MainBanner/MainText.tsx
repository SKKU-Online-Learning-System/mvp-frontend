import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axiosInstance from 'apis';
const MainText = () => {
	const [courseData, setCourseData] = useState({
		title: '',
		description: '',
		instructor: '',
		category1: '',
		category2: '',
		hashtag: [],
	});
	useEffect(() => {
		const courceId = 1;
		const getCourse = async () => {
			const response = await axiosInstance('/courses/' + courceId);
			const data = await response.data;
			setCourseData(data);
		};
		getCourse();
	}, []);

	return (
		<Container>
			<h4>{`${courseData.category1} > ${courseData.category2}`}</h4>
			<h2>{courseData.title}</h2>
			<h4>{courseData.description}</h4>
			<p>{`강사: ${courseData.instructor}`}</p>
			<div>
				{courseData.hashtag.map((ele) => {
					return <div key={ele} className="hashtag">{`#${ele}`}</div>;
				})}
			</div>
		</Container>
	);
};

export default MainText;

const Container = styled.div`
	display: flex;
	width: 50rem;
	flex-direction: column;
	justify-content: center;
	color: white;
	padding-left: 50px;
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
