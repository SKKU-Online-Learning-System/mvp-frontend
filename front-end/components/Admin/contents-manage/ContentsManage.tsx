import React, { useRef, useState } from 'react';

import CourseRegisterCard from './CourseRegisterCard';
import { CourseInfo } from 'types/Admin/Index';
import Pager from './Pager';

type PropsType = {
	allCourses: CourseInfo[];
};

const ContentsCntPerPage = 4;

const ContentsManage = ({ allCourses }: PropsType) => {
	const inputRef = useRef<HTMLInputElement | null>(null);

	const [pageNumber, setPageNumber] = useState<number>(1);

	if (!allCourses) {
		return (
			<div>
				Failed to retrieve courses info. Please refresh to retrieve courses info
				again . . .
			</div>
		);
	}

	const courseCnt = allCourses.length;

	const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { current } = inputRef;

		if (current) {
			current.value = e.target.value;
		}
	};

	// const onSearchCoursesClick = () => {};

	const onKeyPress = (e: React.KeyboardEvent) => {
		if (e.key === 'Enter') {
			e.preventDefault();
			// onSearchCoursesClick();
			return;
		}
	};

	return (
		<div className="flex flex-col items-center justify-start w-full p-10 mt-14">
			<div className="w-1/2 mb-[2%] flex justify-center">
				<input
					type="text"
					ref={inputRef}
					placeholder="강좌명 검색"
					className="text-lg w-[300px] h-12 rounded-5 pr-10 pl-4 border-2 border-solid border-[var(--color-onSurface-100)] rounded-xl"
					onChange={onInputChange}
					onKeyPress={onKeyPress}
				/>
			</div>
			{allCourses
				.slice(
					ContentsCntPerPage * (pageNumber - 1),
					ContentsCntPerPage * pageNumber,
				)
				.map((course, idx) => (
					<CourseRegisterCard key={idx} course={course} />
				))}
			<Pager
				ContentsCntPerPage={ContentsCntPerPage}
				pageNumber={pageNumber}
				setPageNumber={setPageNumber}
				courseCnt={courseCnt}
			/>
		</div>
	);
};

export default ContentsManage;
