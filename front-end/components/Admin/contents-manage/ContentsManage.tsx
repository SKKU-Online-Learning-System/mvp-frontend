import React, { useRef, useState, useEffect } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

import CourseRegisterCard from './CourseRegisterCard';
import { useAllCoursesFetch } from 'query/hooks/Admin';

const ContentsManage = () => {
	const inputRef = useRef<HTMLInputElement | null>(null);
	const [pageNumber, setPageNumber] = useState<number>(1);
	const { data: allCourses, isLoading } = useAllCoursesFetch();
	const maxPageNumber = allCourses?.length;

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

	const onPageControllerClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		if ((e.target as HTMLButtonElement).id === 'left-btn' && pageNumber > 1) {
			setPageNumber((pageNumber) => pageNumber - 1);
			// Todo: API 호출해서 (pageNumber * 5 - 4 ~ pageNumber * 5)까지 5개 강좌 정보 띄우기
		} else if (
			(e.target as HTMLButtonElement).id === 'right-btn' &&
			maxPageNumber &&
			pageNumber < maxPageNumber
		) {
			setPageNumber((pageNumber) => pageNumber + 1);
			// Todo: API 호출해서 (pageNumber * 5 - 4 ~ pageNumber * 5)까지 5개 강좌 정보 띄우기
		}
	};

	if (isLoading) return <div>loading . . .</div>;
	return (
		<div className="flex flex-col items-center justify-start w-full p-10 mt-14">
			<div className="w-1/2 mb-[2%] flex justify-between">
				<input
					type="text"
					ref={inputRef}
					placeholder="강좌명 검색"
					className="text-lg w-[300px] h-12 rounded-5 pr-10 pl-4 border-2 border-solid border-[var(--color-onSurface-100)] rounded-xl"
					onChange={onInputChange}
					onKeyPress={onKeyPress}
				/>
				<button className="transition text-xl font-semibold rounded-lg p-2 bg-[#b3df8c] hover:bg-[#b9c7ad]">
					운영 정보 저장
				</button>
			</div>
			{allCourses?.map((course, idx) => {
				return <CourseRegisterCard key={idx} course={course} />;
			})}

			<div className="flex items-center justify-center text-3xl">
				<button onClick={onPageControllerClick}>
					<BsChevronLeft id="left-btn" />
				</button>
				<span className="mx-20 my-12">{pageNumber}</span>
				<button onClick={onPageControllerClick}>
					<BsChevronRight id="right-btn" />
				</button>
			</div>
		</div>
	);
};

export default ContentsManage;
