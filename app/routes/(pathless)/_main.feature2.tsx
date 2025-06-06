import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(pathless)/_main/feature2")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Feature 2</div>;
}
