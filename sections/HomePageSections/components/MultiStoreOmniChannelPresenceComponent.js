import { Box, Card, Grid } from "@mui/material";
import AppImage from "components/Common/AppImage";
import CardTitle from "components/Common/Typography/HeadingText/CardTitle";
import SectionTitleText from "components/Common/Typography/HeadingText/SectionTitleText";
import ECommerceIcon from "public/images/06MultiStore/01EcommerceOperations.svg";
import ShopifyLogo from "public/images/06MultiStore/shopify.png";
import WoocommerceLogo from "public/images/06MultiStore/woocommerce.png";
import BigCommerceLogo from "public/images/06MultiStore/bigcommerce.svg";
import React from "react";

export default function MultiStoreOmniChannelPresenceComponent() {
	return (
		<>
			<Grid
				container
				maxWidth="1440px"
				sx={{
					pt: { xs: "44px", md: "140px" },
					pb: "140px",
					pl: "16px",
					pr: "16px",
				}}
			>
				{/* <Grid item xs={12} sm={12} md={12}> */}
				<Box
					sx={{
						margin: "auto",
						maxWidth: "100%",
					}}
				>
					<SectionTitleText
						sx={{
							color: "#000000",
							fontSize: { xs: "24px", sm: "36px", md: "42px" },
							// lineHeight: "100px",
							fontWeight: "800",
							// ml: "136px",
							textAlign: "center",
							fontFamily: "Manrope, sans-serif",
							maxWidth: { xs: "100%", md: "100%" },
							mb: {
								xs: "0px",
								sm: 2,
								md: "0px",
							},
						}}
					>
						Multi Store, Omnichannel Presence
					</SectionTitleText>
				</Box>
				{/* </Grid> */}
				<Grid item xs={12} sm={12} md={12}>
					<Box
						sx={{
							display: "flex",
							flexDirection: { xs: "column", md: "row" },
							mt: "100px",
							pb: "97px",
							justifyContent: "center",
							gap: { xs: "150px", md: "200px" },
							backgroundImage: `url("images/06MultiStore/02Loop.svg")`,
							backgroundRepeat: "no-repeat",
							backgroundPosition: "center",
							backgroundSize: { xs: "70%", md: "31%" },
							backgroundPosition: {
								xs: "50% 10%",
								md: "50% 10%",
							},
							height: { xs: "250px", md: "500px" },
							maxWidth: "100%",
							// m: { xs: "auto", sm: "auto", md: "0px" },
						}}
					>
						{/*  Single Platform   */}
						<Box
							maxWidth={["100%", "100%"]}
							sx={{
								mt: {
									xs: 16,

									md: 0,
								},
							}}
						>
							<SectionTitleText
								sx={{
									fontSize: {
										xs: "18px",
										sm: "28px",
										md: "34px",
									},
									fontWeight: "800",
									color: "#4F44E0",
									mt: { xs: "84px", sm: "72px", md: "63px" },
									fontFamily: "Manrope, sans-serif",
									textAlign: { xs: "center", md: "left" },
									mb: {
										xs: "0px",
										sm: 2,
										md: "0px",
									},
									pt: {
										sm: 4,
										xs: 0,
										md: 0,
									},
								}}
							>
								Single Platform
							</SectionTitleText>
							<Box
								sx={{
									display: "flex",
									gap: "8px",
									backgroundColor: "#FFFFFF",
									boxShadow:
										"0px 0px 20px 2px rgba(0,0,0,0.1)",
									alignItems: "center",
									borderRadius: "20px",
									paddingLeft: {
										xs: "4px",
										sm: "24px",
										md: "40px",
									},
									mt: { xs: "8px", md: "32px" },
									maxWidth: { xs: "100%", md: "100%" },
								}}
							>
								<AppImage src={ECommerceIcon} />
								<SectionTitleText
									sx={{
										fontSize: { xs: "18px", md: "28px" },
										fontWeight: "700",
										color: "#000",
										p: { xs: "24px", md: "60px" },
										fontFamily: "Manrope, sans-serif",
									}}
								>
									E-Commerce Operations
								</SectionTitleText>
							</Box>
						</Box>
						{/* Multi Platform   */}
						<Box maxWidth={["100%", "100%"]}>
							<SectionTitleText
								sx={{
									fontSize: {
										xs: "18px",
										sm: "28px",
										md: "34px",
									},
									fontWeight: "800",
									color: "#4F44E0",
									mt: { xs: "0px", md: "63px" },

									// display: "flex",
									// flexDirection: "column",
									// justifyContent: "center",
									// alignItems: "center",
									textAlign: { xs: "center", md: "center" },
									fontFamily: "Manrope, sans-serif",
									mb: {
										sm: "16px",
										md: "0px",
										xs: "0px",
									},
								}}
							>
								Multiple Platform
							</SectionTitleText>
							<Box
								sx={{
									display: "flex",
									gap: "98px",
									backgroundColor: "#fff",
									boxShadow:
										" 0px 2px 12px 0px rgba(0, 0, 0, 0.12)",
									// "0px 0px 20px 2px rgba(0,0,0,0.1)",
									alignItems: "center",
									borderRadius: "20px",
									// p: "36px 100px",
									p: { xs: "24px 10px", md: "36px 100px" },
									mt: { xs: "8px", md: "32px" },
									flexDirection: "column",
									maxWidth: { xs: "100%", md: "100%" },
									// flexWrap: "wrap",
								}}
							>
								<div
									style={{
										display: "flex",
										alignItems: "center",
									}}
								>
									<AppImage
										sx={{
											width: { xs: "140px", md: "100%" },
											height: { xs: "50px", md: "100%" },
										}}
										src={ShopifyLogo}
									/>
									<AppImage
										sx={{
											width: { xs: "50px", md: "100%" },
											height: { xs: "50px", md: "100%" },
											ml: 4,
										}}
										src={WoocommerceLogo}
									/>
								</div>
								<div>
									<AppImage
										sx={{
											width: { xs: "150px", md: "100%" },
											height: { xs: "50px", md: "100%" },
										}}
										src={BigCommerceLogo}
									/>
								</div>
							</Box>
						</Box>
					</Box>
				</Grid>
			</Grid>
		</>
	);
}
