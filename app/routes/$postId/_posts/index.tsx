import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/$postId/_posts/")({
	component: Posts,
});

function Posts() {
	const { postId } = Route.useParams();
	return <div>This is a Post with id: {postId}</div>;
}
