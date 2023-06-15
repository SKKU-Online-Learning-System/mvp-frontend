import React, { useState, useEffect, ReactElement } from 'react';
import styled from 'styled-components';

import { useRouter } from 'next/router';
import { useCourseCategoriesFetch } from 'query/hooks/CourseList/index';

type ToggleType = {
	isClicked: boolean;
};

interface ICourseCategory {
	handleClickMenu: (menu: string[]) => void;
}

const CourseCategory = ({ handleClickMenu }: ICourseCategory): ReactElement => {
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

	if (isLoading) return <div>Loading....</div>;

	return (
		<div>
			{courseCategories?.map((content, index) => (
				<React.Fragment key={index}>
					<div className='flex font-semibold text-[#595959] border-[1px] border-solid border-[#e4e4e4] cursor-pointer p-[0.85rem] bg-[#fafafa]' onClick={handleCardClick(index)}>{content.name}</div>
					<SubItemBody isClicked={isClickedCategory[index]}>
						{content.category2s?.map((elem, index) => (
							<SubItem
								onClick={handleSubItemClick(elem.id, [content.name, elem.name])}
								key={index}
							>
								{elem.name}
							</SubItem>
						))}
					</SubItemBody>
				</React.Fragment>
			))}
		</div>
	);
};

export default CourseCategory;

const SubItemBody = styled.div<ToggleType>`
	max-height: ${(props) => (props.isClicked ? '100em' : '0')};
	overflow-y: hidden;
	transition: max-height 0.3s ease;
`;
const SubItem = styled.div`
	border: 0.1px #e4e4e4;
	padding: 0.8rem 0.8rem 0.8rem 1.5rem;
	border-bottom: 0.5px solid #e4e4e4;
	cursor: pointer;
	background: #fafafa;
	font-weight: 400;
	color: #595959;
	&:hover {
		background: #cfcccc;
	}
`;
