import React from 'react';
import Image from 'next/image';

import MyPageLayout from '@components/MyPage/MyPageLayout';

const Page = () => {
	return (
		<MyPageLayout>
			<div className="p-20">
				<div className="flex justify-center items-center text-[#393939] font-['Noto Sans KR']">
					<div className="rounded-full shadow-xl border-solid border-[1px] border-[#393939]">
						<Image
							width={300}
							height={300}
							src="/images/auth_profile.png"
							alt="User Profile Image"
						/>
					</div>
					<ul className="ml-24 list-disc">
						<li>
							<span>닉네임: 세종대왕</span>
						</li>
						<li>
							<span>이메일: skku1398@g.skku.edu</span>
						</li>
					</ul>
				</div>
			</div>
		</MyPageLayout>
	);
};

export default Page;
