import React from 'react';
import { BsTrash3Fill } from 'react-icons/bs';

type PropType = {
	title: string;
	instructor: string;
};

const CardHeader = ({ title, instructor }: PropType) => {
	const onTrashcanBtnClick = () => {
		confirm('정말 해당 강좌를 삭제하시겠습니까?');
	};

	return (
		<div className="flex items-center justify-between w-full bg-[var(--color-onSurface-100)] px-[5%] py-[2.5%] bg-red">
			<div className="flex items-center justify-center">
				<select
					className="cursor-pointer text-center text-2xl font-bold focus:outline-none bg-[var(--color-onSurface-100)]"
					name="operating"
					id="operating"
				>
					<option value="0">운영</option>
					<option value="1">미운영</option>
				</select>
			</div>
			<h3 className="text-[28px] font-bold">{title}</h3>
			{instructor ? <span>{instructor} 교수</span> : ''}
			<button
				onClick={onTrashcanBtnClick}
				className="transition duration-150 hover:text-red-400"
			>
				<BsTrash3Fill className="text-2xl" />
			</button>
		</div>
	);
};

export default CardHeader;
