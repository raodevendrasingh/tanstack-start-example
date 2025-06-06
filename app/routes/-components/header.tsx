import { Link } from "@tanstack/react-router";

export const Header = () => {
	return (
		<nav>
			<Link to="/">Home</Link>
			<Link to="/core"> Core-Layout </Link>
			<Link to="/auth"> Auth-Layout </Link>
			<Link to="/users/$userId" params={{ userId: "dev" }}>
				Users
			</Link>
			<Link to="/posts"> Posts</Link>
			<Link to="/feature1"> Feature-1 </Link>
			<Link to="/feature2"> Feature-2 </Link>
			<Link to="/store/$">Store</Link>
		</nav>
	);
};
