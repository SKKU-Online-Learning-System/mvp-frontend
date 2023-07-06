import React from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';

import CourseRegisterCard from './CourseRegisterCard';

const ContentsManage = () => {
	return (
		<div className="flex flex-col items-center justify-start w-full p-10 mt-14">
			<CourseRegisterCard />
			<button className="hover:scale-[1.05] transition">
				<AiOutlinePlusCircle className="text-7xl mt-14" />
			</button>
		</div>
	);
};

export default ContentsManage;
