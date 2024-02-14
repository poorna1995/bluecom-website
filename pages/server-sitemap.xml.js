import { getServerSideSitemapLegacy } from "next-sitemap";

// Sitemap component
export default function Sitemap() {}

// collect all the post
async function getBlogData() {
	const requestOptions = {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
		// body: JSON.stringify({ owner_id: resJson.result.user_id }),
	};
	const res = await fetch(
		`https://api.bluecom.ai/api/blog/Blogs`,
		// requestOptions,
	);
	// console.log({ query: context.query, context });
	const resJson = await res.json();

	// console.log(slotsResJson);
	return resJson;
}

export async function getServerSideProps(ctx) {
	// allPosts =[]
	const response = await getBlogData();

	const blogs = response.result;

	// console.log({ blogs, response });
	const fields = blogs.map((post) => {
		return {
			loc: `https://bluecom.ai/blogs/${post.slug}`, // Absolute url
			lastmod: new Date(post.updated_at).toISOString(),
			priority: 0.7,
			changefreq: "daily",
		};
	});
	// console.log({ fields });

	//  fetch all the post and pass into getServerSideSitemap. but make sure your allPasts in array.

	return await getServerSideSitemapLegacy(ctx, fields);
}

export const config = {
	runtime: "nodejs", // or "edge"
};
