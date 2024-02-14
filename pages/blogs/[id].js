import { Box, Button, Container, Typography } from "@mui/material";
import BaseLayout from "layouts";
// import Prism from "prismjs";
// import "prismjs/components/prism-jsx";
import { useEffect, useState, useMemo } from "react";
// import FacebookIcon from "/public/images/Blog/icons/Facebook.svg";
import FacebookIcon from "components/Common/Icons/SocialMediaIcons/FacebookIcon";
import TwitterIcon from "components/Common/Icons/SocialMediaIcons/TwitterIcon";
import LinkedInIcon from "components/Common/Icons/SocialMediaIcons/LinkedInIcon";
import PinterestIcon from "components/Common/Icons/SocialMediaIcons/PinterestIcon";
import BackArrowIcon from "components/Common/Icons/BackArrowIcon";
import AppImage from "components/Common/AppImage";
import EcomJourneyCard from "sections/BlogsPageSections/component/EcomJourneyCard";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import { format } from "date-fns";
import BlogDetailsLoadingSkeletons from "sections/BlogsPageSections/component/BlogDetailsLoadingSkeletons";
// import fetch from "node-fetch";

async function getBlogData(slug) {
	const requestOptions = {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
		// body: JSON.stringify({ owner_id: resJson.result.user_id }),
	};
	const res = await fetch(
		`https://api.bluecom.ai/api/blog/Blogs?slug=${slug}`,
		requestOptions,
	);
	// console.log({ query: context.query, context });
	const resJson = await res.json();

	// console.log(slotsResJson);
	return resJson;
}
export async function getServerSideProps(context) {
	const { query } = context;
	const { id } = query;
	const blogData = await getBlogData(id);
	// const res = await fetch(
	// 	`https://api.bluecom.ai/api/blog/Blogs?slug=${id}`,
	// 	// requestOptions,
	// );
	// console.log({ query: context.query, context });
	// const resJson = await res.json();

	console.log({ blogData });
	return {
		props: {
			blogData,
		},
	};
}

export default function Post(props) {
	const router = useRouter();

	// const { data, isLoading } = useQuery({
	// 	queryKey: ["blog", router.query.id],
	// 	queryFn: () => getBlogData(router.query.id),
	// 	enabled: !!router.query.id,
	// });

	// const apiRes = props.blogData.result[0];

	const handleBackButtonClick = () => {
		router.push("/blogs");
	};
	// const [postData, setPostData] = useState(apiRes);

	// useEffect(() => {
	// 	setPostData(apiRes);
	// }, []);

	// const postData = data && data.result[0];
	const postData = useMemo(
		() => props.blogData.result[0] || {},
		[props.blogData.result],
	);

	const [blogData, setBlogData] = useState(postData);
	useEffect(() => {
		setBlogData(postData);
	}, [postData]);
	const title = blogData && blogData.title;
	const description = blogData && blogData.description;
	const image_url = blogData && blogData.image_url;
	const keywords = (blogData && blogData.keywords) || "";
	const keywordsArray = keywords && keywords?.split(",");

	if (router.isFallback) {
		return <BlogDetailsLoadingSkeletons />;
	}
	return (
		// <BaseLayout
		// 	pageTitle={title}
		// 	pageDescription={description}
		// 	pageImage={image_url}
		// >
		<>
			<NextSeo
				title={title}
				description={description}
				openGraph={{
					title: title,
					description: description.slice(0, 200),
					images: [
						{
							url: image_url,
							height: 400,
							width: 300,
							alt: "Blog Image",
						},
					],
				}}
			/>{" "}
			<Box>
				<Box
					sx={{
						maxWidth: "1440px",
						margin: "auto",
						paddingBottom: "64px",
					}}
				>
					{/* {isLoading ? (
						<Container>
							<article
								style={{
									// marginTop: "64px",
									maxWidth: "820px",
									margin: "0 auto",
								}}
							>
								<BlogDetailsLoadingSkeletons />
							</article>
						</Container>
					) : ( */}
					<Container>
						<article
							style={{
								// marginTop: "64px",
								maxWidth: "820px",
								margin: "0 auto",
							}}
						>
							<Button
								sx={{
									textTransform: "none",
									fontSize: "16px",
									fontWeight: "500",
									color: "#0E0B3D",
									fontFamily: "Plus Jakarta Sans",
									letterSpacing: "0.02rem",
									mt: "24px",
									mb: "36px",
								}}
								onClick={() => {
									handleBackButtonClick();
								}}
								startIcon={<BackArrowIcon />}
								disableRipple
							>
								Back to Blogs
							</Button>
							<Typography
								variant="h4"
								sx={{
									fontWeight: "800",
									fontSize: ["28px", "48px"],
									pb: "24px",
								}}
								component={"h1"}
								// className={utilStyles.headingXl}
							>
								{blogData.title}
							</Typography>
							<Box
								sx={{
									display: "flex",
									justifyContent: "space-between",
									alignItems: "center",
									pb: 3,
								}}
							>
								<div
									style={{
										display: "flex",
										// justifyContent: "space-between",
										alignItems: "center",
									}}
								>
									{blogData.category && (
										<Typography sx={pageStyles.category}>
											{blogData.category}
										</Typography>
									)}
									{blogData.published_at && (
										<Typography sx={pageStyles.date}>
											{format(
												new Date(blogData.published_at),
												"MMM dd, yyyy",
											)}
										</Typography>
									)}
								</div>

								<Box
									sx={{
										display: "flex",
										gap: "0.75rem",
										// pb: "24px",
									}}
								>
									<FacebookIcon />
									<TwitterIcon />
									<LinkedInIcon />
									<PinterestIcon />
								</Box>
							</Box>
							{blogData.image_url && (
								<AppImage
									src={blogData.image_url}
									width="820"
									height="495"
									sx={{
										width: "100%",
										height: "100%",
										pb: "28px",
										// objectFit: "cover",
									}}
									alt={blogData.title}
								/>
							)}
							<Typography
								sx={{
									maxWidth: "100%",
									whiteSpace: "normal",
									// code: {
									// 	background: "#272822",
									// 	px: 1,
									// 	borderRadius: "4px",
									// 	py: 0.5,
									// 	color: "white",
									// },
								}}
								dangerouslySetInnerHTML={{
									__html: blogData.content,
								}}
								component={"div"}
								className="markdown-content"
							/>
							{keywords && (
								<div
									style={{
										display: "flex",
										// justifyContent: "center",
										// alignItems: "center",
										// gap: "10px",
									}}
								>
									<Typography
										sx={{
											color: "#000",
											fontSize: "16px",
											fontFamily: "Inter",
											fontStyle: "normal",
											fontWeight: "600",
											lineHeight: "normal",
											letterSpacing: " 0.48px",
											mr: 2,
											mt: 1,
										}}
									>
										KEYWORDS:{" "}
									</Typography>
									<div
										style={{
											display: "flex",
											// justifyContent: "center",
											alignItems: "center",
											flexWrap: "wrap",
											gap: "10px",
										}}
									>
										{keywords &&
											Array.isArray(
												keywordsArray,
												// keywords.spilt(","),
											) &&
											keywordsArray
												// keywords
												// 	.spilt(",")
												.map((item, index) => (
													<span
														key={index}
														style={{
															display: "flex",
															padding: "6px 24px",
															borderRadius:
																" 35px",
															background:
																" rgba(79, 68, 224, 0.10)",
															color: "#4F44E0",
															fontSize: "16px",
															fontFamily: "Inter",
															fontStyle: "normal",
															fontWeight: 500,
															lineHeight: "28px",
															letterSpacing:
																"0.32px",
														}}
													>
														{item}
													</span>
												))}
									</div>
								</div>
							)}

							{/* {postData.contentHtml} */}
							{/* {content} */}
						</article>
					</Container>
					{/* )} */}
				</Box>
			</Box>
		</>
		// </BaseLayout>
	);
}

Post.getLayout = function getLayout(page) {
	return <BaseLayout>{page}</BaseLayout>;
};
export const config = {
	runtime: "experimental-edge", // or "edge"
};

// export async function getStaticPaths() {
// 	const paths = getAllBlogIds();

// 	return {
// 		paths,
// 		fallback: false,
// 	};
// }

// export async function getStaticProps({ params }) {
// 	const postData = await getBlogData(params.id);

// 	return {
// 		props: {
// 			postData,
// 		},
// 	};
// }
const pageStyles = {
	root: {
		borderRadius: "5px",
		// background: "transparent",
		// height: "390px",
		boxShadow: "none",

		padding: ["8px", "0px"],
		// display: "flex",
		// flexDirection: "column",
		// justifyContent: "space-between",
		// [theme.breakpoints.down("md")]: {
		// 	height: "auto",
		// },
	},
	media: {
		width: "100%",
		height: "400px",
		objectFit: "cover",
		transition: "transform 450ms ",
		borderRadius: "5px",

		"&:hover": {
			transform: "scale(1.08)",
			borderRadius: "5px",
		},
	},
	imgWrapper: {
		overflow: "hidden",
		borderRadius: "5px",

		// borderRadius: "20px",
	},
	content: {},
	filters: {
		display: "flex",
		justifyContent: "space-between",
	},
	title: {
		fontWeight: "700",
		marginTop: "8px",
		marginBottom: "8px",
		color: "#0E0B3D",
		fontSize: "42px",
		fontFamily: "Plus Jakarta Sans",
		letterSpacing: "0.02rem",

		"&:hover": {
			color: (theme) => theme.palette.primary.main,
			textDecoration: "underline",
		},
	},
	description: {
		fontWeight: "400",
		lineHeight: "1.9375rem",
		fontSize: ["16px", "18px"],
	},
	category: {
		color: "#4F44E0",
		fontSize: " 16px",
		fontFamily: "Plus Jakarta Sans",

		fontWeight: 600,
		lineHeight: " 31px",
	},
	date: {
		color: "#000",
		fontSize: "16px",
		fontFamily: " Plus Jakarta Sans",
		fontWeight: 500,
		lineHeight: " 31px",
		ml: 2,
	},
	readMoreButton: {},
};
