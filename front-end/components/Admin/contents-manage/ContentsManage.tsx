import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import CourseRegisterCard from './CourseRegisterCard';

const ContentsManage = () => {
	return (
		<div>
			<CourseRegisterCard />
			<FontAwesomeIcon icon={faPlusCircle} />
		</div>
	);
};

export default ContentsManage;
