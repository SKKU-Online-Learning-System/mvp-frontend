import React from 'react';
import type { GetStaticPropsContext } from 'next';

import noticeAPI from '../../apis/Notices/noticesAPI';
import { Notification } from 'types/Notification';

type PropsType = {
	notice: Notification;
};

const NoticePage = ({ notice }: PropsType) => {
	if (!notice) return <div>Failed to retrieve the notice . . .</div>;

	const date = notice.createdAt.split('T')[0];

	return (
		<div className="max-w-[1200px] flex flex-col items-center justify-start p-10 mx-auto">
			<div className="w-full flex flex-col justify-center items-center border-solid border-t-[1px] border-b-[1px] border-[#393939] py-4">
				<div className="mb-3 text-3xl font-semibold">{notice.title}</div>
				<div className="flex">
					<span>No.{notice.id}</span>
					<span className="mx-3">|</span>
					<span>온라인명륜당 운영진</span>
					<span className="mx-3">|</span>
					<span>{date}</span>
					<span className="mx-3">|</span>
					<span>조회수: {notice.views}</span>
				</div>
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
