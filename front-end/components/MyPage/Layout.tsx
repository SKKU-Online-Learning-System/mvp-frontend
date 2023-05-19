import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface LayoutProps {
	children?: React.ReactNode;
}
interface LinkProps {
	isThisPage: boolean;
}

const myPage = '/my-page';

const MENU = [
	{ title: 'DASHBOARD', path: myPage },
	{ title: '내 알림보기/알림 설정', path: myPage + '/notification' },
	{ title: '최근 내 질문', path: myPage + '/question' },
	{ title: '최근 학습중인 강좌/강의', path: myPage + '/learning' },
	{ title: '완료한 강좌', path: myPage + '/complete' },
	{ title: '학습 통계', path: myPage + '/statistics' },
	{ title: 'My Skills', path: myPage + '/skills' },
	{ title: 'My Certificates', path: myPage + '/certificates' },
];

const Layout = ({ children }: LayoutProps) => {
	const router = useRouter();
	return (
		<div className="my-0 mx-5 flex justify-start w-[1400px] my-0 mx-auto">
			<div className="mr-[1%] min-w-[230px] text-[0.8rem]">
				<ul className="list-none border-solid border-[#e2e2e2] border-2 p-0 h-full">
					{MENU.map((ele) => {
						const isThisPage = ele.path === router.pathname;

						return (
							<li
								className="border-solid border-[#e2e2e2] border-2 leading-[1.6rem]"
								key={ele.path}
							>
								<Link href={ele.path}>
									<a
										className={`bg-[${
											isThisPage ? '#e2e2e2' : 'white'
										}] block no-underline font-bold py-[10px] px-5 cursor-pointer hover:bg-[#e2e2e2]`}
									>
										{ele.title}
									</a>
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
			<div className="block mt-5">{children}</div>
		</div>
	);
};

export default Layout;
// const LayoutBox = styled.div`
// 	@media only screen and (min-width: 1400px) {
// 		margin: 0 auto;
// 		width: 1400px;
// 	}
// `;
