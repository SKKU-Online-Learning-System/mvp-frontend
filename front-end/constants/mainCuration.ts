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
		color: '#c86ae2',
	},
	{
		category: '프로그래밍 언어',
		url: './courses?category2sId=6',
		logoIconImage: faLaptop,
		color: '#4f8bf3',
	},

	{
		category: '웹개발',
		url: './courses?category2sId=1',
		logoIconImage: faWindowRestore,
		color: '#9c7eec',
	},
	{
		category: '보안',
		url: './courses?category2sId=12',
		logoIconImage: faShieldHalved,
		color: '#5d7cb1',
	},
	{
		category: '교양',
		url: './courses?category2sId=44',
		logoIconImage: faBookOpen,
		color: '#2de69f',
	},
];
