import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRotateForward } from '@fortawesome/free-solid-svg-icons';

import { usePopularCoursesFetch } from 'query/hooks/Admin/index';
import adminAPI from '../../../apis/Admin/adminAPI';
import { ICourseOrdersInfo } from '../../../types/Admin/Index';

type PropsType = { title: string; order: number };

const PopularContentsCard = ({ title, order }: PropsType) => {
	const { data: popularContents, isLoading: isPopularCoursesLoading } =
		usePopularCoursesFetch(title === '인기 컨텐츠' ? '' : title);

	const [disabled, setDisabled] = useState<boolean>(false);
	const [objs, setObjs] = useState<Array<ICourseOrdersInfo>>([]);

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
			e.target.valueAsNumber !== 1 &&
			e.target.valueAsNumber !== 2 &&
			e.target.valueAsNumber !== 3 &&
			e.target.valueAsNumber !== 4 &&
			e.target.valueAsNumber !== 5 &&
			e.target.value !== '' // For deletion
		) {
			alert('강좌 순서 값은 1에서 5 사이 값으로 입력해주시기 바랍니다.');
			e.target.value = '';
			return;
		}

		if (e.target.value === '') {
			// Todo: Delete an element corresponding to idx of the row.
		} else {
			const obj = {
				courseId: popularContents![+e.target.id].id,
				order,
				sequence: e.target.valueAsNumber,
			};
			const arr = [...objs];
			arr.push(obj);
			setObjs(arr);
		}
	};

	const onSaveClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
		const seen = new Set();
		const duplicates = objs.filter(
			(obj) => seen.size === seen.add(obj.sequence).size,
		);

		if (duplicates.length !== 0) {
			alert('강좌 순서 설정값 중 중복값이 있습니다. 재입력 해주시기 바랍니다.');
			return;
		}

		try {
			await adminAPI.sendPopularCourseOrders(objs);
			alert('편성 정보가 업데이트 되었습니다.');
		} catch (err) {
			throw new Error(
				'Error occured during updating main page course recommendation layout.',
			);
		}
	};

	if (isPopularCoursesLoading) {
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
						<th className="w-1/12">순위</th>
						<th className="w-1/5">등록일자</th>
						<th className="w-1/3">강좌명</th>
						<th className="w-1/6 ">강사명</th>
						<th className="w-1/12">수강생</th>
						<th className="w-1/12">순서</th>
					</tr>
				</thead>
				<tbody className="flex flex-col">
					{popularContents?.map((item, idx) => {
						return (
							<tr
								key={idx}
								className="flex items-center justify-center mt-6 text-center"
							>
								<td className="w-1/12">{idx + 1}</td>
								<td className="w-1/5">{item.courseCreatedAt.split('T')[0]}</td>
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

export default PopularContentsCard;
