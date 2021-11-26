import SelectorCard from "./SelectorCard";
const SelectorList = () => {
	return (
		<div style={{ padding: "0 3vw" }}>
			<SelectorCard title={"난이도"} type={["입문", "초급", "중급이상"]} />
			<SelectorCard
				title={"유료/무료/할인중"}
				type={["유료", "무료", "할인중"]}
			/>
			<SelectorCard title={"예제"} type={["초급", "중급", "고급", "초고급"]} />
		</div>
	);
};

export default SelectorList;
