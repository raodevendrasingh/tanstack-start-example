import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/core/settings")({
	component: Settings,
});

function Settings() {
	return <div>Settings</div>;
}
