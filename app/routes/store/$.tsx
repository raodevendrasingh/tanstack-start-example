import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/store/$")({
	component: RouteComponent,
});

function RouteComponent() {
	const { _splat } = Route.useParams();
	return (
		<div>
			Store Page! {" -> "}
			<span>{`/store/${_splat}`}</span>
		</div>
	);
}
