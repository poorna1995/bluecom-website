import { Box, Button, Grid, Typography } from "@mui/material";
import AppImage from "components/Common/AppImage";
import SectionTitleText from "components/Common/Typography/HeadingText/SectionTitleText";
import React from "react";
import DescriptionText from "components/Common/Typography/BodyText/DescriptionText";
import FeatureHeroSection from "public/images/Features/ManageProductsSection/FeatureHeroSection.png";
import { GetStartedAndScheduleDemo } from "components/Common/Buttons/GetStartedAndScheduleDemo";
import {
	ArrowIcon,
	ScheduleIcon,
} from "sections/HomePageSections/components/BannerBookDemoComponent";

export default function FeaturesHeroSection({
	headerTitle,
	headerName,
	headerDescription,
	headerImage,
}) {
	function handleClickButton() {
		// handleClick();
		// router.push("/auth/login");
		window.open(`https://demo.bluecom.ai?type=demo`, "_blank");
	}

	return (
		<Box>
			<Grid
				container
				rowSpacing={0}
				columnSpacing={0}
				sx={{
					mt: { xs: "0px", sm: "0px", md: "100px" },
					p: ["0px", "0px", "63px"],
				}}
			>
				{/* Hero contents */}
				<Grid
					alignContent={"center"}
					item
					xs={12}
					md={6}
					// sx={{ padding: { xs: "16px", sm: "16px", md: "0px" } }}
				>
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							flexDirection: { xs: "column", md: "row" },
							borderRadius: "50px",
							background: "rgba(197, 98, 6, 0.10)",
							px: 3,
							py: 1,
							maxWidth: "500px",
							width: "auto",
							mt: { xs: "40px", md: "0" },
						}}
					>
						<Typography
							sx={{
								color: " #121212",
								fontFamily: "Plus Jakarta Sans",
								fontSize: "14px",

								fontStyle: "normal",
								fontWeight: "700",
								lineHeight: "20px",
								// flex: { xs: 0.65, md: 1 },
							}}
						>
							Delight in our app&rsquo;s thrilling experience!
						</Typography>
						<Button
							sx={{
								textTransform: "none",
								// border: `1px solid rgba(0, 0, 0, 0.20)`,
								height: "36px",
								fontFamily: " Plus Jakarta Sans",
								borderRadius: "8px",
								fontSize: "14px",
								fontStyle: "normal",
								fontWeight: 600,
								lineHeight: "20px",
								ml: { md: 2 },
								color: "rgba(225, 108, 0, 1)",
								// flex: { xs: 0.35, md: 1 },

								// width: "100%",
								// mr: 2,
								"&:hover": {
									background: "transparent",
									"& .arrow-icon ": {
										ml: 1,
									},
								},
							}}
							startIcon={<ScheduleIcon />}
							endIcon={<ArrowIcon />}
							onClick={handleClickButton}
							disableRipple
						>
							Product Tour
						</Button>
					</Box>

					<Typography
						// variant="h1"
						component={"h1"}
						sx={{
							// mt: "1rem",
							fontSize: { xs: "28px", sm: "28px", md: "60px" },
							fontWeight: 800,
							lineHeight: { xs: "34px", md: "85px" },
							color: "#151515",
							span: { color: "#4F44E0" },
							fontFamily: "Manrope, sans-serif",
							textAlign: ["center", "left"],
							maxWidth: "100%",
							marginX: {
								xs: "auto",
							},
						}}
					>
						<span>{headerTitle || "Manage Products"}</span> <br />
						<div> {headerName || "Easily In One Place"}</div>
					</Typography>

					<Box
						sx={{
							padding: { xs: "16px", sm: "16px", md: "0px" },
						}}
					>
						<Typography
							variant="body1"
							sx={{
								mt: "1rem",
								fontSize: {
									xs: "16px",
									sm: "16px",
									md: "18px",
								},
								fontWeight: 600,
								lineHeight: "28px",
								color: "#313131",
								fontFamily: "Manrope, sans-serif",
								textAlign: ["center", "left"],
								maxWidth: {
									xs: "100%",
									sm: "400px",
									md: "100%",
								},
							}}
						>
							{headerDescription ||
								"All-inclusive platform for Product Information, Inventory, Purchase Order, Vendor, and Location Management"}
						</Typography>

						{/* <GetStartedAndScheduleDemo /> */}
						<Box
							sx={{
								mt: "1rem",
								maxWidth: "100%",
								// m: { xs: "auto", sm: "auto", md: "0px" },
								display: "flex",
								justifyContent: {
									xs: "center",
									md: "flex-start",
								},
								alignItems: { xs: "center", md: "flex-start" },
							}}
						>
							<GetStartedAndScheduleDemo />
						</Box>

						<Typography
							variant="subtitle1"
							sx={{
								mt: "1rem",
								fontSize: "14px",
								fontWeight: 600,
								color: "#313131",
								fontFamily: "Manrope, sans-serif",
								// mx: { xs: "15px", md: "0px" },
							}}
						>
							{/* No Credit Card required */}
						</Typography>
					</Box>
				</Grid>
				{/* Hero Image */}
				<Grid
					item
					xs={12}
					md={6}
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<AppImage
						src={headerImage || FeatureHeroSection}
						sx={{
							p: "16px",
							width: ["120%", "120%"],
							height: "auto",
						}}
					/>
				</Grid>
			</Grid>
		</Box>
	);
}
