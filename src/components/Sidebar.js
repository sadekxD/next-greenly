import Drawer from "rc-drawer";

const Sidebar = ({ children, open, handleSidebar }) => {
	return (
		<Drawer width="320" onClose={handleSidebar} handler={false} open={open}>
			<button
				onClick={handleSidebar}
				className="px-4 py-2 my-4 mx-auto bg-gray-500 text-white font-medium filter brightness-125"
			>
				Close
			</button>
			{children}
		</Drawer>
	);
};

export default Sidebar;
