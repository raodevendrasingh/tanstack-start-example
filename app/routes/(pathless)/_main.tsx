// pathless layout with dot convention

import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/(pathless)/_main")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div>
			<h3>Main Features inside pathless layout</h3>
			<Outlet />
		</div>
	);
}
