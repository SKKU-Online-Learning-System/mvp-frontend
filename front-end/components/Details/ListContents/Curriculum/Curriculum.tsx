import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axiosInstance from 'shared/apis';
const Curriculum = () => {
	const courceId = 1;
	const [lectureData, setLectureData] = useState([
		{ title: '', lectures: [{ title: '', duration: 0, id: '', teacher: '' }] },
	]);
	useEffect(() => {
		const getLecture = async () => {
			const response = await axiosInstance(
				'/courses/' + courceId + '/lectures',
			);
			const data = await response.data;
			setLectureData(data);
		};
		getLecture();
	}, []);
	function leadingZeros(n, digits) {
		var zero = '';
		n = n.toString();

		if (n.length < digits) {
			for (var i = 0; i < digits - n.length; i++) zero += '0';
		}
		return zero + n;
	}
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

			{lectureData.map((ele) => {
				return (
					<table key={ele.title + 'table'}>
						<thead>
							<tr key={ele.title + 'head'}>
								<th colSpan={5}>{ele.title}</th>
							</tr>
						</thead>
						<tbody>
							{ele.lectures.map((lecture) => {
								const hour =
									lecture.duration / 3600 < 1
										? ''
										: `${lecture.duration / 3600}:`;
								const duration = `${hour}${
									lecture.duration / 60
								}:${leadingZeros(lecture.duration % 60, 2)}`;
								return (
									<tr key={lecture.id + lecture.title}>
										<td>{`${lecture.id}강`}</td>
										<td>{lecture.title}</td>
										<td>{lecture.teacher || '강사이름'}</td>
										<td>{duration}</td>
										<td>{`버튼`}</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				);
			})}
		</Container>
	);
};

export default Curriculum;

const Container = styled.div`
	width: 80%;
	margin: auto;
	padding: 18px 23px;
	font-family: 'Noto Sans KR';
	& header {
		margin: 0 0 16px 18px;
	}
	& ul {
		margin: 0;
		padding: 0 0 0 15px;
	}
	& h3,
	h1,
	h2 {
		margin: 0;
		color: #393939;
	}
	& h2 {
		font-weight: bold;
	}
	& table {
		width: 100%;
		font-size: 0.8rem;
	}

	& table th {
		background-color: #e3e3e3;
		width: 100%;
		text-align: left;
		color: #5d5c5c;
		padding-left: 20px;
	}
	& tr {
		height: 48px;
		border: solid;
		color: #404040;
	}
	& td:first-child {
		text-align: center;
	}
	& td:nth-child(2) {
		font-weight: bold;
	}
	& td:last-child {
		text-align: right;
	}
`;
