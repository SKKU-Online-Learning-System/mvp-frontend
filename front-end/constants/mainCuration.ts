import {
	faBrain,
	faLaptopCode,
	faWindowRestore,
	faBookOpen,
	faShieldHalved,
} from '@fortawesome/free-solid-svg-icons';

export const curations = [
	{
		category: '인공지능',
		url: './courses?category2sId=18',
		logoIconImage: faBrain,
		color: '#ac92eb',
	},
	{
		category: '프로그래밍 언어',
		url: './courses?category2sId=6',
		logoIconImage: faLaptopCode,
		color: '#4fc1e8',
	},

	{
		category: '웹개발',
		url: './courses?category2sId=1',
		logoIconImage: faWindowRestore,
		color: '#a0d568',
	},
	{
		category: '보안',
		url: './courses?category2sId=12',
		logoIconImage: faShieldHalved,
		color: '#ffce54',
	},
	{
		category: '교양',
		url: './courses?category2sId=44',
		logoIconImage: faBookOpen,
		color: '#ed5564',
	},
];
