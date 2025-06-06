// path layout with in dir

import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/core")({
	component: CoreLayout,
});

function CoreLayout() {
	return (
		<div>
			<h3>Core Layout</h3>
			<nav>
				<Link to="/core/settings">Settings</Link>
				<Link to="/core/dashboard">Dashboard</Link>
			</nav>
			<Outlet />
		</div>
	);
}
