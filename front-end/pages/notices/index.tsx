import React from 'react';
import Link from 'next/link';

import { Notification } from 'types/Notification';
import noticesAPI from '../../apis/Notices/noticesAPI';
import NewIndicator from '@components/Notices/NewIndicator';

type PropsType = {
	notices: Notification[];
};

const NotificationPage = ({ notices }: PropsType) => {
	if (!notices) return <div>Failed to retrieve notifications . . .</div>;

	return (
		<div className="flex items-center justify-center">
			<div className="flex flex-col items-center justify-start w-[768px] h-full py-12">
				<h1 className="mt-2 mb-8 text-4xl font-semibold">공지사항</h1>
				<ul className="w-full border-solid border-t-2 border-[#393939]">
					{notices.map((notice, idx) => {
						const createdAt = notice.createdAt.split('T')[0];
						const todayTime = new Date().getTime();
						const createdTime = new Date(
							+createdAt.split('-')[0],
							+createdAt.split('-')[1],
							+createdAt.split('-')[2],
						).getTime();

						const isNew = todayTime - 1000 * 60 * 60 * 24 * 7 <= createdTime;

						return (
							<li
								className="border-solid border-b-[1px] border-[#aeaeae] py-3 px-6 w-full"
								key={idx}
							>
								<div className="flex items-center justify-start mb-3">
									{isNew ? <NewIndicator /> : null}
									<Link href={`/notices/${notice.id}`}>
										<h4 className="text-lg font-semibold cursor-pointer">
											{notice.title}
										</h4>
									</Link>
								</div>
								<div className="text-sm">
									<span>운영진</span>
									<span className="mx-3">|</span>
									<span>{createdAt}</span>
									<span className="mx-3">|</span>
									<span>조회수: {notice.visitCnt}</span>
								</div>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export async function getStaticProps() {
	const notices = await noticesAPI.fetchAllNotices();

	return {
		props: {
			notices,
		},
		revalidate: 5 * 60,
	};
}

export default NotificationPage;
