import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/store/products/$")({
	component: RouteComponent,
});

function RouteComponent() {
	const { _splat } = Route.useParams();
	return (
		<div>
			Products Page! {" -> "}
			<span>{`/products/${_splat}`}</span>
		</div>
	);
}
