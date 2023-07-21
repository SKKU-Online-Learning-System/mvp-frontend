import React, { useState } from 'react';

import CardPager from './CardPager';
import CardHeader from './CardHeader';
import { ICourseOrdersInfo } from '../../../types/Admin/Index';
import { useNewCoursesFetch } from 'query/hooks/Admin/index';

type PropsType = { title: string };

const NewContentsCard = ({ title }: PropsType) => {
	const [objs, setObjs] = useState<Array<ICourseOrdersInfo>>([]);
	const { data: newContents, isLoading } = useNewCoursesFetch();

	if (isLoading) return <h2>Loading . . .</h2>;
	if (!newContents) return <div>Failed to retrieve data . . .</div>;

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
				(obj) => obj.courseId !== newContents[elementId].id,
			);
			const arr = [...remainedContent];
			setObjs(arr);
		} else {
			const obj = {
				courseId: newContents![+e.target.id].id,
				order: 1,
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
							<th className="w-1/5">등록일자</th>
							<th className="w-1/3">강좌명</th>
							<th className="w-1/6 ">강사명</th>

							<th className="w-1/12">순서</th>
						</tr>
					</thead>
					<tbody className="flex flex-col">
						{newContents?.map((item, idx) => {
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
						})}
					</tbody>
				</table>
			</div>
			<CardPager />
		</div>
	);
};

export default NewContentsCard;
