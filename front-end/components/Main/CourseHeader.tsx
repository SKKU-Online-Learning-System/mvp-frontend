import React from 'react';

type PropType = { title: string };

const CourseHeader = ({ title }: PropType) => {
	const color =
		title === '인기 컨텐츠'
			? '#ff0000'
			: title === '신규 컨텐츠'
			? '#00ff00'
			: title === '인공지능 컨텐츠'
			? '#0000ff'
			: '#dfdf00';

	return (
		<div className="w-full text-[2rem] font-bold pb-3 pl-[45px] pt-[60px] border-b-2 border-b-solid border-b-black/[0.2]">
			<div className="relative">
				<div
					style={{ backgroundColor: color }}
					className={`w-5 h-0.5 absolute left-1`}
				></div>
				{title}
			</div>
		</div>
	);
};

export default CourseHeader;
