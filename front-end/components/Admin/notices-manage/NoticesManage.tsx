import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import { Notification } from 'types/Notification';
import noticesAPI from '../../../apis/Notices/noticesAPI';
import NewIndicator from '@components/Notices/NewIndicator';

type PropsType = {
	notices: Notification[];
};

const NoticesManage = ({ notices }: PropsType) => {
	if (!notices) {
		return (
			<div>
				Failed to retrieve notices information. Please refresh to retrieve
				notices data again . . .
			</div>
		);
	}

	const onTitleClick = (
		e: React.MouseEvent<HTMLHeadingElement>,
		id: number,
	) => {
		return;
	};

	const onDeleteClick = async (id: number) => {
		await noticesAPI.deleteNotice(id);
		alert('해당 공지가 삭제 완료되었습니다.');
		noticesAPI.fetchAllNotices();
	};

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

												<h4
													onClick={(e) => onTitleClick(e, notice.id)}
													className="text-lg font-semibold cursor-pointer"
												>
													{notice.title}
													<FontAwesomeIcon
														icon={faAngleDown}
														className={`ml-2 transition`}
													/>
												</h4>
											</div>
											<div className="text-sm">
												<span>No.{notice.id}</span>
												<span className="mx-3">|</span>
												<span>온라인명륜당 운영진</span>
												<span className="mx-3">|</span>
												<span>{createdAt}</span>
												<span className="mx-3">|</span>
												<span>조회수: {notice.views}</span>
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
