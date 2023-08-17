import React, { useRef } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { useModal } from '../../hooks/useModal';
import UpperHeader from './UpperHeader';
import { BiSearch } from 'react-icons/bi';

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
		<header className="border-b-2">
			<UpperHeader
				onOpenLoginModal={onOpenLoginModal}
				onOpenSignUpModal={onOpenSignUp}
			/>
			<div className="dt:py-0 dt:px-[10px] mt-10 flex justify-around items-center mb-4 text-[var(--color-onBackground-300)]">
				<div className="flex items-center justify-between">
					<Link href="/">
						<span className="text-[2rem] cursor-pointer font-['Gugi']">
							온라인명륜당
						</span>
					</Link>
					<ul className="flex mx-40 list-none dt:mx-3">
						<li className="mx-8 list-none">
							<Link href="/courses">
								<span className="text-lg font-semibold cursor-pointer no-underline decoration-black transition-colors hover:text-[var(--color-green-300)]">
									강좌목록
								</span>
							</Link>
						</li>
						<li className="mx-8 list-none">
							<Link href="/notices">
								<span className="text-lg font-semibold cursor-pointer no-underline decoration-black transition-colors hover:text-[var(--color-green-300)]">
									공지사항
								</span>
							</Link>
						</li>
					</ul>
					<input
						type="text"
						ref={inputRef}
						placeholder="배우고 싶은 지식을 입력하세요."
						className=" focus:outline-none  focus:border-[var(--color-Primary)] opacity-75 rounded-3xl w-[300px] mbl:w-[100px] pr-10 pl-4 h-8 flex border-solid border-2"
						onChange={handleInput}
						onKeyPress={handleKeyPress}
					/>
					<button
						className="z-10 h-full px-2 py-1 -ml-12 cursor-pointer rounded-3xl "
						onClick={handleClickSearchLectures}
					>
						<BiSearch
							className="opacity-70 focus:[var(--color-Primary)] cursor-pointer"
							size="25"
						/>
					</button>
				</div>
				{showModal && renderModal()}
			</div>
		</header>
	);
};

export default Header;
