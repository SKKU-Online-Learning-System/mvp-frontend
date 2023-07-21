import React, { useState } from 'react';

import CardHeader from './CardHeader';
import CardPager from './CardPager';
import { usePopularCoursesFetch } from 'query/hooks/Admin/index';
import { ICourseOrdersInfo } from '../../../types/Admin/Index';

type PropsType = { title: string; order: number };

const PopularContentsCard = ({ title, order }: PropsType) => {
	const [objs, setObjs] = useState<Array<ICourseOrdersInfo>>([]);
	const _title = title === '인기 컨텐츠' ? '' : title;
	const { data: popularContents, isLoading } = usePopularCoursesFetch(_title);

	if (isLoading) return <h2>Loading . . .</h2>;
	if (!popularContents) return <div>Failed to retrieve data . . .</div>;

	const onOrderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const elementId = +e.currentTarget.id;

		if (
			e.target.valueAsNumber !== 1 &&
			e.target.valueAsNumber !== 2 &&
			e.target.valueAsNumber !== 3 &&
			e.target.valueAsNumber !== 4 &&
			e.target.valueAsNumber !== 5 &&
			e.target.value !== ''
		) {
			alert('강좌 순서 값은 1에서 5 사이 값으로 입력해주시기 바랍니다.');
			e.target.value = '';
			return;
		}

		if (e.target.value === '') {
			const remainedContent = objs.filter(
				(obj) => obj.courseId !== popularContents[elementId].course.id,
			);
			const arr = [...remainedContent];
			setObjs(arr);
		} else {
			const obj = {
				courseId: popularContents[elementId].course.id,
				order,
				sequence: e.target.valueAsNumber,
			};
			const arr = [...objs];
			arr.push(obj);
			setObjs(arr);
		}
	};

	return (
		<div className="flex flex-col justify-between h-full p-10 bg-white shadow-xl rounded-xl">
			<div>
				<CardHeader title={title} objs={objs} />
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
			<CardPager />
		</div>
	);
};

export default PopularContentsCard;
