import React from 'react';

type PropType = {
	title: string;
	color: string;
};

// Todo: color에 #ff0000 외 다른 색 들어가지 않는 이슈
const CourseHeader = ({ title, color }: PropType) => {
	return (
		<div className="w-full text-[2rem] font-bold pb-3 pl-[45px] pt-[60px] border-b-2 border-b-solid border-b-black/[0.2]">
			<div className="relative">
				<div className={`w-5 h-0.5 absolute left-1 bg-[${color}]`}></div>
				{title}
			</div>
		</div>
	);
};

export default CourseHeader;
