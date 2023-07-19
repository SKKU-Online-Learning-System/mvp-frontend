import React, { FormEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { BiSearch } from 'react-icons/bi';

const TopSearchbar = () => {
	``;
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

		keyword ? setText(keyword) : setText('');
	}, [router.isReady, keyword]);

	return (
		<div className="py-16">
			<div className="flex gap-x-5 place-content-center ">
				<form
					className=" rounded-[36px] min-w-[500px] h-16 flex border-solid border-2 "
					onSubmit={handleSearchClick}
				>
					<input
						className="px-10 w-full h-full text-2xl focus:outline-0 min-w-[500px] rounded-[36px] bg-transparent "
						type="text"
						value={text}
						placeholder="강좌명 검색"
						onChange={handleChangeInput}
					/>
					<button
						className="px-4 py-1 cursor-pointer w-full h-full "
						onClick={handleSearchClick}
					>
						{/* 돋보기 icon */}
						<BiSearch className="opacity-60" size="36" />
					</button>
				</form>
			</div>
		</div>
	);
};

export default React.memo(TopSearchbar);
