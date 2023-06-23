import React from 'react';

import AdminCard from './AdminCard';

const Compose = () => {
	return (
		<div
			id="contents"
			className="grid grid-cols-2 grid-rows-2 mt-14 gap-x-20 gap-y-20 pb-[100px]"
		>
			<AdminCard title="인기 컨텐츠" />
			<AdminCard title="신규 컨텐츠" />
			<AdminCard title="보안" />
			<AdminCard title="웹 개발" />
		</div>
	);
};

export default Compose;
