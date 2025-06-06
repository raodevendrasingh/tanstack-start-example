// path layout with in dir

import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/core")({
	component: CoreLayout,
});

function CoreLayout() {
	return (
		<div>
			<h3>Core Layout</h3>
			<Outlet />
		</div>
	);
}
