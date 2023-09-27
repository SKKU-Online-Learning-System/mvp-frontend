import React, { useState } from 'react';

import { Notification } from 'types/Notification';
import NoticeWritePage from './NoticeWritingPage';
import NoticeCardList from './NoticeCardList';

type PropsType = {
	notices: Notification[];
};

const NoticesManage = ({ notices }: PropsType) => {
	const [isWriting, setIsWriting] = useState(false);

	if (!notices) {
		return (
			<div>
				Failed to retrieve notices information. Please refresh to retrieve
				notices data again . . .
			</div>
		);
	}

	const onNoticeGenerateClick = () => {
		setIsWriting(true);
	};

	return isWriting ? (
		<NoticeWritePage setWriting={setIsWriting} />
	) : (
		<div className="w-full">
			<div className="flex items-center justify-center">
				<div className="flex flex-col items-end w-[768px] h-full py-12">
					<button
						onClick={onNoticeGenerateClick}
						className="mb-8 text-xl font-semibold rounded-lg bg-[#b3df8c] py-2 px-4 shadow-lg transition hover:bg-[#b9c7ad]"
					>
						공지 생성
					</button>
					<NoticeCardList notices={notices} />
				</div>
			</div>
		</div>
	);
};

export default NoticesManage;
