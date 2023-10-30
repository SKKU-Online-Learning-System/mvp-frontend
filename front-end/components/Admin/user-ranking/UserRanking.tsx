import React from 'react';
import Image from 'next/image';

const UserRanking = () => {
	return (
		<div className="w-full">
			<div className="flex flex-col items-center justify-center w-full h-full bg-white">
				<div className="shadow-xl text-white bg-[var(--color-mrgreen-5)] rounded-lg text-2xl py-4 px-6 mb-10">
					User Ranking Section은 아직 활성화되지 않았습니다.
				</div>
				<Image
					className="opacity-25"
					src={'/images/confucian.jpeg'}
					width={500}
					height={500}
					alt="Maple img"
				/>
			</div>
		</div>
	);
};

export default UserRanking;
