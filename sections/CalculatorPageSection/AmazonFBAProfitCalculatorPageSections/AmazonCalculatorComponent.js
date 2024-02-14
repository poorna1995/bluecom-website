import { Box, Container, Grid } from "@mui/material";
import React from "react";
import AmazonCalculatorInputComponent from "./AmazonCalculatorInputComponent";
import AmazonCalculatorOutputComponent from "./AmazonCalculatorOutputComponent";

export default function AmazonCalculatorComponent() {
	return (
		<Box
			sx={{
				borderRadius: "20px",
				border: "1px solid rgba(18, 18, 18, 0.10)",
				background: "#F9FAFF",
				p: 3,
				maxWidth: "1440px",
				margin: "auto",
				marginBottom: 8,
			}}
		>
			<Grid container spacing={4}>
				<Grid
					item
					xs={12}
					md={7}
					sx={{
						ml: {
							xs: 0,
							md: 2,
						},
					}}
				>
					<AmazonCalculatorInputComponent />
				</Grid>
				<Grid item xs={12} md={4.5}>
					<AmazonCalculatorOutputComponent />
				</Grid>
			</Grid>
		</Box>
	);
}
