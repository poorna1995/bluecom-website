import { Box, Grid } from "@mui/material";
import AppImage from "components/Common/AppImage";
import DescriptionText from "components/Common/Typography/BodyText/DescriptionText";
import SectionTitleText from "components/Common/Typography/HeadingText/SectionTitleText";
import React from "react";

import CustomerFocusedIcon from "components/Common/Icons/HomePageSectionIcons/05WhyUsIcons/CustomerFocusedIcon";
import OperateWithExcelIcon from "components/Common/Icons/HomePageSectionIcons/05WhyUsIcons/OperateWithExcelIcon";
import ProvideScaleBenifitsIcon from "components/Common/Icons/HomePageSectionIcons/05WhyUsIcons/ProvideScaleBenifitsIcon";
import EvolveAndBuildTrustIcon from "components/Common/Icons/HomePageSectionIcons/05WhyUsIcons/EvolveAndBuildTrustIcon";
import { GetStartedAndScheduleDemo } from "components/Common/Buttons/GetStartedAndScheduleDemo";

export default function WhyUsComponent() {
	const reasonList = [
		{
			icon: <CustomerFocusedIcon />,
			title: "Customer Focused",
			description:
				"Our  Excellence in  providing 100% Service to Enhance Your Business Success",
		},
		{
			icon: <OperateWithExcelIcon />,
			title: "Operate with Excellence",
			description:
				"Leveraging aggregate 20+ Years of Ecommerce Expertise to Help Your Business Succeed",
		},
		{
			icon: <ProvideScaleBenifitsIcon />,
			title: "Provide Scale benefits",
			description:
				"Unleashing the Power of AI for  Unlocking Growth and Potential",
		},
		{
			icon: <EvolveAndBuildTrustIcon />,
			title: "Evolve & Build Trust",
			description:
				"Our customers success as our priority.  We are obsessed of solving our customer problems",
		},
	];
	const reasonCard = reasonList.map((reason, index) => (
		<Grid item xs={12} sm={6} md={5} key={index}>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					// mr: "200px",
					textAlign: "left",
					m: { xs: "auto", md: "0px" },
				}}
			>
				{/* <AppImage src={reason.icon} sx={{ mb: "24px" }} /> */}
				<span>{reason.icon}</span>
				<SectionTitleText
					sx={{
						fontSize: ["18px", "32px"],
						fontSize: {
							xs: "18px",
							sm: "18px",
							md: "22px",
							lg: "32px",
							xl: "32px",
						},
						fontWeight: "800",
						color: "#151515",
						mt: ["0px", "24px"],
						mb: ["8px", "12px"],
						fontFamily: "Manrope, sans-serif",
					}}
				>
					{reason.title}
				</SectionTitleText>
				<DescriptionText
					sx={{
						// fontSize: ["16px", "18px"],
						fontSize: {
							xs: "16px",
							sm: "16px",
							md: "16px",
							lg: "18px",
							xl: "18px",
						},
						fontWeight: "600",
						color: "#313131",
						lineHeight: "26px",
						fontFamily: "Manrope, sans-serif",
					}}
				>
					{reason.description}
				</DescriptionText>
			</Box>
		</Grid>
	));
	return (
		// clear
		<Box
			sx={{
				maxWidth: "100%",
				paddingTop: ["44px", "0px"],
				// marginBottom: "64px",
			}}
		>
			<Box
				sx={{
					// m: "47px 64px",
					// p: "47px 0 73px 0",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					textAlign: "center",
					backgroundColor: "#F9FAFF",
					// border: "1px solid",
					// borderRadius: "10px",
					// p: "0 0 0 148px",
					p: { md: "16px", xs: "8px" },
				}}
			>
				<Box>
					<SectionTitleText
						sx={{
							fontSize: "42px",
							color: "#4F44E0",
							// fontSize: ["24px", "42px"],
							fontSize: {
								xs: "24px",
								sm: "24px",
								md: "32px",
								lg: "42px",
								xl: "42px",
							},
							fontWeight: "800",
							fontFamily: "Manrope, sans-serif",
							paddingTop: "64px",
						}}
					>
						Why Us
					</SectionTitleText>
					<DescriptionText
						sx={{
							color: "#313131",
							fontSize: ["16px", "18px"],
							fontWeight: "600",
							mt: "16px",
							mb: "32px",
							fontFamily: "Manrope, sans-serif",
						}}
					>
						Get more from your eCommerce marketing, with connected
						solutions that <br /> maximize the value of your
						customers.
					</DescriptionText>
				</Box>
				<Box
					sx={{
						// padding: "59px 150px",
						maxWidth: "1440px",
					}}
				>
					<Grid
						container
						spacing={4}
						rowSpacing={5}
						// columnSpacing={{ xs: 1, sm: 2, md: 25 }}
						// rowGap={3}
						// columnGap={3}
						alignItems={"space-between"}
						justifyContent={"space-between"}
						sx={{
							px: {
								xs: 1,
								md: 1,
								sm: 1,
							},
						}}
					>
						{reasonCard}
					</Grid>
				</Box>
				<GetStartedAndScheduleDemo
					style={{
						paddingTop: "32px",
						paddingBottom: "64px",
					}}
				/>
			</Box>
		</Box>
	);
}
