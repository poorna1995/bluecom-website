import { Fade, Grid } from "@mui/material";
import AppLink from "components/Common/AppLink";
import React from "react";
import DefaultBlogCard from "./component/DefaultBlogCard";
import BlogsListLoadingSkeletons from "./component/BlogsListLoadingSkeletons";
import { useQuery } from "@tanstack/react-query";
import FeaturedBlogCard from "./component/FeaturedBlogCard";
import { orderBy } from "lodash";
import { useRouter } from "next/router";
export async function getBlogs(category = "") {
	const requestOptions = {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	};

	const res = await fetch(
		`https://api.bluecom.ai/api/blog/Blogs`,
		requestOptions,
	);
	const resJson = await res.json();

	if (category) {
		if (category.toLowerCase() === "all") {
			return resJson;
		}
		const categoryRes = await fetch(
			`https://api.bluecom.ai/api/blog/Blogs?category=${category}`,
			requestOptions,
		);
		const categoryResJson = await categoryRes.json();

		return categoryResJson;
	}

	return resJson;
}

export default function BlogsListSection({}) {
	const router = useRouter();
	const { category } = router.query;
	const { data, isLoading } = useQuery({
		queryKey: ["blogs", category],
		queryFn: () => getBlogs(category),
	});

	const blogs =
		data && orderBy(data.result, ["type", "published_at"], ["asc", "desc"]);
	console.log({ blogs });
	if (isLoading) {
		return <BlogsListLoadingSkeletons />;
	}
	return (
		<div>
			<Grid container spacing={2} px={1}>
				{Array.isArray(blogs) &&
					blogs?.map((item, index) => {
						const {
							id,
							category,
							author,
							date,
							title,
							description,
							imageSrc,
						} = item;
						if (item.type === "featured") {
							return (
								<Grid key={index} item xs={12} sm={12} md={12}>
									<FeaturedBlogCard data={item} />
								</Grid>
							);
						}
						return (
							<Grid
								// spacing={2}
								key={title}
								item
								xs={12}
								sm={6}
								md={4}
							>
								{/* <Fade direction="fade-up"> */}
								<AppLink href={`/blogs/${item.slug}`}>
									<DefaultBlogCard
										fileName={item.slug}
										category={category}
										author={author}
										// date={date}
										title={title}
										description={description}
										image_url={item.image_url}
										published_at={item.published_at}
									/>
								</AppLink>
								{/* </Fade> */}
							</Grid>
						);
					})}
			</Grid>
		</div>
	);
}
