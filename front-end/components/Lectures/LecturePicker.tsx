import React, { useState } from 'react';
import { useRouter } from 'next/router';

import { durationToHhMmSs } from 'utils/durationToHhMmSs';
import { useCourseDetailLectureFetch } from 'query/hooks/CourseDetail/index';

import { RxHamburgerMenu } from 'react-icons/rx';
interface ILecturePicker {
	courseId?: string;
}

export const LecturePicker = ({ courseId }: ILecturePicker) => {
	// 사이드바 접기 및 펼치기
	const [sidebarOpen, setSidebaropen] = useState(true);
	const handleViewSidebar = () => {
		setSidebaropen(!sidebarOpen);
	};
	const sidebarClass = sidebarOpen
		? 'border-[1px] border-solid border-[#e7e9eb] h-[768px] overflow-y-scroll min-w-[300px] left-0'
		: 'h-[768px] overflow-y-scroll  w-0 bg-red-100';

	const router = useRouter();

	const { data: lectureList, isLoading } = useCourseDetailLectureFetch(
		courseId,
		{},
	);

	const handleMoveToAnotherLecture = (lectureId: number) => {
		router.push({ pathname: `/lectures/${lectureId}`, query: { courseId } });
	};

	if (isLoading) return <div>Loading...</div>;
	return (
		<div className="flex flex-col">
			<button onClick={handleViewSidebar} className={` py-7 ml-auto`}>
				<RxHamburgerMenu className="hover:opacity-70 " size="25px" />
			</button>
			<div className={sidebarClass}>
				{lectureList?.map((elem, idx) => {
					return (
						<div key={idx}>
							<div>{elem?.title}</div>
							<div>
								{elem?.lectures.map((item, _idx: number) => {
									return (
										<div
											className="hover:bg-[#efefef] cursor-pointer flex justify-between gap-x-4 gap-y-2 list-none p-[10px]"
											key={_idx}
											onClick={() => handleMoveToAnotherLecture(item.id)}
										>
											<li>{item.title}</li>
											<li>{durationToHhMmSs(item.duration)}</li>
										</div>
									);
								})}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
