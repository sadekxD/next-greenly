import Link from "next/link";
import { useState } from "react";
import Sidebar from "./Sidebar";

const Navbar = () => {
	const [sidebarActive, setSidebarActive] = useState(false);

	const handleSidebar = () => setSidebarActive(!sidebarActive);

	return (
		<nav className="py-8 font-montserrat px-3 sm:px-6 xl:px-2">
			<div className="max-w-6xl mx-auto flex items-center justify-between">
				<Link href="/">
					<a className="text-2xl mr-8 font-light text-green-700 tracking-wide">
						<span className="font-bold">G</span>o
						<span className="font-bold">G</span>reenly
					</a>
				</Link>
				<ul className="flex-1 hidden lg:flex items-center text-green-700 ml-8 text-sm font-medium">
					<Link href="/">
						<a className="ml-4 px-2">Home</a>
					</Link>
					<Link href="/grass-greening">
						<a className="ml-4 px-2">Grass Greening</a>
					</Link>

					<Link href="/pricing">
						<a className="ml-4 px-2">Pricing</a>
					</Link>
					<Link href="/about">
						<a className="ml-4 px-2">About us</a>
					</Link>
				</ul>
				<div className="flex items-center">
					<Link href="/book">
						<a className="px-6 text-sm rounded-md bg-green-700 text-white font-medium py-3 transition-all duration-200 transform-gpu hover:-translate-y-1 hover:shadow-xl">
							Book now
						</a>
					</Link>
					<button
						onClick={handleSidebar}
						className="block lg:hidden ml-4 text-green-700"
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
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					</button>

					<Sidebar open={sidebarActive} handleSidebar={handleSidebar}>
						<h1 className="font-black text-6xl">Hello</h1>
					</Sidebar>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
