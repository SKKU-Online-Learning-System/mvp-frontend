import React from 'react';
import { BsTrash3Fill } from 'react-icons/bs';
import { GiGraduateCap } from 'react-icons/gi';

type PropType = {
	isOperating: boolean;
	title: string;
	instructor: string;
};

const CourseRegisterCardHeader = ({
	isOperating,
	title,
	instructor,
}: PropType) => {
	const onTrashcanBtnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		alert('정말 해당 강좌를 삭제하시겠습니까?');
	};

	return (
		<div
			id="upper"
			className="flex items-center justify-between px-[5%] py-[2.5%] bg-red"
		>
			<div className="flex items-center justify-between w-7/12">
				<div className="flex items-center justify-center">
					<GiGraduateCap className="mr-2 text-3xl" />
					<span className="text-2xl font-bold">
						{isOperating ? '운영 중' : '미운영'}
					</span>
				</div>
				<h3 className="text-3xl font-bold">{title}</h3>
				<span>{instructor} 교수</span>
			</div>
			<div>
				<button
					onClick={onTrashcanBtnClick}
					className="transition duration-150 hover:text-red-400"
				>
					<BsTrash3Fill className="text-2xl" />
				</button>
			</div>
		</div>
	);
};

export default CourseRegisterCardHeader;
