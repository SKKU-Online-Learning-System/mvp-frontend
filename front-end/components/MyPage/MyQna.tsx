import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import { getTimeBefore } from 'utils/getTimeBefore';
import { useMyQnaFetch } from 'query/hooks/MyPage';

const MyQnA = () => {
	const router = useRouter();

	const { data: qna, isLoading } = useMyQnaFetch();

	if (isLoading)
		return (
			<Image
				src={'/images/sky_2.gif'}
				width={300}
				height={300}
				alt="loading gif"
			/>
		);
	if (!qna) return <div>Failed to retrieve Q&A info . . .</div>;
	if (qna.length === 0)
		return (
			<div className="flex flex-col items-center justify-center w-full h-full bg-white">
				<div className="shadow-xl text-white bg-[var(--color-mrgreen-5)] rounded-lg text-3xl py-4 px-6 mb-10">
					첫 질문을 올려주세요 !
				</div>
				<Image
					className="opacity-25"
					src={'/images/confucian.jpeg'}
					width={500}
					height={500}
					alt="Maple img"
				/>
			</div>
		);

	const handleClick = (questionId: number) => () => {
		if (!questionId) return;
		router.push(`/questions/${questionId}`);
	};

	return (
		<div className="min-h-screen bg-white">
			<div className="p-5 mx-56 mb-32 tbl:mx-auto gap-y-4">
				<ul>
					{qna.map((elem, idx) => (
						<li
							className="rounded-md hover:bg-[#f8f9fa] hover:duration-300 m-auto cursor-pointer p-5 border-b-[1px] border-solid border-[#dee2e6] flex w-full list-none text-ellipsis"
							key={idx}
							onClick={handleClick(elem.id)}
						>
							<div className="w-[85%]">
								<header className="font-bold">
									{elem.title || '제목없음'}
								</header>
								<section className="text-[0.8rem] text-[#616568] my-[10px] mx-0 text-ellipsis overflow-hidden break-words line-clamp-3">
									{elem.contents}
								</section>
								<div className="text-[0.8rem] text-[#858a8d]">
									{`이름 · ${getTimeBefore(elem.createdAt)} · ${
										elem.course.title
									}`}
								</div>
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default MyQnA;
