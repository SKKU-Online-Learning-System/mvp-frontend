import React from 'react';

import CardHeader from './CardHeader';
import CardBody from './CardBody';
import { CourseInfo } from 'types/Admin/Index';

type PropsType = {
	course: CourseInfo;
};

const CourseRegisterCard = ({ course }: PropsType) => {
	return (
		<div className="w-1/2 mb-[4%]">
			<CardHeader title={course.title} instructor={course.instructor} />
			<CardBody
				description={course.description}
				category={course.category1}
				numberOfLectures={course.lectureCnt}
			/>
		</div>
	);
};

export default CourseRegisterCard;
