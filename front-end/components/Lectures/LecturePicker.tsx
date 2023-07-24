import React, { useState } from 'react';
import { useRouter } from 'next/router';

import { durationToHhMmSs } from 'utils/durationToHhMmSs';
import { useCourseDetailLectureFetch } from 'query/hooks/CourseDetail/index';

import { RxHamburgerMenu } from 'react-icons/rx';
interface ILecturePicker {
	courseId?: string;
}
interface ILecture {
	id: number;
	title: string;
	duration: number;
}

export const LecturePicker = ({ courseId }: ILecturePicker) => {
	// 사이드바 접기 및 펼치기
	const [sidebarOpen, setSidebaropen] = useState(true);
	const handleViewSidebar = () => {
		setSidebaropen(!sidebarOpen);
	};
	const sidebarClass = sidebarOpen
		? 'h-[768px] overflow-y-scroll left-0 bg-[var(--color-Primary)] min-w-[300px]'
		: ' h-[768px] overflow-y-scroll w-0 transition ';

	const router = useRouter();

	const { data: lectureList, isLoading } = useCourseDetailLectureFetch(
		courseId,
		{},
	);
	const [moveToAnotherLecture, setMoveToAnotherLecture] = useState<
		number | null
	>(null);

	const handleMoveToAnotherLecture = (lectureId: number) => {
		router.push({ pathname: `/lectures/${lectureId}`, query: { courseId } });
		setMoveToAnotherLecture(lectureId);
	};

	const getBackgroundColorClass = (item: ILecture) => {
		return item.id === moveToAnotherLecture
			? 'bg-[var(--color-onPrimary)] text-[var(--color-onSurface)] hover:text-[var(--color-onSurface)]'
			: '';
	};
	if (isLoading) return <div>Loading...</div>;
	return (
		<div className="flex flex-col bg-[var(--color-Primary)] ">
			<button onClick={handleViewSidebar} className={`p-3 left-0`}>
				<RxHamburgerMenu className="hover:opacity-50 text-white" size="25px" />
			</button>
			<div className={`${sidebarClass}`}>
				{lectureList?.map((elem, idx) => {
					return (
						<div key={idx}>
							<div className="font-bold px-3 py-1 text-xl text-white">
								{elem?.title}
							</div>
							<div className="p-2 ">
								{elem?.lectures.map((item, _idx: number) => {
									return (
										<div
											className={`${getBackgroundColorClass(
												item,
											)} text-[var(--color-onPrimary-200)] rounded-lg hover:text-white cursor-pointer flex justify-between list-none p-[10px] `}
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
