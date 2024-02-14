import BaseDialog from "components/Common/Dialog";
import React from "react";
import Lottie from "lottie-react";
import Success from "./success.json";
import { Box, Typography } from "@mui/material";

export default function SentSuccessDialog({ open, handleClose }) {
	setTimeout(() => {
		handleClose();
	}, 3000);
	return (
		<BaseDialog open={open} handleClose={handleClose}>
			<Box
				sx={{
					display: "grid",
					placeItems: "center",
					p: 8,
				}}
			>
				<Lottie
					animationData={Success}
					style={{ width: "100px", height: "100px" }}
					// autoplay
					loop={false}
				/>
				<Typography
					sx={{
						fontWeight: 700,
						fontSize: "24px",
						lineHeight: "30px",
						textAlign: "center",
						color: "#0E0B3D",
						my: 2,
						mt: 4,
					}}
				>
					Downloaded Successfully!
				</Typography>
				{/* <Typography
					sx={{
						fontWeight: 600,
						fontSize: "14px",
						lineHeight: "24px",
						textAlign: " center",
						color: "#0E0B3D",

						maxWidth: "480px",
						margin: "auto",
						// my: 2,
					}}
				>
					We have sent the Whitepaper to your email. Please check the
					attached file. Thank you.
				</Typography> */}
			</Box>
		</BaseDialog>
	);
}
