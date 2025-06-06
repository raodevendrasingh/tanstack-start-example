import { createFileRoute } from "@tanstack/react-router";
import { Header } from "./-components/header";

export const Route = createFileRoute("/")({
	component: Home,
});

function Home() {
	return (
		<div>
			<Header />
			<h1>Hello Tanstack</h1>
		</div>
	);
}
