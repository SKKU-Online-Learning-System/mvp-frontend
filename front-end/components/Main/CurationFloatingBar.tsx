import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { curations } from 'constants/mainCuration';

const CurationFloatingBar = () => {
	return (
		<div className="fixed right-10 top-[30%] z-10">
			<ul className="flex flex-col bg-[var(--color-green-700)] rounded-xl shadow-xl items-center justify-center text-center text-[var(--color-Background)] space-y-8 py-6 px-2">
				{curations.map((info, index) => (
					<li key={index} className="min-w-[130px]">
						<a
							key={index}
							href={info.url}
							className="flex flex-col items-center justify-center"
						>
							<FontAwesomeIcon
								icon={info.logoIconImage}
								className={`w-16 h-16 my-2 hover:scale-[1.08] transition`}
							/>
							<span className="text-white">{info.category}</span>
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default CurationFloatingBar;
