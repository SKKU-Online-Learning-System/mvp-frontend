import React from 'react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import { Notification } from 'types/Notification';
import noticesAPI from '../../../apis/Notices/noticesAPI';
import NewIndicator from '@components/Notices/NewIndicator';

type PropsType = {
	notice: Notification;
	idx: number;
	isNew: boolean;
	createdAt: string;
	onNoticeChangeClick: (id: number) => void;
};

const NoticeCard = ({
	notice,
	idx,
	isNew,
	createdAt,
	onNoticeChangeClick,
}: PropsType) => {
	const router = useRouter();

	const onTitleClick = async () => {
		const title = notice.title;
		const content = notice.content;
		//Todo: 카드 공간 아래로 slide 되면서 content 확인할 수 있도록 구현
		console.log(title, content);
	};

	const onDeleteClick = async (id: number) => {
		if (confirm('해당 공지사항을 정말 삭제하시겠습니까?')) {
			try {
				await noticesAPI.deleteNotice(id);
			} catch (err: any) {
				alert('공지 삭제 과정에서 알 수 없는 에러가 발생했습니다.');
			}
			router.reload();
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
							onClick={() => onTitleClick()}
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
					<button onClick={() => onNoticeChangeClick(notice.id)}>수정</button>
					<span className="mx-2">|</span>
					<button onClick={() => onDeleteClick(notice.id)}>삭제</button>
				</div>
			</div>
		</li>
	);
};

export default NoticeCard;
