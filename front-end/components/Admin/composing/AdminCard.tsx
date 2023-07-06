import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRotateForward } from '@fortawesome/free-solid-svg-icons';

import {
	usePopularCoursesFetch,
	useNewCoursesFetch,
} from 'query/hooks/Admin/index';

const AdminCard = ({ title }: { title: string }) => {
	const { data: newContents, isLoading: isNewCoursesLoading } =
		useNewCoursesFetch();
	const { data: popularContents, isLoading: isPopularCoursesLoading } =
		usePopularCoursesFetch(title === '인기 컨텐츠' ? '' : title);

	const [disabled, setDisabled] = useState<boolean>(false);
	const dataLength =
		title === '신규 컨텐츠' ? newContents?.length : popularContents?.length;
	const [order, setOrder] = useState<Array<number>>(() => {
		const arr = [];
		for (let i = 0; i < dataLength!; i++) {
			arr.push(0);
		}
		return arr;
	});

	const onRefreshBtnClick = () => {
		if (!disabled) {
			setDisabled(true);
			setTimeout(() => {
				setDisabled(false);
			}, 60 * 1000);
			// Todo: react-query 불러올 것
		}
	};
	const onOrderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const id = +e.target.id;
		let arr = [...order];
		arr[id] = +e.target.value;
		setOrder(arr);
		console.log(arr);
	};
	const onSaveClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		// Todo1: order 순서에 따라 백엔드에 인기컨텐츠 5개 백엔드에 전달 (courseID, thumbnailLink, order)
		// Todo2: 백엔드 API 제작
		// Todo3: Admin이 설정한 순서대로 정렬된 강좌 정보 받는 React Query 제작
		// Todo4: Todo3에서 제작한 query 사용하여 메인페이지 파일(/pages/index.tsx)에서 적절하게 배치
	};

	if (isPopularCoursesLoading || isNewCoursesLoading) {
		return <h2>Loading . . .</h2>;
	}
	return (
		<div className="flex flex-col h-full p-10 bg-white shadow-xl rounded-xl">
			<h3 className="flex justify-between pl-10 mb-10 text-3xl font-extrabold select-none">
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
					<span>{title}</span>
				)}
				<button
					onClick={onSaveClick}
					className="ml-6 p-2 text-lg font-semibold bg-[#dbe9cf] rounded-lg hover:bg-[#8ac13f] duration-150"
				>
					순서 저장
				</button>
			</h3>
			<table className="w-full h-fit">
				<thead>
					<tr className="flex justify-center text-lg select-none">
						{title !== '신규 컨텐츠' ? <th className="w-1/12">순위</th> : ''}
						<th className="w-1/5">등록일자</th>
						<th className="w-1/3">강좌명</th>
						<th className="w-1/6 ">강사명</th>
						{title !== '신규 컨텐츠' ? <th className="w-1/12">수강생</th> : ''}
						<th className="w-1/12">순서</th>
					</tr>
				</thead>
				<tbody className="flex flex-col">
					{title === '신규 컨텐츠'
						? newContents?.map((item, idx) => {
								return (
									<tr
										key={idx}
										className="flex items-center justify-center mt-6 text-center"
									>
										<td className="w-1/5">{item.createdAt.split('T')[0]}</td>
										<td className="w-1/3">{item.title}</td>
										<td className="w-1/6 ">{item.instructor}</td>
										<input
											placeholder={`${idx + 1}`}
											onChange={onOrderChange}
											className="w-1/12 text-center rounded-lg outline-none border-[1px] border-solid border-[#aeaeae]"
											id={`${idx}`}
											type="number"
											min="0"
											max="5"
										/>
									</tr>
								);
						  })
						: popularContents?.map((item, idx) => {
								return (
									<tr
										key={idx}
										className="flex items-center justify-center mt-6 text-center"
									>
										<td className="w-1/12">{idx + 1}</td>
										<td className="w-1/5">
											{item.courseCreatedAt.split('T')[0]}
										</td>
										<td className="w-1/3">{item.courseTitle}</td>
										<td className="w-1/6 ">{item.instructorName}</td>
										<td className="w-1/12">{item.enrollmentCount}</td>
										<input
											placeholder={`${idx + 1}`}
											onChange={onOrderChange}
											className="w-1/12 text-center rounded-lg outline-none border-[1px] border-solid border-[#aeaeae]"
											id={`${idx}`}
											type="number"
											min="0"
											max="5"
										/>
									</tr>
								);
						  })}
				</tbody>
			</table>
		</div>
	);
};

export default AdminCard;
