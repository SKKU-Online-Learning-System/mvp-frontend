import React, { FormEvent, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Image from 'next/image';

const TopSearchbar = () => {
	const router = useRouter();
	const [text, setText] = useState('');
	const { keyword } = router.query as { keyword: string };

	const handleSearchClick = async (e: FormEvent) => {
		e.preventDefault();

		if (!text) {
			return;
		}

		const query = { ...router.query, keyword: text };
		router.push({
			pathname: '/courses',
			query,
		});
	};

	const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setText(e.target.value);
	};

	useEffect(() => {
		if (!router.isReady) return;

		if (keyword) {
			setText(keyword);
		} else {
			setText('');
		}
	}, [router.isReady, keyword]);

	return (
		<div className="flex flex-col border-y-[1px] border-solid border-[#dedede] pt-[25px] pb-[30px]">
			<div className="flex gap-x-0.5 items-center pb-4">
				<div className="flex flex-col leading-5"></div>
			</div>
			<div className="flex gap-x-5">
				<form
					className="border-2 border-solid boredr-[#dedede] min-w-[500px] h-20 flex items-center"
					onSubmit={handleSearchClick}
				>
					<input
						className="w-full h-full text-2xl border-none focus:outline-0"
						type="text"
						value={text}
						placeholder="강좌명 검색"
						onChange={handleChangeInput}
					/>
					<span
						className="px-1 py-4 cursor-pointer"
						onClick={handleSearchClick}
					>
						{/* 돋보기 이미지 => svg로 바꿀 것 */}
						<div className="opacity-[.6]">
							<Image
								src="/images/search_btn.png"
								width="40px"
								height="40px"
								alt="search button image"
							/>
						</div>
					</span>
				</form>
			</div>
		</div>
	);
};

export default React.memo(TopSearchbar);
