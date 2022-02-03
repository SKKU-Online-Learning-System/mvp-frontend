import SelectorCard from './SelectorCard';
const SelectorList = () => {
	return (
		<div style={{ padding: '0 3vw' }}>
			<SelectorCard title={'난이도'} type={['입문', '초급', '중급이상']} />
		</div>
	);
};

export default SelectorList;
