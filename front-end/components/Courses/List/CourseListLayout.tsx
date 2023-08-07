import React, { useState, useEffect, ReactElement } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { ICourseCategory } from 'types/Course';

type PropsType = {
	children: ReactElement[] | ReactElement<any, string> | string;
	categories: ICourseCategory[];
};

const CourseListLayout = ({ children, categories }: PropsType) => {
	const router = useRouter();

	const [isClicked, setIsClicked] = useState(categories[0].name);
	const [isClickedCategory, setIsClickedCategory] = useState<boolean[]>([]);

	useEffect(() => {
		const categoryLength = categories.length;

		setIsClickedCategory(new Array(categoryLength).fill(false));
	}, [categories]);

	const handleMenuClick = (event: string) => {
		setIsClicked(event);
	};

	const handleCardClick = (clickedIndex: number) => {
		if (!clickedIndex) router.push('/courses');

		const clickedCategories = isClickedCategory.map((value, idx) =>
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

	return (
		<div className="w-full h-full flex flex-col my-0 mx-auto font-['Noto Sans KR']">
			<h2 className="select-none w-full bg-[var(--color-Primary)] p-8 font-['Gugi'] text-2xl text-white border-b-2 border-solid border-[var(--color-Background)]">
				{'온라인명륜당 > 강좌 List'}
			</h2>
			<div className="flex">
				<div className="min-h-screen w-1/6 bg-[var(--color-Primary)] min-w-[280px] ">
					<ul className="flex flex-col justify-start h-full p-12 pr-0">
						{categories.map((content, idx) => {
							const isCategoryClicked = isClickedCategory[idx];

							return (
								<li
									className={`text-[var(--color-onPrimary-200)] ${handleSidebarBtnStyle(
										isClicked === content.name,
									)}`}
									key={idx}
									onClick={() => handleMenuClick(content.name)}
								>
									<div
										className={`flex font-semibold transition cursor-pointer`}
										onClick={() => handleCardClick(idx)}
									>
										{content.name}
									</div>
									{isCategoryClicked && (
										<div className="mt-4">
											{content.category2s?.map((elem, idx) => (
												<li className="mt-2" key={idx}>
													<Link href={`courses/${elem.id}`} key={idx}>
														<span className="text-base transition-all relative left-3 hover:left-3.5">
															{elem.name}
														</span>
													</Link>
												</li>
											))}
										</div>
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
