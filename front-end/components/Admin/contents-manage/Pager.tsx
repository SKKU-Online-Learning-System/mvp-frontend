import React from 'react';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

import PagerButton from './PageButton';

type PropsType = {
	ContentsCntPerPage: number;
	pageNumber: number;
	setPageNumber: (pageNumber: number) => void;
	courseCnt: number;
};

type ButtonId = 'prev' | 'next';

const Pager = ({
	ContentsCntPerPage,
	pageNumber,
	setPageNumber,
	courseCnt,
}: PropsType) => {
	const onBtnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		const id = e.currentTarget.id as ButtonId;

		if (id === 'prev' && pageNumber > 1) {
			setPageNumber(pageNumber - 1);
		} else if (id === 'next' && pageNumber * ContentsCntPerPage < courseCnt) {
			setPageNumber(pageNumber + 1);
		}
	};

	return (
		<div className="flex items-center justify-center text-3xl">
			<PagerButton id="prev" onBtnClick={onBtnClick} icon={faAngleLeft} />
			<span className="mx-20 my-12">{pageNumber}</span>
			<PagerButton id="next" onBtnClick={onBtnClick} icon={faAngleRight} />
		</div>
	);
};

export default Pager;