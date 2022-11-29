import { useEffect, useState } from 'react';
import MyPageLayout from '@components/MyPage/MyPageLayout';
import BreadCrumb from '@components/common/BreadCrumb';
import { MYPAGE_MENU } from 'constants/MyPage';
import { MyPageTitle } from './MyPageTitle';
import API from 'apis/MyPage/index';
import { IMyQuestion } from 'types/MyPage';
import { useRouter } from 'next/router';
import { getTimeBefore } from 'utils/getTimeBefore';
import { Wrapper } from '@components/Questions/QuestionBox';

const menu = [MYPAGE_MENU.MY_QNA];

const MyQnA = () => {
	const router = useRouter();
	const [qna, setQna] = useState<IMyQuestion[]>([]);
	// 질문 불러오기.

	const handleClick = (questionId: number) => () => {
		if (!questionId) return;
		router.push(`/questions/${questionId}`);
	};
	// TODO. apicall 부분 customhook으로 빼기
	useEffect(() => {
		API.fetchQuestions().then((res) => setQna(res.data));
	}, []);

	return (
		<MyPageLayout>
			<BreadCrumb
				category={'MY PAGE'}
				menu={menu}
				containerPadding={'1rem 0'}
			/>
			<MyPageTitle title={MYPAGE_MENU.MY_QNA} />
			<div>
				{qna.length > 0 ? (
					qna?.map((elem, index) => (
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
					))
				) : (
					<div>질문이 없습니다.</div>
				)}
			</div>
		</MyPageLayout>
	);
};

export default MyQnA;
