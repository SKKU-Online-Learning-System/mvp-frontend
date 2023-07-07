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
		<div className="h-fit bg-[var(--color-Surface)] px-[7%] py-[4%] flex justify-between items-center">
			<div className="flex flex-col w-[65%]">
				<h5 className="mb-2 text-xl font-semibold">강좌 소개</h5>
				<span className="text-justify">{description}</span>
			</div>
			<table className="w-[30%] h-20">
				<tr>
					<td className="font-bold">카테고리</td>
					<td>{category}</td>
				</tr>
				<tr>
					<td className="font-bold">강좌수</td>
					<td>{numberOfLectures}</td>
				</tr>
			</table>
		</div>
	);
};

export default CourseRegisterCardBody;
