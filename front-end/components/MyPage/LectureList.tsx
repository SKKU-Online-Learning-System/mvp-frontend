import React from 'react';

const CommonHeader = ({ text, color }: any) => {
	return (
		<div className="w-[75vw] text-[32px] font-bold border-b-2 border-solid border-black/[0.2] pb-3 pl-[45px] pt-[60px] flex-wrap">
			<div className="relative">
				<div
					className={'w-5 h-[2px] absolute top-[-2] left-[3px] bg-${color}'}
				/>
				{text}
			</div>
		</div>
	);
};

const LectureList = ({ headerText, headerColor, data }: any) => {
	return (
		<div>
			<CommonHeader text={headerText} color={headerColor} />
			<div className="flex w-full flex-wrap py-5 px-[35px] overflow-x-auto">
				{data.map((item: any) => (
					<div className="flex flex-col p-[10px]" key={item}>
						<img src="images/lecture_thumbnail.png" />
						<div className="flex gap-1.5">
							<div className="min-w-[60px] bg-[#e6e6e6] rounded-[10px] whitespace-nowrap text-[10px] py-[3px] px-[6px] my-2 mx-0">
								#python
							</div>
							<div className="min-w-[60px] bg-[#e6e6e6] rounded-[10px] whitespace-nowrap text-[10px] py-[3px] px-[6px] my-2 mx-0">
								#코딩입문
							</div>
							<div className="min-w-[60px] bg-[#e6e6e6] rounded-[10px] whitespace-nowrap text-[10px] py-[3px] px-[6px] my-2 mx-0">
								#자동매매
							</div>
						</div>
						<div className="font-bold">{item.course.title}</div>
						<div className="text-xs opacity-60">{item.course.summary}</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default LectureList;
