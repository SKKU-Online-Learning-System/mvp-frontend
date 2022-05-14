import React from 'react';
import styled from 'styled-components';
interface DataProps {
	data: any;
}
const Progress = ({ data }: DataProps) => {
	const HOUR = Math.floor(data.runTime / 60);
	const MIN = data.runTime % 60;
	return (
		<Container>
			<div style={{ color: 'white', fontSize: '0.5rem', padding: '0px' }}>
				PROGRESS IN LEARNING
			</div>
			<div style={{ color: 'white', fontSize: '1.2rem', fontWeight: 'bold' }}>
				나의 학습 상황
			</div>
			<div style={{ display: 'flex' }}>
				<CompleteCourse>
					{data.completeCourse}/{data.totalCourse}
				</CompleteCourse>
				<CompleteCourse>
					{HOUR}h{MIN}m
				</CompleteCourse>
				<CompleteCourse>
					{data.completeCourse}/{data.totalCourse}
				</CompleteCourse>
			</div>
		</Container>
	);
};

export default Progress;

const Container = styled.div`
	background-color: #353535;
	width: 500px;
	height: 200px;
	padding: 20px;
`;
const CompleteCourse = styled.div`
	color: white;
	margin: 20px;
`;
