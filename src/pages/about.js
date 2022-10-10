import * as React from "react";
import { Link } from "gatsby";
//import Layout from "../components/layout.js";

export default function AboutPage() {
	return (
		<main
			title="About This Site"
			descripition="More information about this site"
		>
			<h1>About This Site</h1>
			<Link to={"/"}>Home</Link>
		</main>
	);
}