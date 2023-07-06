import React from 'react';

type PropType = {
	description: string;
	category: string;
	numberOfLectures: number;
};

const CourseRegisterCardBody = ({
	description,
	category,
	numberOfLectures,
}: PropType) => {
	return (
		<div className="bg-[var(--color-Surface)] px-[7%] py-[4%] flex justify-between items-center">
			<div className="flex flex-col">
				<h5 className="mb-2 text-xl font-semibold">강의 소개</h5>
				<span className="">{description}</span>
			</div>
			<table>
				<tr>
					<td>카테고리</td>
					<td>{category}</td>
				</tr>
				<tr>
					<td>강좌수</td>
					<td>{numberOfLectures}</td>
				</tr>
			</table>
		</div>
	);
};

export default CourseRegisterCardBody;
