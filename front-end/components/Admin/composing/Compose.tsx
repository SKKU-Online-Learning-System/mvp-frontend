import React from 'react';

import AdminCard from './AdminCard';

const Compose = () => {
	return (
		<div
			id="contents"
			className="grid w-full min-h-full grid-cols-2 grid-rows-2 p-10 pb-24 mt-14 gap-x-20 gap-y-20"
		>
			<AdminCard title="인기 컨텐츠" order={0} />
			<AdminCard title="신규 컨텐츠" order={1} />
			<AdminCard title="데이터 사이언스" order={2} />
			<AdminCard title="교양" order={3} />
		</div>
	);
};

export default Compose;
