import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
const DUMMY_DATA = [
	{ header: '스프링부트 이해와 실전' },
	{
		id: '1강',
		title: '스프링부트란? ',
		teacher: '강사 홍길동',
		time: '17:23',
	},
	{
		id: '2강',
		title: '스프링부트 개발 환경 ',
		teacher: '강사 홍길동',
		time: '17:23',
	},
	{
		id: '3강',
		title: '스프링부트 개발 입문1 ',
		teacher: '강사 홍길동',
		time: '17:23',
	},
	{
		id: '4강',
		title: '스프링부트 개발 입문2 ',
		teacher: '강사 홍길동',
		time: '17:23',
	},
	{
		id: '5강',
		title: '스프링부트 실전 활용 ',
		teacher: '강사 홍길동',
		time: '17:23',
	},
	{
		id: '6강',
		title: '스프링부트 실전 심화',
		teacher: '강사 홍길동',
		time: '17:23',
	},
	{ header: '스프링부트 이해와 실전' },
	{
		id: '1강',
		title: '스프링부트란? ',
		teacher: '강사 홍길동',
		time: '17:23',
	},
	{
		id: '2강',
		title: '스프링부트 개발 환경 ',
		teacher: '강사 홍길동',
		time: '17:23',
	},
	{
		id: '3강',
		title: '스프링부트 개발 입문1 ',
		teacher: '강사 홍길동',
		time: '17:23',
	},
	{
		id: '4강',
		title: '스프링부트 개발 입문2 ',
		teacher: '강사 홍길동',
		time: '17:23',
	},
	{
		id: '5강',
		title: '스프링부트 실전 활용 ',
		teacher: '강사 홍길동',
		time: '17:23',
	},
	{
		id: '6강',
		title: '스프링부트 실전 심화',
		teacher: '강사 홍길동',
		time: '17:23',
	},
	{ header: '스프링부트 이해와 실전' },
	{
		id: '1강',
		title: '스프링부트란? ',
		teacher: '강사 홍길동',
		time: '17:23',
	},
	{
		id: '2강',
		title: '스프링부트 개발 환경 ',
		teacher: '강사 홍길동',
		time: '17:23',
	},
	{
		id: '3강',
		title: '스프링부트 개발 입문1 ',
		teacher: '강사 홍길동',
		time: '17:23',
	},
	{
		id: '4강',
		title: '스프링부트 개발 입문2 ',
		teacher: '강사 홍길동',
		time: '17:23',
	},
	{
		id: '5강',
		title: '스프링부트 실전 활용 ',
		teacher: '강사 홍길동',
		time: '17:23',
	},
	{
		id: '6강',
		title: '스프링부트 실전 심화',
		teacher: '강사 홍길동',
		time: '17:23',
	},
];
const Curriculum = () => {
	const courceId = 1;
	const [lectureData, setLectureData] = useState([
		{ title: '', lectures: [{ title: '', duration: 0, id: '', teacher: '' }] },
	]);
	useEffect(() => {
		const getLecture = async () => {
			const response = await axios.get(
				'http://3.35.134.196:3000/courses/' + courceId + '/lectures',
			);
			const data = await response.data;
			console.log(data);
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
			<table>
				{lectureData.map((ele) => {
					return (
						<>
							<thead>
								<tr>
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
										<tr>
											<td>{`${lecture.id}강`}</td>
											<td>{lecture.title}</td>
											<td>{lecture.teacher || '강사이름'}</td>
											<td>{duration}</td>
											<td>{`버튼`}</td>
										</tr>
									);
								})}
							</tbody>
						</>
					);
				})}
			</table>
		</Container>
	);
};

export default Curriculum;

const Container = styled.div`
	width: 1197px;
	padding: 18px 23px;
	font-family: 'Noto Sans KR';
	& header {
		margin: 0 0 16px 18px;
	}
	& li {
		border-bottom: solid;
		border-color: #dfdfdf;
		color: #393939;
		font-size: 0.95rem;
		margin: 3px 0;
	}
	& p {
		color: #bcbcbc;
		font-size: 0.8rem;
		font-weight: bold;
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
