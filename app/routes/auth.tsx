// path layout with dot convention

import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/auth")({
	component: AuthLayoutComponent,
});

function AuthLayoutComponent() {
	return (
		<div>
			<h3>Auth Layout</h3>
			<Outlet />
		</div>
	);
}
