import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/core/dashboard")({
	component: Dashboard,
});

function Dashboard() {
	return <div>Dashboard</div>;
}
