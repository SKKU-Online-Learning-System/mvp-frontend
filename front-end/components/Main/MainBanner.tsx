import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import API from 'apis/Main';
import { IMainBanners } from 'types/Main';

import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
// npm install react-icons

import { RxDotFilled } from 'react-icons/rx';
// npm install react-icons --save

// TODO. query string 형식으로 요청 보내기
const MainBanner = () => {
	const slides = [
		{
			url: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
		},
		{
			url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
		},
		{
			url: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80',
		},

		{
			url: 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80',
		},
		{
			url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
		},
	];

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
		<div>
			<div className="h-[680px] w-full group bg-[var(--color-green-700)]">
				<div
					style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
					className="w-full h-full duration-500 bg-center bg-cover max-w-[1400px] m-auto py-16 px-4 relative"
				>
					<div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
						<BsChevronCompactLeft onClick={prevSlide} size={30} />
					</div>
					<div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
						<BsChevronCompactRight onClick={nextSlide} size={30} />
					</div>
				</div>
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
			</div>
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
