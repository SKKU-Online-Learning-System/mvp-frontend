import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

import { MainCourse } from 'types/Main';

type PropsType = {
	contents: MainCourse[];
};

const MainBanner = ({ contents }: PropsType) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const slides = contents.map((course, idx) => {
		return {
			thumbnail: `/images/banner-images/${idx}.jpg`,
			url: `/courses/${course.courseId}`,
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
		<div className="h-[680px] mb-24 w-full group bg-[#031628]">
			<div
				style={{
					// backgroundImage: `url(${slides[currentIndex].thumbnail})`, max-w-[1400px]
					// backgroundImage: `url(${slides[currentIndex].thumbnail})`,
					backgroundImage: `url('/images/banner_1.png')`,
				}}
				className="relative h-full px-4 py-16 m-auto duration-500 bg-center w-[80%] bg-contain bg-no-repeat"
			>
				<a
					href={slides[currentIndex].url}
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
		</div>
	);
};

export default MainBanner;
