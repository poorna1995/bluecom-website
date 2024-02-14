import { CardMedia, Grid, Typography } from "@mui/material";
import { format } from "date-fns";
import { useRouter } from "next/router";
import React from "react";

const pageStyles = {
	root: {
		borderRadius: "5px",
		// background: "transparent",
		// height: "390px",
		boxShadow: "none",

		padding: { sm: "8px", md: "0px" },
		// display: "flex",
		// flexDirection: "column",
		// justifyContent: "space-between",
		// [theme.breakpoints.down("md")]: {
		// 	height: "auto",
		// },
	},
	media: {
		width: "100%",
		height: ["250px", "250px", "400px"],
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
		fontSize: ["28px", "28px", "42px"],
		fontFamily: "Plus Jakarta Sans",
		letterSpacing: "0.02rem",

		"&:hover": {
			color: (theme) => theme.palette.primary.main,
			textDecoration: "underline",
			cursor: "pointer",
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

export default function FeaturedBlogCard({ data }) {
	const {
		title,
		image_url: imageSrc,
		description,
		category,
		published_at,
	} = data;
	const router = useRouter();
	return (
		<Grid
			container
			spacing={4}
			sx={{
				mb: 4,
				p: { sm: 1 },
			}}
			alignItems={"center"}
		>
			<Grid item xs={12} sm={6} md={6}>
				{imageSrc && (
					<div style={pageStyles.imgWrapper}>
						<CardMedia
							sx={pageStyles.media}
							component="img"
							src={imageSrc}
							alt={title}
						/>
					</div>
				)}
			</Grid>
			<Grid item xs={12} sm={6} md={6}>
				<div
					style={{
						display: "flex",
						// justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					{category && (
						<Typography sx={pageStyles.category}>
							{category}
						</Typography>
					)}
					{published_at && (
						<Typography sx={pageStyles.date}>
							{format(new Date(published_at), "MMM dd, yyyy")}
						</Typography>
					)}
				</div>

				{title && (
					<Typography
						variant="h5"
						sx={pageStyles.title}
						className="text-clamp"
						onClick={() => router.push(`/blogs/${data.slug}`)}
					>
						{title}
					</Typography>
				)}
				{description && (
					<Typography
						variant="body2"
						sx={pageStyles.description}
						className="text-clamp"
					>
						{description}
					</Typography>
				)}
			</Grid>
		</Grid>
	);
}
