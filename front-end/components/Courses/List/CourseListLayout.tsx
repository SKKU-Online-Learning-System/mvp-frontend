import React, { useState, ReactElement } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import menus from 'constants/MyPage/myPageMenus';
import { ICourseCategory } from 'types/Course';

type PropsType = {
	children: ReactElement[] | ReactElement<any, string> | string;
	categories: ICourseCategory[];
};

const CourseListLayout = ({ children, categories }: PropsType) => {
	const router = useRouter();

	const [isClicked, setIsClicked] = useState(menus[0].title);
	const [isClickedCategory, setIsClickedCategory] = useState<boolean[]>([]);

	const handleMenuClick = (event: string) => {
		setIsClicked(event);
	};

	const handleCardClick = (clickedIndex: number) => () => {
		if (!clickedIndex) router.push('/courses');

		const clickedCategory = isClickedCategory.map((value, index) =>
			clickedIndex === index ? !value : value,
		);

		setIsClickedCategory(clickedCategory);
	};

	const handleSubItemClick = (category2sId: number) => () => {
		router.push({
			pathname: '/courses',
			query: { category2sId },
		});
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
				<div className="min-h-screen w-1/6 bg-[var(--color-Primary)] min-w-[280px]">
					<ul>
						{categories.map((content, idx) => {
							const isClicked = isClickedCategory[idx];
							return (
								<li key={idx}>
									<div
										className="flex font-semibold transition text-[#585858] hover:text-[#121212] cursor-pointer p-[0.85rem] bg-[var(--color-Surface)]"
										onClick={handleCardClick(idx)}
									>
										{content.name}
									</div>
									{isClicked && (
										<div>
											{content.category2s?.map((elem, idx) => (
												<div
													className="bg-[var(--color-Surface] hover:bg-[var(--color-Surface)] cursor-pointer font-normal 
                                                    text-[#595959] border-[0.1px] border-b-[0.5px] border-[#e4e4e4] border-solid p-[0.8rem] pl-[1.5rem]"
													onClick={handleSubItemClick(elem.id)}
													key={idx}
												>
													{elem.name}
												</div>
											))}
										</div>
									)}
								</li>
							);
						})}
					</ul>
				</div>
				<div className="tbl:w-[80%] bg-[var(--color-Surface)]">{children}</div>
			</div>
		</div>
	);
};

export default CourseListLayout;

{
	/* <ul className="flex flex-col justify-start h-full p-12 pr-0">
    {menus.map((menu, idx) => (
        <li
            key={idx}
            className="relative w-full"
            onClick={() => handleMenuClick(menu.title)}
        >
            <Link href={menu.path}>
                <div
                    className={handleSidebarBtnStyle(isClicked === menu.title)}
                >
                    <span>{menu.title}</span>
                </div>
            </Link>
        </li>
    ))}
</ul> */
}
