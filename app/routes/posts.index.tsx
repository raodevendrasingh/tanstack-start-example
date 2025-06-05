import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/posts/")({
	component: PostsIndexComponent,
});

function PostsIndexComponent() {
	return (
		<div>
			Please select a post!
			<Link to="/posts/$postId" params={{ postId: "1" }}>
				Post 1
			</Link>
			<Link to="/posts/$postId" params={{ postId: "2" }}>
				Post 2
			</Link>
			<Link to="/posts/$postId" params={{ postId: "3" }}>
				Post 3
			</Link>
		</div>
	);
}
