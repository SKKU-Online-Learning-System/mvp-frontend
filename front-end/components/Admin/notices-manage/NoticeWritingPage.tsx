import React, { useRef } from 'react';
import { Dispatch, SetStateAction } from 'react';

type PropsType = {
	setWriting: Dispatch<SetStateAction<boolean>>;
};

const NoticeWritingPage = ({ setWriting }: PropsType) => {
	const titleRef = useRef(null);
	const contentRef = useRef(null);

	const onCancelClick = () => {
		setWriting(false);
	};

	const onSubmitClick = (e: React.FormEvent) => {
		e.preventDefault();

		if (titleRef.current && contentRef.current) {
			const { value: title } = titleRef.current;
			const { value: content } = contentRef.current;
		}
	};

	return (
		<section className="w-full">
			<div className="flex flex-col items-center justify-center py-12">
				<div className="flex flex-col items-end justify-center">
					<button
						className="mb-8 text-xl font-semibold rounded-lg bg-[#b3df8c] py-2 px-4 shadow-lg transition hover:bg-[#b9c7ad]"
						onClick={onCancelClick}
					>
						취소
					</button>
					<form className="flex flex-col items-end justify-center">
						<div className="flex items-center justify-center mb-8">
							<label className="mr-4 text-2xl" htmlFor="title">
								제목
							</label>
							<input
								ref={titleRef}
								placeholder="제목을 입력해주세요."
								className="p-2 px-4 border-2 border-solid border-slate-200 rounded-md min-w-[768px] focus:ring-2 focus:ring-teal-800 focus:outline-none focus:border-none"
								type="text"
								id="title"
							/>
						</div>
						<div className="flex items-start justify-center">
							<label className="mt-1 mr-4 text-2xl" htmlFor="content">
								내용
							</label>
							<textarea
								ref={contentRef}
								placeholder="내용을 입력해주세요."
								className="min-h-[500px] p-2 px-4 border-2 border-solid border-slate-200 rounded-md min-w-[768px] focus:ring-2 focus:ring-teal-800 focus:outline-none focus:border-none"
								id="content"
							/>
						</div>
						<button
							onClick={onSubmitClick}
							className="mt-8 text-xl font-semibold rounded-lg bg-[#b3df8c] py-2 px-4 shadow-lg transition hover:bg-[#b9c7ad]"
						>
							제출
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default NoticeWritingPage;
