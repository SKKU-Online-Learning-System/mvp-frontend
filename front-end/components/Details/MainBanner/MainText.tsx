import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
const MainText = () => {
	const [courseData, setCourseData] = useState({
		title: '',
		description: '',
		instructor: '',
		category1: '',
		category2: '',
	});
	useEffect(() => {
		const courceId = 2;
		const getCourse = async () => {
			const response = await axios.get(
				'http://3.35.134.196:3000/courses/' + courceId,
			);
			const data = await response.data;
			setCourseData(data);
			console.log(data);
		};
		getCourse();
	}, []);

	return (
		<Container>
			<h4>{`${courseData.category1} > ${courseData.category2}`}</h4>
			<h2>{courseData.title}</h2>
			<h4>{courseData.description}</h4>
			<p>{`강사: ${courseData.instructor}`}</p>
			<div className="hashtag-container">
				<div className="hashtag">#asdf</div>
				<div className="hashtag">asdf</div>
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
		display: flex;
	}
	.hashtag {
		background-color: #f0f0f0;
		color: #696969;
		width: 100%;
		padding-left: 0.5rem;
		border-radius: 3rem;
		margin: 0.2rem;
		font-weight: bold;
	}
`;
