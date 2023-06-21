import React, { ReactElement } from 'react';
import { DEVICE_BREAKPOINT } from 'constants/breakpoint';

const Footer = (): ReactElement => {
	return (
		<div className="flex justify-center items-center min-w-[desktop] bg-[#323232] text-[#fefefe]">
			<div
				className="flex justify-between"
				style={{ width: DEVICE_BREAKPOINT.DESKTOP }}
			>
				<div className="m-[34px]">
					<div className="flex mb-4">
						<img src="/images/main_logo.png" alt="Main Logo Image" />
						<div className="font-[Gugi] text-[2rem] my-0 ml-[20px] text-[#c7c6c6]">
							온라인 명륜당
						</div>
					</div>
					<p>성균관대학교 소프트웨어융합대학</p>
					<p>경기도 수원시 장안구 서부로 2066 성균관대학교 자연과학캠퍼스</p>
					<p>
						소프트웨어융합대학 Copyrght ⓒ 2022 SUNGKYUNKWAN UNIVERSITY ALL
						RIGHTS RESERVED.
					</p>
				</div>
				<div className="m-[34px] mt-11">
					<a
						href="https://www.skku.edu/skku/etc/pop_email.do"
						className="text-[#fefefe] no-underline hover:text-[#c2d45e]"
					>
						이메일
					</a>
					<span className="m-4">|</span>
					<a
						href="https://www.skku.edu/skku/etc/pop_email.do"
						className="text-[#fefefe] no-underline hover:text-[#c2d45e]"
					>
						무단수집거부
					</a>
					<span className="m-4">|</span>
					<a
						href="https://www.skku.edu/skku/etc/private.do"
						className="text-[#fefefe] no-underline hover:text-[#c2d45e]"
					>
						개인정보처리방침
					</a>
					<span className="m-4">|</span>
					<a
						href=""
						className="text-[#fefefe] no-underline hover:text-[#c2d45e]"
					>
						Contact us
					</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;
