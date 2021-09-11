import Drawer from "rc-drawer";

const Sidebar = ({ children, open, handleSidebar }) => {
  return (
    <Drawer width="320" onClose={handleSidebar} handler={false} open={open}>
      <button
        onClick={handleSidebar}
        className="my-4 inline-block font-medium"
        style={{ marginLeft: "90%" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      {children}
    </Drawer>
  );
};

export default Sidebar;
