import React from 'react';

import { Notification } from 'types/Notification';
import NoticeCard from './NoticeCard';

type PropsType = {
	notices: Notification[];
};

const NoticeCardList = ({ notices }: PropsType) => {
	return (
		<ul className="w-full">
			{notices.map((notice, idx) => {
				const createdAt = notice.createdAt.split('T')[0];
				const todayTime = new Date().getTime();
				const createdTime = new Date(
					+createdAt.split('-')[0],
					+createdAt.split('-')[1],
					+createdAt.split('-')[2],
				).getTime();

				const isNew = createdTime + 1000 * 60 * 60 * 24 * 7 <= todayTime;

				return (
					<NoticeCard
						key={notice.id}
						notice={notice}
						idx={idx}
						isNew={isNew}
						createdAt={createdAt}
					/>
				);
			})}
		</ul>
	);
};

export default NoticeCardList;
