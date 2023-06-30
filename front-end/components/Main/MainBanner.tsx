import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import API from 'apis/Main';
import { IMainBanners } from 'types/Main';

import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
// npm install react-icons

import { RxDotFilled } from 'react-icons/rx';
// npm install react-icons --save

// TODO. query string 형식으로 요청 보내기

import { ICourse } from 'types/Main';
import { usePopularCoursesFetch } from 'query/hooks/Main/index';

// interface ICourseCardProps {
// 	course: ICourse;
// }

const Curation = () => {
	// 동그라미들: 카테고리로 연결하는 역할
	const navigationLinks = [
		{ category: '프로그래밍 언어', url: './courses?category2sId=6' },
		{ category: '인공지능', url: './courses?category2sId=18' },
		{ category: '웹개발', url: './courses?category2sId=1' },
		{ category: '블록체인', url: './courses?category2sId=15' },
		{ category: '보안', url: './courses?category2sId=12' },
	];

	return (
		<div className="my-4">
			{/* <CourseList /> */}
			<ul className="flex justify-center space-x-10 text-center place-items-center">
				{navigationLinks.map((link, index) => (
					<a key={index} href={link.url}>
						<li className="bg-[var(--color-Surface)] w-20 h-20 rounded-full my-2"></li>
						<div className="text-[var(--color-onBackground)]">
							{link.category}
						</div>
					</a>
				))}
			</ul>
		</div>
	);
};

const MainBanner = () => {
	// 매인배너 썸네일 가져오기
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
		<div className="h-[680px] w-full group bg-[var(--color-green-700)]">
			{/* <CourseList /> */}
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
				<div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
					<BsChevronCompactLeft onClick={prevSlide} size={30} />
				</div>
				<div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
					<BsChevronCompactRight onClick={nextSlide} size={30} />
				</div>
			</div>
			{/* 위치 표시해주는 동그라미들 */}
			<div className="flex justify-center py-2 top-4">
				{slides.map((slide, slideIndex) => (
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
			<Curation />
		</div>
	);
};

export default MainBanner;

// https://flowbite.com/docs/components/carousel/
// image slider 이거 활용해서 넣으면 될듯
// import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';

// import API from 'apis/Main';
// import { IMainBanners } from 'types/Main';

// // TODO. query string 형식으로 요청 보내기
// const MainBanner = () => {
//  const router = useRouter();
//  const [bannerList, setBannerList] = useState<IMainBanners[]>([]);

//  const getImageUrl = (path: string) => {
//      const url = new URL(`${process.env.NEXT_PUBLIC_API_SERVER}`);
//      /*
//      백엔드 요청 환경변수에 origin만으로 이루어지지 않고, path가 섞여있는 경우가 있음.
//      https://www.xxx.com/apis ~~ 이런 케이스.
//      URL 인터페이스를 깔끔하게 사용하기 어려운 케이스
//      */

//      if (url.pathname === '/') url.pathname = path;
//      else {
//          url.pathname = `${url.pathname}${path}`;
//      }

//      return url.toString();
//  };

//  const handleImageClick = (category2sId: number | null) => () => {
//      router.push({ pathname: '/courses', query: { category2sId } });
//  };

//  useEffect(() => {
//      API.fetchBannerImgUrls()
//          .then((res) => setBannerList(res.data))
//          .catch((err) => console.log(err));
//  }, []);

//  return (
//      <div className="min-w-[1440px] flex justify-center items-center bg-[var(--color-green-900)] py-[50px] px-[60px]">
//          {bannerList.length > 0 &&
//              bannerList.map((banner, index) => (
//                  <div
//                      key={index}
//                      className="pl-[10px] overflow-auto cursor-pointer"
//                      onClick={handleImageClick(banner.category2Id)}
//                  >
//                      <img
//                          crossOrigin="anonymous"
//                          src={getImageUrl(banner.filename)}
//                          alt="bannerItem"
//                          className="max-w-[250px] w-[250px] h-[250px]"
//                      />
//                  </div>
//              ))}
//      </div>
//  );
// };

// export default MainBanner;

// // https://flowbite.com/docs/components/carousel/
// // image slider 이거 활용해서 넣으면 될듯
