import React from 'react';
import styled from 'styled-components';
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
	{ title: 'DASHBOARD', path: myPage + '/dashboard' },
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
		<LayoutBox>
			<div className="menuBar">
				<ul>
					{MENU.map((ele) => {
						return (
							<li key={ele.path}>
								<Link href={ele.path}>
									<LinkMenu isThisPage={ele.path === router.pathname}>
										{ele.title}
									</LinkMenu>
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
			{children}
		</LayoutBox>
	);
};

export default Layout;

const LayoutBox = styled.div`
	width: 1400px;
	margin: 0 auto;
	display: flex;
	.menuBar {
		margin-right: 50px;
	}
	ul {
		list-style: none;
		border: solid;
		border-color: #e2e2e2;
		padding: 0;
		height: 100%;
	}
	li {
		border-bottom: solid;
		border-color: #e2e2e2;
	}
	a {
		display: block;
	}
`;
const LinkMenu = styled.a<LinkProps>`
	/* color: ${(props) => (props.isThisPage ? '#68722f' : 'black')}; */
	background-color: ${(props) => (props.isThisPage ? '#e2e2e2' : 'white')};
	text-decoration: none;
	font-weight: bold;
	padding: 10px 20px;
	cursor: pointer;
	&:hover {
		background-color: #e2e2e2;
	}
`;
