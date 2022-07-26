import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
const MainText = () => {
	const [courseData, setCourseData] = useState({
		title: '',
		description: '',
		instructor: '',
	});
	useEffect(() => {
		const courceId = 1;
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
			<h1>{courseData.title}</h1>
			<h3>{courseData.description}</h3>
			<p>{`강사: ${courseData.instructor}`}</p>
		</Container>
	);
};

export default MainText;

const Container = styled.div`
	display: flex;
	width: 40%;
	flex-direction: column;
	justify-content: center;
	color: white;
	padding-left: 50px;
	& h1,
	h2,
	h3,
	p {
		margin: 5px;
	}
`;
