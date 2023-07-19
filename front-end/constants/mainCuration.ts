import {
	faBrain,
	faLaptop,
	faWindowRestore,
	faBookOpen,
	faShieldHalved,
} from '@fortawesome/free-solid-svg-icons';

export const curations = [
	{
		category: '인공지능',
		url: './courses?category2sId=18',
		logoIconImage: faBrain,
	},
	{
		category: '프로그래밍 언어',
		url: './courses?category2sId=6',
		logoIconImage: faLaptop,
	},

	{
		category: '웹개발',
		url: './courses?category2sId=1',
		logoIconImage: faWindowRestore,
	},
	{
		category: '보안',
		url: './courses?category2sId=12',
		logoIconImage: faShieldHalved,
	},
	{
		category: '교양',
		url: './courses?category2sId=44',
		logoIconImage: faBookOpen,
	},
];
