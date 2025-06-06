import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(pathless)/_main/feature1")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Feature 1</div>;
}
