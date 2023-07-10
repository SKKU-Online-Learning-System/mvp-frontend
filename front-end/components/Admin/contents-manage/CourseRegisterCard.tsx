import React from 'react';

import CardHeader from './CardHeader';
import CardBody from './CardBody';

const dummyText =
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

const CourseRegisterCard = () => {
	return (
		<div className="w-1/2 mb-[4%]">
			<CardHeader title="파이썬 초급" instructor="이성균" />
			<CardBody
				description={dummyText}
				category="프로그래밍 언어"
				numberOfLectures={7}
			/>
		</div>
	);
};

export default CourseRegisterCard;
