import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import { Notification } from 'types/Notification';
import noticesAPI from '../../../apis/Notices/noticesAPI';
import NewIndicator from '@components/Notices/NewIndicator';
import { BsCheckLg } from 'react-icons/bs';

type PropsType = {
	notice: Notification;
	idx: number;
	isNew: boolean;
	createdAt: string;
};

const NoticeCard = ({ notice, idx, isNew, createdAt }: PropsType) => {
	const onTitleClick = async (
		e: React.MouseEvent<HTMLHeadingElement>,
		id: number,
	) => {
		const noticeInfo = await noticesAPI.fetchNotice(id);
		console.log(noticeInfo);
	};

	const onDeleteClick = async (id: number) => {
		if (confirm('해당 공지사항을 정말 삭제하시겠습니까?')) {
			await noticesAPI.deleteNotice(id);
			alert('해당 공지가 삭제 완료되었습니다.');
			noticesAPI.fetchAllNotices();
		}
	};

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
					<button onClick={() => onDeleteClick(notice.id)}>삭제</button>
				</div>
			</div>
		</li>
	);
};

export default NoticeCard;
