import React, { useState } from 'react';

import adminAPI from '../../../apis/Admin/adminAPI';
import { CourseInfo } from 'types/Admin/Index';
import CardHeader from './CardHeader';
import CardBody from './CardBody';

type PropsType = {
	course: CourseInfo;
};

const CourseRegisterCard = ({ course }: PropsType) => {
	const [courseInfo, setCourseInfo] = useState<CourseInfo>(course);

	const handleOperationChange = async () => {
		await adminAPI.changeOperation(courseInfo.id);
		const newCourse = { ...courseInfo, operate: !courseInfo.operate };
		setCourseInfo(newCourse);
	};

	return (
		<div className="w-1/2 mb-[4%]">
			<CardHeader
				title={courseInfo.title}
				instructor={courseInfo.instructor}
				operation={courseInfo.operate}
				onChangeOperation={handleOperationChange}
			/>
			<CardBody
				description={courseInfo.description}
				category={courseInfo.category1}
				numberOfLectures={courseInfo.lectureCnt}
			/>
		</div>
	);
};

export default CourseRegisterCard;
