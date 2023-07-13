import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { TbMessageLanguage } from 'react-icons/tb';
import { RiFilePaper2Line } from 'react-icons/ri';
import { MdSecurity } from 'react-icons/md';
import { GiBrain } from 'react-icons/gi';

export const curations = [
	{
		category: '프로그래밍 언어',
		url: './courses?category2sId=6',
		logoIconImage: TbMessageLanguage,
	},
	{
		category: '인공지능',
		url: './courses?category2sId=18',
		logoIconImage: GiBrain,
	},
	{
		category: '웹개발',
		url: './courses?category2sId=1',
		logoIconImage: HiOutlineDesktopComputer,
	},
	{
		category: '교양',
		url: './courses?category2sId=44',
		logoIconImage: RiFilePaper2Line,
	},
	{
		category: '보안',
		url: './courses?category2sId=12',
		logoIconImage: MdSecurity,
	},
];
