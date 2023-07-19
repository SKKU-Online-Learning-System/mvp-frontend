import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { curations } from 'constants/mainCuration';

const CurationFloatingBar = () => {
	return (
		<div className="mt-8">
			<ul className="flex items-center justify-center text-center space-x-14">
				{curations.map((info, index) => (
					<li key={index} className="min-w-[130px]">
						<a
							key={index}
							href={info.url}
							className="flex flex-col items-center justify-center"
						>
							<FontAwesomeIcon
								icon={info.logoIconImage}
								className={`w-16 h-16 text-[${info.color}] my-2 hover:scale-[1.08] transition`}
							/>
							<span className="text-[var(--color-onBackground)]">
								{info.category}
							</span>
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default CurationFloatingBar;
