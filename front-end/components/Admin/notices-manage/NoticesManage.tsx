import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Notification } from 'types/Notification';
import noticesAPI from '../../../apis/Notices/noticesAPI';
import NewIndicator from '@components/Notices/NewIndicator';

const NoticesManage = () => {
	const router = useRouter();

	const [notices, setNotices] = useState<Notification[]>();

	useEffect(() => {
		async function fetcher() {
			const data = await noticesAPI.fetchAllNotices();
			setNotices(data);
		}
		fetcher();
	}, [notices]);

	const onDeleteClick = async (id: number) => {
		await noticesAPI.deleteNotice(id);
		alert('해당 공지가 삭제 완료되었습니다.');
		noticesAPI.fetchAllNotices();
	};

	if (!notices) return <div>Failed to retrieve notice data . . .</div>;

	return (
		<div className="w-full">
			<div className="flex items-center justify-center">
				<div className="flex flex-col items-center justify-start w-[768px] h-full py-12">
					<ul className="w-full">
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
									className="w-full px-6 py-3 bg-[var(--color-Surface)] rounded-xl mb-4"
									key={idx}
								>
									<div className="flex justify-between">
										<div>
											<div className="flex items-center justify-start mb-3">
												{isNew ? <NewIndicator /> : null}
												<Link href={`/notices/${notice.id}`}>
													<h4 className="text-lg font-semibold cursor-pointer">
														{notice.title}
													</h4>
												</Link>
											</div>
											<div className="text-sm">
												<span>No.{notice.id}</span>
												<span className="mx-3">|</span>
												<span>온라인명륜당 운영진</span>
												<span className="mx-3">|</span>
												<span>{createdAt}</span>
												<span className="mx-3">|</span>
												<span>조회수: {notice.visitCnt}</span>
											</div>
										</div>
										<div className="text-sm">
											<button>수정</button>
											<span className="mx-2">|</span>
											<button onClick={() => onDeleteClick(notice.id)}>
												삭제
											</button>
										</div>
									</div>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default NoticesManage;
