import { createFileRoute } from "@tanstack/react-router";
import { Header } from "./-components/header";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
	component: Home,
});

function Home() {
	return (
		<div className="px-2">
			<Header />
			<h1>Hello Tanstack</h1>
			<Button>Click me</Button>
		</div>
	);
}
