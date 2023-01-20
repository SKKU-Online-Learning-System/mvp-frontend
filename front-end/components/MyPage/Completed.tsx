import MyPageLayout from '@components/MyPage/MyPageLayout';
import BreadCrumb from '@components/common/BreadCrumb';
import { MyPageTitle } from './MyPageTitle';
import { MYPAGE_MENU } from 'constants/MyPage';
import { GridWrapper } from './History';
import { useRouter } from 'next/router';
import { useCompletedCourseFetch } from 'query/hooks/MyPage';

const menu = [MYPAGE_MENU.COMPLETED_WATCHING_LECTURES];

const Completed = () => {
	const router = useRouter();

	const { data: completedCourseList, isLoading } = useCompletedCourseFetch();

	const handleClick = (courseId: number) => () => {
		router.push(`/courses/${courseId}`);
	};

	if (isLoading) return <div>isLoading...</div>;

	return (
		<MyPageLayout>
			<BreadCrumb
				category={'MY PAGE'}
				menu={menu}
				containerPadding={'1rem 0'}
			/>
			<MyPageTitle title={MYPAGE_MENU.COMPLETED_WATCHING_LECTURES} />
			<GridWrapper>
				{!completedCourseList?.length ? (
					<div>완료된 강의가 없습니다.</div>
				) : (
					completedCourseList?.map((elem, index) => (
						<div
							className="wrapper"
							onClick={handleClick(elem.course.id)}
							key={index}
						>
							<img
								className="image"
								width={'100%'}
								src={elem.course.thumbnail}
							></img>
							<div className="title">{elem.course.title}</div>
						</div>
					))
				)}
			</GridWrapper>
		</MyPageLayout>
	);
};

export default Completed;
