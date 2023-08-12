import React from 'react';

import { ILectureList } from 'types/Lecture';

type PropsType = {
	idx: number;
	lecture: ILectureList;
	handleCollaseClick: (idx: number) => void;
};

const LectureListTitle = ({ idx, lecture, handleCollaseClick }: PropsType) => {
	return (
		<div
			className="flex text-lg font-bold items-center cursor-pointer bg-[#f0f0f0] h-[50px] mt-[15px] mb-[5px] pl-[1.5rem] text-[#5d5c5c]"
			onClick={() => handleCollaseClick(idx)}
		>
			{lecture.title}
		</div>
	);
};

export default LectureListTitle;
