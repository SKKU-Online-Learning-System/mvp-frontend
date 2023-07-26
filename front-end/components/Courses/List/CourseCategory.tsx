import React, { useState, useEffect, ReactElement } from 'react';
import { useRouter } from 'next/router';

import { useCourseCategoriesFetch } from 'query/hooks/CourseList/index';

interface ICourseCategory {
	handleClickMenu: (menu: string[]) => void;
}

const CourseCategory = ({ handleClickMenu }: ICourseCategory) => {
	const router = useRouter();
	const { data: courseCategories, isLoading } = useCourseCategoriesFetch();
	const [isClickedCategory, setIsClickedCategory] = useState<boolean[]>([]);

	const handleCardClick = (clickedIndex: number) => () => {
		if (!clickedIndex) {
			handleClickMenu(['전체보기']);
			router.push('/courses');
			return;
		}

		const clickedCategory = isClickedCategory.map((value, index) =>
			clickedIndex === index ? !value : value,
		);

		setIsClickedCategory(clickedCategory);
	};

	const handleSubItemClick = (category2sId: number, menu: string[]) => () => {
		handleClickMenu(menu);
		router.push({
			pathname: '/courses',
			query: { category2sId },
		});
	};

	useEffect(() => {
		const categoryLength = courseCategories?.length;

		if (!categoryLength) return;

		setIsClickedCategory(new Array(categoryLength).fill(false));
	}, [courseCategories]);

	if (isLoading) return <div>Loading . . .</div>;

	return (
		<>
			{courseCategories?.map((content, index) => {
				const isClicked = isClickedCategory[index];
				return (
					<div key={index}>
						<div
							className="flex font-semibold transition text-[#585858] hover:text-[#121212] border-[1px] border-solid
								border-[#e4e4e4] cursor-pointer p-[0.85rem] bg-[var(--color-Surface)]"
							onClick={handleCardClick(index)}
						>
							{content.name}
						</div>
						{isClicked && (
							<div>
								{content.category2s?.map((elem, index) => (
									<div
										className="bg-[var(--color-Surface] hover:bg-[var(--color-Surface)] cursor-pointer font-normal 
											text-[#595959] border-[0.1px] border-b-[0.5px] border-[#e4e4e4] border-solid p-[0.8rem] pl-[1.5rem]"
										onClick={handleSubItemClick(elem.id, [
											content.name,
											elem.name,
										])}
										key={index}
									>
										{elem.name}
									</div>
								))}
							</div>
						)}
					</div>
				);
			})}
		</>
	);
};

export default CourseCategory;
