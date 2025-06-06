// path layout with dot convention

import { Link, Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/auth")({
	component: AuthLayoutComponent,
});

function AuthLayoutComponent() {
	return (
		<div>
			<h3>Auth Layout</h3>
			<nav>
				<Link to="/auth/sign-in">Sign In</Link>
				<Link to="/auth/sign-up">Sign Up</Link>
			</nav>
			<Outlet />
		</div>
	);
}
