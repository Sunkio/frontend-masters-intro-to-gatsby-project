import * as React from 'react';
import { Link } from 'gatsby';
import Layout from './layout';

export default function PostLayout({ children, pageContext }) {
	const { title, description } = pageContext.frontmatter;

	if (pageContext.layout === "special") {
		return (
			<Layout>
				{children}
			</Layout>
		)
	}
	return (
		<Layout title={title} description={description}>
			{children}
			<Link to="/">&larr; Go back to the homepage</Link>
		</Layout>
	);
}