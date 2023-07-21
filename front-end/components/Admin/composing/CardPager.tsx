import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faChevronRight,
	faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';

type BtnId = 'prev' | 'next';

const CardPager = () => {
	const [currPage, setCurrPage] = useState(1);

	const onPagerClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		const btnId = e.currentTarget.id as BtnId;

		if (btnId === 'next') {
			setCurrPage((prev) => prev + 1);
		} else {
			currPage !== 1 ? setCurrPage((prev) => prev - 1) : '';
		}
	};

	return (
		<div className="flex items-center justify-center mt-8">
			<button
				id="prev"
				onClick={onPagerClick}
				className="text-2xl hover:scale-[1.1]"
			>
				<FontAwesomeIcon icon={faChevronLeft} />
			</button>
			<span className="mx-8 text-2xl">{currPage}</span>
			<button
				id="next"
				onClick={onPagerClick}
				className="text-2xl hover:scale-[1.1]"
			>
				<FontAwesomeIcon icon={faChevronRight} />
			</button>
		</div>
	);
};

export default CardPager;
