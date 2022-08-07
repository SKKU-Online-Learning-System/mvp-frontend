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
			<div style={{ display: 'block', marginTop: '20px' }}>{children}</div>
		</LayoutBox>
	);
};

export default Layout;

const LayoutBox = styled.div`
	margin: 0 20px;
	display: flex;
	justify-content: flex-start;
	.menuBar {
		margin-right: 1%;
		min-width: 230px;

		ul {
			list-style: none;
			border: solid;
			border-color: #e2e2e2;
			border-width: thin;
			padding: 0;
			height: 100%;
		}
		li {
			border-bottom: solid;
			border-color: #e2e2e2;
			border-width: thin;
		}
		a {
			display: block;
		}
	}

	@media only screen and (min-width: 1400px) {
		margin: 0 auto;
		width: 1400px;
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
