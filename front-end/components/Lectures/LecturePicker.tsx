import React, { useState } from 'react';
import { useRouter } from 'next/router';

import { durationToHhMmSs } from 'utils/durationToHhMmSs';
import { useCourseDetailLectureFetch } from 'query/hooks/CourseDetail/index';

interface ILecturePicker {
	courseId?: string;
}

export const LecturePicker = ({ courseId }: ILecturePicker) => {
	const router = useRouter();

	const [isCollapsed, setIsCollapsed] = useState<boolean[]>([]); // true면 펼쳐짐, false면 닫힘.
	const { data: lectureList, isLoading } = useCourseDetailLectureFetch(
		courseId,
		{
			onSuccess: (data) => {
				setIsCollapsed(new Array(data.length).fill(true));
			},
		},
	);

	const handleToggleCollapse = (index: number) => {
		const newArray = isCollapsed.map((bool, idx) =>
			index === idx ? !bool : bool,
		);
		setIsCollapsed(newArray);
	};

	const handleMoveToAnotherLecture = (lectureId: number) => {
		router.push({ pathname: `/lectures/${lectureId}`, query: { courseId } });
	};

	if (isLoading) return <div>Loading...</div>;

	return (
		<div className="border-[1px] border-solid border-[#e7e9eb] h-[768px] overflow-y-scroll min-w-[300px]">
			{lectureList?.map((elem, idx) => {
				const ic = isCollapsed[idx];
				return (
					<div key={idx}>
						<div
							className={
								ic
									? 'after:rotate-45 '
									: 'after:rotate-[-45deg] ' +
									  `after:duration-200 after:my-[10px] after:p-[2.5px] after:content-[''] after:inline-block after:border-solid after:border-[#595959] after:border-r-2 border-b-2 cursor-pointer flex min-w-[200px] p-[10px] justify-between bg-[#e7e9eb] text-[#595959]`
							}
							// isCollapsed={isCollapsed[idx]}
							onClick={() => handleToggleCollapse(idx)}
						>
							{elem?.title}
						</div>
						<div
							className={
								// row 1개당 45px기준, 목록 100개.
								ic
									? 'max-h-[4500px] '
									: 'max-h-0 ' +
									  `overflow-y-hidden transition-[max-height] ease-in-out duration-300`
							}
						>
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
	);
};
