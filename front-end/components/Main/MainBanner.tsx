import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

import { useRecommendedCoursesFetch } from 'query/hooks/Main/index';
import { curations } from 'constants/mainCuration';

const MainBanner = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const { data: recommendedCoursesList, isLoading } =
		useRecommendedCoursesFetch(0);

	if (isLoading) return <div>Loading . . .</div>;

	if (!recommendedCoursesList)
		return <div>Main banner contents are being loaded . . .</div>;

	const slides = recommendedCoursesList?.map((course) => {
		return {
			thumbnail: course.thumbnail,
			url: `/courses/${course?.courseId}`,
		};
	});

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
		<div className="h-[680px] mb-48 w-full group bg-[var(--color-green-700)]">
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
					{curations.map((link, index) => (
						<li key={index} className="min-w-[130px]">
							<a
								key={index}
								href={link.url}
								className="flex flex-col items-center justify-center"
							>
								<link.logoIconImage className="w-20 h-20 my-2 hover:scale-[1.08] transition" />
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
