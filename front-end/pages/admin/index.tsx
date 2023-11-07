import React, { useState } from 'react';
import Head from 'next/head';

import ContentsManage from '../../components/Admin/contents-manage/ContentsManage';
import NoticesManage from '@components/Admin/notices-manage/NoticesManage';
import UserRanking from '../../components/Admin/user-ranking/UserRanking';
import SideMenuButtonList from '@components/Admin/SideMenuButtonList';
import Compose from '../../components/Admin/composing/Compose';
import noticesAPI from '../../apis/Notices/noticesAPI';
import { Notification } from 'types/Notification';
import adminAPI from '../../apis/Admin/adminAPI';
import menus from '../../constants/Admin/index';
import {
	CourseInfo,
	ICourseRetrieveInfo,
	INewCourseInfo,
} from 'types/Admin/Index';

type PropsType = {
	coursesInfo: [
		ICourseRetrieveInfo[],
		INewCourseInfo[],
		ICourseRetrieveInfo[],
		ICourseRetrieveInfo[],
	];
	allCourses: CourseInfo[];
	notices: Notification[];
};

const titles = ['인기 컨텐츠', '신규 컨텐츠', '인공지능', '교양'];

const AdminIndex = ({
	coursesInfo,
	allCourses,
	notices,
}: PropsType): JSX.Element => {
	const [title, setTitle] = useState<string>(menus[0].title);
	const [opens, setOpens] = useState<boolean[]>([true, false, false, false]);

	return (
		<section className="min-h-full">
			<Head>
				<title>온라인명륜당 | Admin</title>
				<meta name="description" content="온라인명륜당 Admin 페이지" />
			</Head>
			<section>
				<h2 className="select-none w-full bg-[var(--color-Primary)] p-8 font-['Gugi'] text-2xl text-white border-b-2 border-solid border-[var(--color-Background)]">
					{`Admin > ${title}`}
				</h2>
				<div className="flex min-h-screen">
					<div className="w-1/6 min-h-full bg-[var(--color-Primary)] min-w-[280px]">
						<SideMenuButtonList
							opens={opens}
							setOpens={setOpens}
							setTitle={setTitle}
						/>
					</div>
					{opens[0] ? (
						<Compose coursesInfo={coursesInfo} titles={titles} />
					) : opens[1] ? (
						<ContentsManage allCourses={allCourses} />
					) : opens[2] ? (
						<NoticesManage notices={notices} />
					) : opens[3] ? (
						<UserRanking />
					) : null}
				</div>
			</section>
		</section>
	);
};

export async function getServerSideProps(): Promise<{
	props: {
		coursesInfo: (ICourseRetrieveInfo[] | INewCourseInfo[])[];
		allCourses: CourseInfo[];
		notices: Notification[];
	};
}> {
	const mostPopularCourses = await adminAPI.fetchPopularContentsInfo('');
	const newCourses = await adminAPI.fetchNewContentsInfo();
	const popularCourses1 = await adminAPI.fetchPopularContentsInfo(titles[2]);
	const popularCourses2 = await adminAPI.fetchPopularContentsInfo(titles[3]);
	const coursesInfo = [
		mostPopularCourses,
		newCourses,
		popularCourses1,
		popularCourses2,
	];

	const allCourses = await adminAPI.fetchAllCourses();

	const notices = await noticesAPI.fetchAllNotices();

	return { props: { coursesInfo, allCourses, notices } };
}

export default AdminIndex;
