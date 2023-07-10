import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRotateForward } from '@fortawesome/free-solid-svg-icons';

import {
	usePopularCoursesFetch,
	useNewCoursesFetch,
} from 'query/hooks/Admin/index';
import adminAPI from '../../../apis/Admin/adminAPI';

type PropType = { title: string; order: number };

const AdminCard = ({ title, order }: PropType) => {
	const { data: newContents, isLoading: isNewCoursesLoading } =
		useNewCoursesFetch();
	const { data: popularContents, isLoading: isPopularCoursesLoading } =
		usePopularCoursesFetch(title === '인기 컨텐츠' ? '' : title);

	const [disabled, setDisabled] = useState<boolean>(false);
	const numberOfCourses =
		title === '신규 컨텐츠' ? newContents?.length : popularContents?.length;
	const [sequence, setSequence] = useState<Array<number>>(() => {
		const arr = [];
		for (let i = 0; i < numberOfCourses!; i++) {
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
		if (
			e.target.value !== '1' &&
			e.target.value !== '2' &&
			e.target.value !== '3' &&
			e.target.value !== '4' &&
			e.target.value !== '5'
		) {
			alert('강좌 순서 값은 1에서 5 사이 값으로 입력해주시기 바랍니다.');
			e.target.value = '';
			return;
		}
		const id = +e.target.id;
		const arr = [...sequence];
		arr[id] = +e.target.value;
		setSequence(arr);
	};
	const onSaveClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
		const seen = new Set();
		const duplicates = sequence.filter(
			(num) => seen.size === seen.add(num).size,
		);

		if (duplicates.length !== 0) {
			alert('강좌 순서 설정값 중 중복값이 있습니다. 재입력 해주시기 바랍니다.');
			return;
		}
		for (let i = 0; i < numberOfCourses!; i++) {
			if (sequence[i] < 1 || sequence[i] > 5) {
				alert('강좌 순서는 1~5인 값으로 입력해주시기 바랍니다.');
			}
		}

		const objs = newContents?.forEach((content, idx) => {
			return {
				courseId: content.id,
				order,
				sequence: sequence[idx],
			};
		});
		console.log(objs);
		return;

		const res = await adminAPI.sendPopularCourseOrders([
			{
				courseId: 1,
				order,
				sequence: sequence[0],
			},
			{
				courseId: 2,
				order,
				sequence: sequence[1],
			},
			{
				courseId: 3,
				order,
				sequence: sequence[2],
			},
			{
				courseId: 4,
				order,
				sequence: sequence[3],
			},
			{
				courseId: 5,
				order,
				sequence: sequence[4],
			},
		]);
		console.log(res);
	};

	// Todo: loading UI 변경할 것
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
					className="ml-6 p-2 text-lg font-semibold bg-[#b3df8c] rounded-lg hover:bg-[#b9c7ad] duration-150"
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
