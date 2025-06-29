import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/users/$userId")({
	component: RouteComponent,
});

function RouteComponent() {
	const { userId } = Route.useParams();
	return <div>Hello {userId} </div>;
}
