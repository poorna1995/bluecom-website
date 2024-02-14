import {
	Button,
	Card,
	CardContent,
	CardMedia,
	Grid,
	Typography,
} from "@mui/material";
import { format } from "date-fns";
import React from "react";

const pageStyles = {
	root: {
		borderRadius: "5px",
		// background: "transparent",
		// height: "390px",
		boxShadow: "none",

		padding: { sm: "8px",  },
		// display: "flex",
		// flexDirection: "column",
		// justifyContent: "space-between",
		// [theme.breakpoints.down("md")]: {
		// 	height: "auto",
		// },
	},
	media: {
		width: "100%",
		height: "250px",
		objectFit: "cover",
		transition: "transform 450ms ",
		borderRadius: "5px",

		"&:hover": {
			transform: "scale(1.08)",
		},
	},
	imgWrapper: {
		overflow: "hidden",
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
		fontSize: "22px",
		fontFamily: "Manrope, sans-serif",
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

export default function DefaultBlogCard({
	fileName,
	category,
	author,
	date,
	title,
	description,
	image_url: imageSrc,
	published_at,
}) {
	// const createdAtDate =date&& new Date(date);
	// const formattedDate =createdAtDate&& format(createdAtDate, "MMM dd, yyyy");
	return (
		<Card sx={pageStyles.root}>
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

			<CardContent sx={pageStyles.content}>
				<Grid
					container
					style={{ display: "flex", alignItems: "center" }}
				>
					{/* {category && (
						<Button
							style={{
								textTransform: "capitalize",
								marginRight: "16px",
							}}
							variant="outlined"
						>
							{category}
						</Button>
					)} */}
					{/* {date && <Typography variant="subtitle1">{formattedDate}</Typography>} */}
				</Grid>
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
					<Typography variant="h5" sx={pageStyles.title}>
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
			</CardContent>
			{/* <CardActions style={{ width: "100%", justifyContent: "flex-end" }}>
      <Button
        endIcon={<FaChevronRight />}
        style={{ textTransform: "initial", alignSelf: "flex-end" }}
      >
        Read more
      </Button>
    </CardActions> */}
		</Card>
	);
}
