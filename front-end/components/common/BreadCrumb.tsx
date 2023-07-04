import React from 'react';

// category > menu1 > menu2
interface IBreadCrumb {
	category: string;
	menu?: string[];
	categoryColor?: string;
	containerPadding?: string;
}

const BreadCrumb = ({
	category,
	menu = [],
	categoryColor,
	containerPadding,
}: IBreadCrumb) => {
	const padding = containerPadding ? containerPadding : undefined;
	const color = categoryColor ? categoryColor : '#25c3f3';

	return (
		<div className={`flex relative p-${padding}`}>
			<div className="flex text-[28px] text-[#454545]">
				<div
					className={`opacity-70 first-letter:border-t-[3px] first-letter:border-solid first-letter:border-[${color}]`}
				>
					{category}
				</div>
				{menu.length > 0 &&
					menu.map((elem, idx) => (
						<span
							className="before:pl-2 before:opacity-70 before:text-[#454545] before:content-[' > ']"
							key={idx}
						>
							{elem}
						</span>
					))}
			</div>
		</div>
	);
};

export default React.memo(BreadCrumb);
