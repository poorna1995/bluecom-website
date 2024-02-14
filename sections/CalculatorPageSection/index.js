import { Grid } from "@mui/material";
import React from "react";
import CalculatorHeaderComponent from "./components/CalculatorHeaderComponent";
import CalculatorComponent from "./components/CalculatorComponent";
import CalculatorQAComponent from "./components/CalculatorQAComponent";
import BannerBookDemoComponent from "sections/HomePageSections/components/BannerBookDemoComponent";
import AmazonCalculatorHeaderSection from "./AmazonFBAProfitCalculatorPageSections/AmazonCalculatorHeaderSection";

export default function CalculatorPageSection() {
	return (
		<Grid
			container
			marginX={"auto"}
			justifyContent={"center"}
			maxWidth={"1440px"}
		>
			<Grid item xs={12} md={12} lg={12}>
				{/* <BannerBookDemoComponent /> */}
				{/* <CalculatorHeaderComponent />
				 */}
				<AmazonCalculatorHeaderSection
					title={`Reorder Quantity Calculator`}
				/>
			</Grid>
			<Grid
				item
				xs={12}
				md={12}
				lg={12}
				backgroundColor={"#F9FAFF"}
				border={"1px solid #1212121A"}
				borderRadius={5}
				// mx={"auto"}
				mt={2}
				mb={10}
			>
				<CalculatorComponent />
			</Grid>
			<Grid item xs={12} md={12} lg={12} mb={6}>
				<CalculatorQAComponent />
			</Grid>
		</Grid>
	);
}
