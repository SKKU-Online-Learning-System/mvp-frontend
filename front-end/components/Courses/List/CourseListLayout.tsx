import React, { useState, useEffect, ReactElement } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { ICourseCategory } from 'types/Course';

type PropsType = {
	children: ReactElement[] | ReactElement<any, string> | string;
	categories: ICourseCategory[];
	title: string;
	setTitle: (title: string) => void;
};

const CourseListLayout = ({
	children,
	categories,
	title,
	setTitle,
}: PropsType) => {
	const router = useRouter();

	const [isClicked, setIsClicked] = useState(categories[0].name);
	const [isClickedCategory, setIsClickedCategory] = useState<boolean[]>([]);

	useEffect(() => {
		const categoryLength = categories.length;

		setIsClickedCategory(new Array(categoryLength).fill(false));
	}, [categories]);

	const handleMenuClick = (contentName: string) => {
		setIsClicked(contentName);
	};

	const handleCardClick = (clickedIndex: number) => {
		if (!clickedIndex) router.push('/courses');

		const clickedCategories = isClickedCategory.map((_, idx) =>
			clickedIndex === idx ? true : false,
		);
		setIsClickedCategory(clickedCategories);
	};

	const handleSidebarBtnStyle = (open: boolean) => {
		const selected = 'bg-white text-[var(--color-onSurface)]';
		const notSelected =
			'transition-all relative left-0 hover:left-0.5 hover:text-white';
		let sidebarBtnBasicStyle =
			'text-[var(--color-onPrimary-200)] rounded-tl-lg rounded-bl-lg mb-12 px-4 py-2 text-xl font-bold w-full text-start cursor-pointer ';
		open
			? (sidebarBtnBasicStyle += selected)
			: (sidebarBtnBasicStyle += notSelected);
		return sidebarBtnBasicStyle;
	};

	const handleSubMenuClick = (title: string) => {
		if (title === '전체보기') {
			setTitle('전체보기');
			return;
		}
		setTitle(title);
	};

	return (
		<div className="w-full h-full flex flex-col my-0 mx-auto font-['Noto Sans KR']">
			<h2 className="select-none w-full bg-[var(--color-Primary)] p-8 font-['Gugi'] text-2xl text-white border-b-2 border-solid border-[var(--color-Background)]">
				{`강좌목록 > ${title}`}
			</h2>
			<div className="flex">
				<div className="min-h-screen w-1/6 bg-[var(--color-Primary)] min-w-[280px] ">
					<ul className="flex flex-col justify-start h-full p-12 pr-0">
						{categories.map((content, idx) => {
							const isCategoryClicked = isClickedCategory[idx];

							return (
								<li
									onClick={() => {
										handleCardClick(idx);
										handleMenuClick(content.name);
										content.name === '전체보기'
											? handleSubMenuClick('전체보기')
											: '';
									}}
									className={`text-[var(--color-onPrimary-200)] ${handleSidebarBtnStyle(
										isClicked === content.name,
									)}`}
									key={idx}
								>
									<div className="flex font-semibold transition cursor-pointer">
										{content.name}
									</div>
									{isCategoryClicked && (
										<ul className="mt-4">
											{content.category2s?.map((elem, idx) => (
												<li
													className="flex"
													key={idx}
													onClick={() => handleSubMenuClick(elem.name)}
												>
													<div className="h-6 w-[2px] bg-[var(--color-Primary)]"></div>
													<Link
														href={`courses?category2sId=${elem.id}`}
														key={idx}
													>
														<span className="text-base transition-all relative left-3 hover:left-3.5">
															{elem.name}
														</span>
													</Link>
												</li>
											))}
										</ul>
									)}
								</li>
							);
						})}
					</ul>
				</div>
				<div className="w-full bg-white">{children}</div>
			</div>
		</div>
	);
};

export default CourseListLayout;
