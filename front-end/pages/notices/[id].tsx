import React from 'react';
import type { GetStaticPropsContext } from 'next';

import noticeAPI from '../../apis/Notices/noticesAPI';
import { Notification } from 'types/Notification';
import NoticeMetaDataBar from '@components/Notices/NoticeMetaDataBar';

type PropsType = {
	notice: Notification;
};

const NoticePage = ({ notice }: PropsType) => {
	return (
		<div className="max-w-[1200px] flex flex-col items-center justify-start p-10 mx-auto">
			<div className="w-full flex flex-col justify-center items-center border-solid border-t-[1px] border-b-[1px] border-[#393939] py-4">
				<div className="mb-3 text-3xl font-semibold">{notice.title}</div>
				<NoticeMetaDataBar notice={notice} />
			</div>
			<p className="p-10">{notice.content}</p>
		</div>
	);
};

export async function getStaticProps({ params }: GetStaticPropsContext) {
	if (!params || !params.id) return { props: {} };

	const id = +params.id;
	const notice = await noticeAPI.fetchNotice(id);

	return { props: { notice } };
}

export async function getStaticPaths() {
	return { paths: [], fallback: 'blocking' };
}

export default NoticePage;
