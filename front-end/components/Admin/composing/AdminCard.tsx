import React, { ReactElement, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRotateForward } from '@fortawesome/free-solid-svg-icons';

import API from '../../../apis/Admin/adminAPI';
import { INewCourseInfo, ICourseRetrieveInfo } from 'types/Admin/Index';
import { Category1Seed } from '../../../constants/category1.seed';
// import { usePopularCoursesFetch } from 'query/hooks/Admin/index';
// Todo: react-query 사용법 알아보고 적용시키기
// Todo: Main Page Popular Contents도 해당 query hook으로 바꿀 것

const selectBtnStyle =
	'ml-4 p-2 text-lg font-semibold bg-[#e2e3e4] rounded-lg hover:bg-[#929394] duration-150';
const tableContentsStyle = 'flex items-center mt-6 text-center justify-normal';
const optionStyle = 'font-extrabold text-xl focus:border-0';

const AdminCard = ({ title }: { title: string }): ReactElement => {
	const [contents, setContents] = useState<ICourseRetrieveInfo[]>([]);
	const [newContents, setNewContents] = useState<INewCourseInfo[]>([]);
	const [disabled, setDisabled] = useState<boolean>(false);

	const handleContentsRetrieve = async (title: string) => {
		const data = await API.fetchPopularContentsInfo(title);
		return data;
	};
	const handleNewContentsRetrieve = async () => {
		const data = await API.fetchNewContentsInfo();
		return data;
	};

	const onRefreshBtnClick = () => {
		if (!disabled) {
			setDisabled(true);
			setTimeout(() => {
				setDisabled(false);
			}, 60 * 1000);
		}
	};

	useEffect(() => {
		const fetchData = async () => {
			const popularContents =
				title === '인기 컨텐츠'
					? await handleContentsRetrieve('')
					: await handleContentsRetrieve(title);
			const recentContents = await handleNewContentsRetrieve();

			setContents(popularContents);
			setNewContents(recentContents);
		};

		fetchData();
	}, []);

	// Todo: 선택 버튼 function 제작 -> Backend 측에 Main Banner 관련 API 제작 요청
	return (
		<div className="flex flex-col h-full p-12 shadow-xl rounded-xl bg-[#fff] min-w-[768px]">
			<h3 className="pl-10 mb-10 text-3xl font-extrabold select-none">
				{title === '인기 컨텐츠' ? (
					<div>
						<button
							className="mr-4 transition-transform hover:rotate-45 disabled:rotate-0 disabled:text-[var(--color-grey-300)]"
							onClick={onRefreshBtnClick}
							disabled={disabled}
						>
							<FontAwesomeIcon icon={faArrowRotateForward} />
						</button>
						<span>{title}</span>
					</div>
				) : title === '신규 컨텐츠' ? (
					title
				) : (
					<select className="px-2 py-1 transition duration-200 rounded-xl hover:shadow-[1px_2px_4px_-1px]">
						{Category1Seed.map((item, idx) => {
							return (
								<option key={idx} className={optionStyle} value={item.id}>
									{item.name}
								</option>
							);
						})}
					</select>
				)}
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
					{title === '신규 컨텐츠'
						? newContents.map((item, idx) => {
								return (
									<tr key={idx} className={tableContentsStyle}>
										<td className="w-1/5">{item.createdAt.split('T')[0]}</td>
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
						: contents.map((item, idx) => {
								return (
									<tr key={idx} className={tableContentsStyle}>
										<td className="w-1/12">{idx + 1}</td>
										<td className="w-1/5">
											{item.courseCreatedAt.split('T')[0]}
										</td>
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
						  })}
				</tbody>
			</table>
		</div>
	);
};

export default AdminCard;
