import React, { ReactElement } from 'react';

type Props = {
	title: string;
};

const spanStyle = 'text-lg mr-20';

const Title = (): ReactElement => (
	<div className="flex mb-8">
		<span className={spanStyle}>순위</span>
		<span className={spanStyle}>등록일자</span>
		<span className={spanStyle}>강좌명</span>
		<span className={spanStyle}>강사명</span>
		<span className={spanStyle}>담은수</span>
	</div>
);

const AdminCard = ({ title }: Props): ReactElement => {
	return (
		<div className="h-full p-12 shadow-xl rounded-xl bg-[#fff] min-w-[768px]">
			<h3 className="pl-10 mb-10 text-3xl font-extrabold">{title}</h3>
			<div>
				<Title />
				<div></div>
			</div>
		</div>
	);
};

export default AdminCard;
