import React, { useState } from 'react';
import styled from 'styled-components';
import { selectCourseCategory } from 'store/feature/course/courseSelector';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

type ToggleType = {
	isClicked: boolean;
};

const CourseCategory = () => {
	const courseCategory = useSelector(selectCourseCategory);
	const [isClickedCategory, setIsClickedCategory] = useState<boolean[]>([]);

	const handleClick = (clickedIndex: number) => () => {
		const clickedCategory = isClickedCategory.map((value, index) =>
			clickedIndex === index ? !value : value,
		);

		setIsClickedCategory(clickedCategory);
	};

	useEffect(() => {
		const categoryLength = courseCategory.length;

		if (!categoryLength) return;

		setIsClickedCategory(new Array(categoryLength).fill(false));
	}, [courseCategory]);

	return (
		<div>
			{courseCategory.length > 0 &&
				courseCategory.map((content, index) => (
					<React.Fragment key={index}>
						<Card onClick={handleClick(index)}>{content.name}</Card>
						<SubItemBody isClicked={isClickedCategory[index]}>
							{content.category2s?.map((elem, index) => (
								<SubItem key={index}>{elem.name}</SubItem>
							))}
						</SubItemBody>
					</React.Fragment>
				))}
		</div>
	);
};

const Card = styled.div`
	display: flex;
	border: 1px solid #e4e4e4;
	cursor: pointer;
	padding: 0.85rem;
	background: #fafafa;
	font-weight: 600;
	color: #595959;
`;

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

export default CourseCategory;
