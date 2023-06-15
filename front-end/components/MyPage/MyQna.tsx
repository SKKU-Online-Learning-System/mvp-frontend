import React from 'react';
import { useRouter } from 'next/router';

import MyPageLayout from '@components/MyPage/MyPageLayout';
import BreadCrumb from '@components/common/BreadCrumb';
import { getTimeBefore } from 'utils/getTimeBefore';
import { useMyQnaFetch } from 'query/hooks/MyPage';
import { MYPAGE_MENU } from 'constants/MyPage';
import { MyPageTitle } from './MyPageTitle';

const menu = [MYPAGE_MENU.MY_QNA];

const MyQnA = () => {
	const router = useRouter();

	const { data: qna, isLoading } = useMyQnaFetch();

	const handleClick = (questionId: number) => () => {
		if (!questionId) return;
		router.push(`/questions/${questionId}`);
	};

	if (isLoading) return <div>Loading...</div>;
	if (qna?.length === 0) return <div>질문이 없습니다.</div>;

	return (
		<MyPageLayout>
			<BreadCrumb
				category={'MY PAGE'}
				menu={menu}
				containerPadding={'1rem 0'}
			/>
			<MyPageTitle title={MYPAGE_MENU.MY_QNA} />
			<div>
				{qna?.map((elem, index) => (
					<li
						className="hover:bg-[#f8f9fa] hover:duration-300 m-auto cursor-pointer p-5 border-b-[1px] border-solid border-[#dee2e6] flex w-[1000px] list-none text-ellipsis"
						key={index}
						onClick={handleClick(elem.id)}
					>
						<div className="w-[85%]">
							<header className="font-bold">{elem.title || '제목없음'}</header>
							<section className="text-[0.8rem] text-[#616568] my-[10px] mx-0 text-ellipsis overflow-hidden break-words line-clamp-3">
								{elem.contents}
							</section>
							<div className="text-[0.8rem] text-[#858a8d]">
								{`${'이름'} · ${getTimeBefore(elem.createdAt)} · ${
									elem.course.title
								}`}
							</div>
						</div>
					</li>
				))}
			</div>
		</MyPageLayout>
	);
};

export default MyQnA;
