import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRotateForward } from '@fortawesome/free-solid-svg-icons';

import {
	usePopularCoursesFetch,
	useNewCoursesFetch,
} from 'query/hooks/Admin/index';

const selectBtnStyle =
	'ml-4 p-2 text-lg font-semibold bg-[#e2e3e4] rounded-lg hover:bg-[#929394] duration-150';
const tableContentsStyle = 'flex items-center mt-6 text-center justify-normal';

const AdminCard = ({ title }: { title: string }) => {
	const { data: popularContents, isLoading: isPopularCoursesLoading } =
		usePopularCoursesFetch(title === '인기 컨텐츠' ? '' : title);
	const { data: newContents, isLoading: isNewCoursesLoading } =
		useNewCoursesFetch();
	const [disabled, setDisabled] = useState<boolean>(false);

	const onRefreshBtnClick = () => {
		if (!disabled) {
			setDisabled(true);
			setTimeout(() => {
				setDisabled(false);
			}, 60 * 1000);
		}
	};

	if (isPopularCoursesLoading || isNewCoursesLoading) {
		return <h2>Loading . . .</h2>;
	}

	// Todo: 선택 버튼 기능 function 제작 및 Backend API와 연동
	return (
		<div className="flex flex-col h-full p-10 bg-white shadow-xl rounded-xl">
			<h3 className="pl-10 mb-10 text-3xl font-extrabold select-none">
				{title === '인기 컨텐츠' ? (
					<div>
						<button
							className="mr-4 rounded-full transition-transform hover:rotate-45 disabled:rotate-0 disabled:text-[var(--color-grey-300)]"
							onClick={onRefreshBtnClick}
							disabled={disabled}
						>
							<FontAwesomeIcon icon={faArrowRotateForward} />
						</button>
						<span>{title}</span>
					</div>
				) : (
					title
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
						? newContents?.map((item, idx) => {
								return (
									<tr key={idx} className={tableContentsStyle}>
										<td className="w-1/5">{item.createdAt.split('T')[0]}</td>
										<td className="w-1/3">{item.title}</td>
										<td className="w-1/6 ">{item.instructor}</td>
										<button
											// onClick={handleNewContentsRetrieve}
											className={selectBtnStyle}
										>
											선택
										</button>
									</tr>
								);
						  })
						: popularContents?.map((item, idx) => {
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
											// onClick={handleNewContentsRetrieve}
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
