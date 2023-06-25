import React, { ReactElement, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRotateForward } from '@fortawesome/free-solid-svg-icons';

import API from '../../../apis/Admin/adminAPI';
import { INewCourseInfo, ICourseRetrieveInfo } from 'types/Admin/Index';
import { usePopularCoursesFetch } from 'query/hooks/Admin/index';
// Todo: react-query 사용법 알아보고 적용시키기
// Todo: Main Page Popular Contents도 해당 query hook으로 바꿀 것

const selectBtnStyle =
	'ml-4 p-2 text-lg font-semibold bg-[#e2e3e4] rounded-lg hover:bg-[#929394] duration-150';
const tableContentsStyle = 'flex items-center mt-6 text-center justify-normal';

const AdminCard = ({ title }: { title: string }): ReactElement => {
	const [popContents, setPopContents] = useState<ICourseRetrieveInfo[]>([]);
	const [newContents, setNewContents] = useState<INewCourseInfo[]>([]);
	const [cat1Contents, setCat1Contents] = useState<ICourseRetrieveInfo[]>([]);
	const [cat2Contents, setCat2Contents] = useState<ICourseRetrieveInfo[]>([]);

	const handlePopularContentsRetrieve = async () => {
		const res = await API.fetchPopularContentsInfo();
		return res;
	};
	const handleNewContentsRetrieve = async () => {
		const res = await API.fetchNewContentsInfo();
		return res;
	};
	const handleCat1ContentsRetrieve = async () => {
		const res = await API.fetchCat1ContentsInfo();
		return res;
	};
	const handleCat2ContentsRetrieve = async () => {
		const res = await API.fetchCat2ContentsInfo();
		return res;
	};

	const onRefreshBtnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		handlePopularContentsRetrieve();
		// 1분 간 disabled 시키는 기능 구현
	};

	useEffect(() => {
		const fetchData = async () => {
			const popularContents = await handlePopularContentsRetrieve();
			const recentContents = await handleNewContentsRetrieve();
			const cat1Contents = await handleCat1ContentsRetrieve();
			const cat2Contents = await handleCat2ContentsRetrieve();

			setPopContents(popularContents);
			setNewContents(recentContents);
			setCat1Contents(cat1Contents);
			setCat2Contents(cat2Contents);
		};

		fetchData();
	}, []);

	// Todo: 인기 카테고리 title은 나중에 drop down으로 변경
	// Todo: 인기 카테고리 Refresh 버튼 한 번 클릭 시 1분 간 disabled
	// Todo: 선택 버튼 function 제작 -> Backend 측에 Main Banner 관련 API 제작 요청
	return (
		<div className="flex flex-col h-full p-12 shadow-xl rounded-xl bg-[#fff] min-w-[768px]">
			<h3 className="pl-10 mb-10 text-3xl font-extrabold select-none">
				{title === '인기 컨텐츠' ? (
					<button
						className="mr-6 transition-transform hover:rotate-45 disabled:rotate-0 disabled:text-[var(--color-grey-300)]"
						onClick={onRefreshBtnClick}
					>
						<FontAwesomeIcon icon={faArrowRotateForward} />
					</button>
				) : (
					''
				)}
				{title}
			</h3>
			<table className="w-full h-fit">
				<thead>
					<tr className="flex text-lg select-none justify-normal">
						{title !== '신규 컨텐츠' ? <th className="w-1/12">순위</th> : ''}
						<th className="w-1/5">등록일자</th>
						<th className="w-1/3">강좌명</th>
						<th className="w-1/6 ">강사명</th>
						{title !== '신규 컨텐츠' ? <th className="w-1/12">수강생</th> : ''}
						<th></th>
					</tr>
				</thead>
				<tbody className="flex flex-col">
					{title === '인기 컨텐츠'
						? popContents.map((item, idx) => {
								const date = item.courseCreatedAt.split('T')[0];
								return (
									<tr key={idx} className={tableContentsStyle}>
										<td className="w-1/12">{idx + 1}</td>
										<td className="w-1/5">{date}</td>
										<td className="w-1/3">{item.courseTitle}</td>
										<td className="w-1/6 ">{item.instructorName}</td>
										<td className="w-1/12">{item.enrollmentCount}</td>
										<button
											onClick={handleNewContentsRetrieve}
											className={selectBtnStyle}
										>
											선택
										</button>
									</tr>
								);
						  })
						: ''}
					{title === '신규 컨텐츠'
						? newContents.map((item, idx) => {
								const date = item.createdAt.split('T')[0];
								return (
									<tr key={idx} className={tableContentsStyle}>
										<td className="w-1/5">{date}</td>
										<td className="w-1/3">{item.title}</td>
										<td className="w-1/6 ">{item.instructor}</td>
										<button
											onClick={handleNewContentsRetrieve}
											className={selectBtnStyle}
										>
											선택
										</button>
									</tr>
								);
						  })
						: ''}
					{title === '데이터 사이언스'
						? cat1Contents.map((item, idx) => {
								const date = item.courseCreatedAt.split('T')[0];
								return (
									<tr key={idx} className={tableContentsStyle}>
										<td className="w-1/12">{idx + 1}</td>
										<td className="w-1/5">{date}</td>
										<td className="w-1/3">{item.courseTitle}</td>
										<td className="w-1/6 ">{item.instructorName}</td>
										<td className="w-1/12">{item.enrollmentCount}</td>
										<button
											onClick={handleNewContentsRetrieve}
											className={selectBtnStyle}
										>
											선택
										</button>
									</tr>
								);
						  })
						: ''}
					{title === '교양'
						? cat2Contents.map((item, idx) => {
								const date = item.courseCreatedAt.split('T')[0];
								return (
									<tr key={idx} className={tableContentsStyle}>
										<td className="w-1/12">{idx + 1}</td>
										<td className="w-1/5">{date}</td>
										<td className="w-1/3">{item.courseTitle}</td>
										<td className="w-1/6 ">{item.instructorName}</td>
										<td className="w-1/12">{item.enrollmentCount}</td>
										<button
											onClick={handleNewContentsRetrieve}
											className={selectBtnStyle}
										>
											선택
										</button>
									</tr>
								);
						  })
						: ''}
				</tbody>
			</table>
		</div>
	);
};

export default AdminCard;
