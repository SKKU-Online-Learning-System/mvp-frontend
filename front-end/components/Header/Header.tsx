import React, { useRef } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { useModal } from '../../hooks/useModal';
import UpperHeader from './UpperHeader';

const Header = () => {
	const router = useRouter();
	const inputRef = useRef<HTMLInputElement | null>(null);
	const { showModal, onOpenLoginModal, onOpenSignUp, renderModal } = useModal();

	const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { current } = inputRef;

		if (current) current.value = e.target.value;
	};

	const handleClickSearchLectures = () => {
		if (inputRef?.current?.value) {
			router.push({
				pathname: '/courses',
				query: { keyword: inputRef?.current?.value },
			});
			inputRef.current.value = '';
			return;
		}
	};

	const handleKeyPress = (e: React.KeyboardEvent) => {
		if (e.key === 'Enter') {
			e.preventDefault();
			handleClickSearchLectures();
			return;
		}
	};

	return (
		<div className="border-b-2">
			<UpperHeader
				onOpenLoginModal={onOpenLoginModal}
				onOpenSignUpModal={onOpenSignUp}
			/>
			<div className="dt:py-0 dt:px-[10px] mt-8 flex justify-around items-center mb-4">
				<div className="flex items-center justify-between">
					<Link href="/">
						<span className="text-[2rem] cursor-pointer font-['Gugi'] text-[#1b1b1b]">
							온라인 명륜당
						</span>
					</Link>
					<ul className="flex pl-0 mx-32 list-none">
						<li className="mx-4 my-0 list-none">
							<Link href="/courses">
								<span className="text-lg font-semibold cursor-pointer no-underline decoration-black transition-colors hover:text-[var(--color-green-300)]">
									강좌 List
								</span>
							</Link>
						</li>
						<li className="mx-4 my-0 list-none">
							<a
								href=""
								className="text-lg font-semibold cursor-pointer no-underline decoration-black transition-colors hover:text-[var(--color-green-300)]"
							>
								공지사항
							</a>
						</li>
					</ul>
					<input
						type="text"
						ref={inputRef}
						placeholder="배우고 싶은 지식을 입력하세요."
						className="w-[300px] h-[35px] rounded-5 pr-10 pl-4 border-2 border-solid border-[black]/[0.7] rounded-xl"
						onChange={handleInput}
						onKeyPress={handleKeyPress}
					/>
					<button
						className="focus:outline-none bg-cover bg-[url('/images/search_btn.png')] cursor-pointer p-0 -ml-10 border-none w-[30px] h-[30px] "
						onClick={handleClickSearchLectures}
					/>
				</div>
				{showModal && renderModal()}
			</div>
		</div>
	);
};

export default Header;
