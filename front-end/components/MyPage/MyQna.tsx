import MyPageLayout from '@components/MyPage/MyPageLayout';
import BreadCrumb from '@components/common/BreadCrumb';
import { MYPAGE_MENU } from 'constants/MyPage';
import { MyPageTitle } from './MyPageTitle';
import { useRouter } from 'next/router';
import { getTimeBefore } from 'utils/getTimeBefore';
import { Wrapper } from '@components/Questions/QuestionBox';
import { useMyQnaFetch } from 'query/hooks/MyPage';
import React from 'react';
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
					<Wrapper
						style={{ width: '100%' }}
						key={index}
						onClick={handleClick(elem.id)}
					>
						<div className="left">
							<header className="title">{elem.title || '제목없음'}</header>
							<section className="contents">{elem.contents}</section>
							<div className="info">
								{`${'이름'} · ${getTimeBefore(elem.createdAt)} · ${
									elem.course.title
								}`}
							</div>
						</div>
					</Wrapper>
				))}
			</div>
		</MyPageLayout>
	);
};

export default MyQnA;
