import BaseLayout from "layouts";
import React from "react";
import BlogsPageSections from "sections/BlogsPageSections";

export default function BlogsPage({ ...props }) {
	return (
		<BaseLayout pageTitle={`Blogs`}>
			<BlogsPageSections />
		</BaseLayout>
	);
}
