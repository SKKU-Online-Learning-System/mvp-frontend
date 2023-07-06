import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { TbMessageLanguage } from 'react-icons/tb';
import { SiHiveBlockchain } from 'react-icons/si';
import { RxDotFilled } from 'react-icons/rx';
import { MdSecurity } from 'react-icons/md';
import { GiBrain } from 'react-icons/gi';

import { ICourse } from 'types/Main';
import { usePopularCoursesFetch } from 'query/hooks/Main/index';

const navigationLinks = [
	{
		category: '프로그래밍 언어',
		url: './courses?category2sId=6',
		asset: TbMessageLanguage,
	},
	{ category: '인공지능', url: './courses?category2sId=18', asset: GiBrain },
	{
		category: '웹개발',
		url: './courses?category2sId=1',
		asset: HiOutlineDesktopComputer,
	},
	{
		category: '교양',
		url: './courses?category2sId=44',
		asset: SiHiveBlockchain,
	},
	{ category: '보안', url: './courses?category2sId=12', asset: MdSecurity },
];

const MainBanner = () => {
	const { data: popularCourses } = usePopularCoursesFetch();
	const slides: { thumbnail: string; url: string }[] = (
		popularCourses ?? []
	).map((course: ICourse) => ({
		thumbnail: course.thumbnail,
		url: `/courses/${course.id}`,
	}));

	const [currentIndex, setCurrentIndex] = useState(0);

	const prevSlide = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};

	const nextSlide = () => {
		const isLastSlide = currentIndex === slides.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};

	const goToSlide = (slideIndex: number) => {
		setCurrentIndex(slideIndex);
	};

	return (
		<div className="h-[680px] mb-48 w-full group bg-[var(--color-onSurface)]">
			<div
				style={{
					backgroundImage: `url(${slides[currentIndex]?.thumbnail})`,
				}}
				className="w-full h-full duration-500 bg-center bg-cover max-w-[1400px] m-auto py-16 px-4 relative"
			>
				<a
					href={slides[currentIndex]?.url}
					className="absolute inset-0 w-full h-full"
				/>
				<div className="hidden group-hover:block absolute top-1/2 translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
					<BsChevronCompactLeft onClick={prevSlide} size={30} />
				</div>
				<div className="hidden group-hover:block absolute top-1/2 translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
					<BsChevronCompactRight onClick={nextSlide} size={30} />
				</div>
			</div>
			<div className="flex justify-center py-2 top-4">
				{slides.map((_, slideIndex) => (
					<div
						key={slideIndex}
						onClick={() => goToSlide(slideIndex)}
						className="text-2xl cursor-pointer"
					>
						<RxDotFilled
							color={
								currentIndex === slideIndex
									? 'var(--color-green-700)'
									: 'var(--color-grey-200)'
							}
						/>
					</div>
				))}
			</div>
			<div className="mt-8">
				<ul className="flex items-center justify-center text-center space-x-14">
					{navigationLinks.map((link, index) => (
						<li key={index} className="min-w-[130px]">
							<a
								key={index}
								href={link.url}
								className="flex flex-col items-center justify-center"
							>
								<link.asset className="w-20 h-20 my-2 hover:scale-[1.08] transition" />
								<span className="text-[var(--color-onBackground)]">
									{link.category}
								</span>
							</a>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default MainBanner;
