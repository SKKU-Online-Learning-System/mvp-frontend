import React from 'react';

import NewContentsCard from './NewContentsCard';
import PopularContentsCard from './PopularContentsCard';

const Compose = () => {
	return (
		<div className="grid w-full min-h-full grid-cols-2 grid-rows-2 p-10 pb-24 mt-14 gap-x-20 gap-y-20">
			<PopularContentsCard title="인기 컨텐츠" order={0} />
			<NewContentsCard title="신규 컨텐츠" />
			<PopularContentsCard title="인공지능" order={2} />
			<PopularContentsCard title="교양" order={3} />
		</div>
	);
};

export default Compose;
