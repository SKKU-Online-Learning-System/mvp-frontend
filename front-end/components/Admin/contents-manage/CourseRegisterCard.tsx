import React from 'react';

import CourseRegisterCardHeader from './CourseRegisterCardHeader';
import CourseRegisterCardBody from './CourseRegisterCardBody';

const CourseRegisterCard = () => {
	return (
		<div className="w-1/2 bg-[var(--color-onSurface-100)]">
			<CourseRegisterCardHeader
				isOperating={true}
				title="파이썬 초급"
				instructor="이성균"
			/>
			<CourseRegisterCardBody
				description="This is the description for this course"
				category="category"
				numberOfLectures={7}
			/>
		</div>
	);
};

export default CourseRegisterCard;
