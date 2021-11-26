import BottomNavbar from "./BottomNavbar";
import TopNavbar from "./TopNavbar";

const SidebarLeft = () => {
	return (
		<div style={{ flex: 2 }}>
			<TopNavbar />
			<BottomNavbar />
		</div>
	);
};
export default SidebarLeft;
