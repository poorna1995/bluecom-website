import { Box, Grid, Typography } from "@mui/material";
import AppImage from "components/Common/AppImage";
import DescriptionText from "components/Common/Typography/BodyText/DescriptionText";
import SectionTitleText from "components/Common/Typography/HeadingText/SectionTitleText";
import RedCrossIcon from "public/images/04WhatWePromise/RedCross.svg";
import GreenCheckIcon from "public/images/04WhatWePromise/GreenCheck.svg";
import React from "react";
import { GetStartedAndScheduleDemo } from "components/Common/Buttons/GetStartedAndScheduleDemo";

export default function WhatWePromiseComponent() {
	const focusLessData = [
		{
			title: "Operational bottlenecks",
		},
		{
			title: "Manual Excel based reports",
		},
		{
			title: "Integration complexities",
		},
	];
	const focusMoreData = [
		{
			title: "Business Growth",
		},
		{
			title: "Exploring new areas of Opportunities",
		},
		{
			title: "Improve Customer Experience Excellence",
		},
		{
			title: "Scaling Business",
		},
	];
	return (
		<>
			<Box
				sx={{
					// p: 1.5,
					maxWidth: "1440px",
					// mx: "auto",
				}}
			>
				<Grid
					paddingTop={{ xs: "64px", md: "0px" }}
					container
					alignItems="center"
					sx={{ m: { xs: "0px", md: "100px" } }}
				>
					<Grid
						item
						xs={12}
						sm={12}
						md={4}
						sx={{
							p: { xs: "8px", md: "0px" },
						}}
					>
						<Box
							sx={{
								maxWidth: "100%",
								textAlign: { xs: "center", md: "left" },
							}}
						>
							<Typography
								variant="h2"
								sx={{
									fontSize: { xs: "28px", md: "42px" },
									fontWeight: 800,
									color: "#151515",
									fontFamily: "Manrope, sans-serif",
									color: "#4F44E0",
									// maxWidth: { xs: "100%", md: "100%" },
									textAlign: { xs: "center", md: "left" },
								}}
							>
								What we promise
							</Typography>
							<Typography
								variant="subtitle1"
								component="p"
								sx={{
									color: "#313131",
									fontSize: "18px",
									fontWeight: 700,
									mt: "24px",
									mr: { xs: 0, md: 2 },
									fontFamily: "Manrope, sans-serif",
									// maxWidth: { xs: "350px", md: "100%" },
									textAlign: { xs: "center", md: "left" },
								}}
							>
								Our team is passionate about helping you
								streamline your ecommerce business and committed
								to providing you with the tools and support you
								achieve success
							</Typography>
							<Box
								sx={{
									mt: "24px",
									display: "flex",
									justifyContent: {
										xs: "center",
										md: "flex-start",
									},
									alignItems: {
										xs: "center",
										md: "flex-start",
									},
								}}
							>
								<GetStartedAndScheduleDemo />
							</Box>
						</Box>
					</Grid>
					<Grid
						item
						xs={12}
						sm={12}
						md={7}
						sx={{
							p: "16px",
						}}
					>
						<Box
							sx={{
								display: "flex",
								flexDirection: { xs: "column", md: "row" },
								maxWidth: { xs: "325px", md: "100%" },
								mx: {
									xs: "auto",
								},
							}}
						>
							{/* Card1 */}
							<Box
								sx={{
									p: "30px",
									m: { xs: "30px 0", md: "60px 0" },
									borderRadius: "20px",
									boxShadow:
										"0px 0px 20px 2px rgba(0,0,0,0.1)",
									width: "100%",
									flex: "1",
								}}
							>
								<Typography
									variant="h3"
									sx={{
										fontSize: { xs: "21px", md: "28px" },
										fontWeight: 800,
										color: "#151515",
										span: { color: "#EA3223" },
										mb: "44px",
										fontFamily: "Manrope, sans-serif",
									}}
								>
									Focus <span>Less On</span>
								</Typography>
								<Box
									sx={{
										display: "flex",
										flexDirection: "column",
										gap: "1rem",
										fontFamily: "Manrope, sans-serif",
									}}
								>
									{focusLessData.map((item, index) => (
										<Box
											key={index}
											sx={{
												display: "flex",
												alignItems: "flex-start",
												gap: "5px",
											}}
										>
											<div>
												<AppImage
													src={RedCrossIcon}
													alt="Red Cross Icon"
													sx={{ mt: "10px", mr: 1 }}
												/>
											</div>
											<Typography
												variant="subtitle1"
												component="p"
												sx={{
													fontSize: {
														md: "21px",
														xs: "18px",
													},
													fontWeight: 600,
													fontFamily:
														"Manrope, sans-serif",
												}}
											>
												{item.title}
											</Typography>
										</Box>
									))}
									{/* <Box
										sx={{
											display: "flex",
											alignItems: "center",
											gap: "5px",
										}}
									>
										<AppImage
											src={RedCrossIcon}
											alt="Red Cross Icon"
										/>
										<Typography
											variant="subtitle1"
											component="p"
											sx={{
												fontSize: "21px",
												fontWeight: 600,
												fontFamily:
													"Manrope, sans-serif",
											}}
										>
											Operational bottlenecks
										</Typography>
									</Box>
									<Box
										sx={{
											display: "flex",
											alignItems: "flex-start",
											justifyContent: "flex-start",
											gap: "5px",
										}}
									>
										<AppImage
											src={RedCrossIcon}
											alt="Red Cross Icon"
											sx={{
												mt: "10px",
											}}
										/>
										<Typography
											variant="subtitle1"
											component="p"
											sx={{
												fontSize: "21px",
												fontWeight: 600,
												fontFamily:
													"Manrope, sans-serif",
											}}
										>
											Manual Excel based reports
										</Typography>
									</Box>
									<Box
										sx={{
											display: "flex",
											alignItems: "flex-start",
											justifyContent: "flex-start",
											gap: "5px",
										}}
									>
										<AppImage
											src={RedCrossIcon}
											alt="Red Cross Icon"
											sx={{
												mt: "10px",
											}}
										/>
										<Typography
											variant="subtitle1"
											component="p"
											sx={{
												fontSize: "21px",
												fontWeight: 600,
												fontFamily:
													"Manrope, sans-serif",
											}}
										>
											Integration complexities
										</Typography>
									</Box> */}
								</Box>
							</Box>
							{/* card2 */}
							<Box
								sx={{
									ml: { xs: "0", md: "23px" },
									p: { xs: "30px", md: "74px 43px" },
									borderRadius: "20px",
									boxShadow:
										"0px 0px 20px 2px rgba(0,0,0,0.1)",
									backgroundColor: "#4F44E0",
									maxWidth: "100%",
									flex: "1",
									mx: "auto",
								}}
							>
								<Typography
									variant="h3"
									sx={{
										fontSize: { xs: "21px", md: "28px" },
										fontWeight: 800,
										color: "#151515",
										span: { color: "#4DC27C" },
										mb: "36px",
										color: "#fff",
										fontFamily: "Manrope, sans-serif",
									}}
								>
									Focus <span>More On</span>
								</Typography>
								<Box
									sx={{
										display: "flex",
										flexDirection: "column",
										gap: "1rem",
										color: "#fff",
									}}
								>
									{focusMoreData.map((item, index) => (
										<Box
											sx={{
												display: "flex",
												alignItems: "flex-start",
												gap: "5px",
											}}
											key={index}
										>
											<div>
												<AppImage
													src={GreenCheckIcon}
													alt="Green Check Icon"
													sx={{ mt: "10px", mr: 1 }}
												/>
											</div>
											<Typography
												variant="subtitle1"
												component="p"
												sx={{
													fontSize: {
														md: "21px",
														xs: "18px",
													},
													fontWeight: 600,
													fontFamily:
														"Manrope, sans-serif",
												}}
											>
												{item.title}
											</Typography>
										</Box>
									))}
									{/* <Box
										sx={{
											display: "flex",
											alignItems: "center",
											gap: "5px",
										}}
									>
										<AppImage
											src={GreenCheckIcon}
											alt="Green Check Icon"
										/>
										<Typography
											variant="subtitle1"
											component="p"
											sx={{
												fontSize: "21px",
												fontWeight: 600,
												fontFamily:
													"Manrope, sans-serif",
											}}
										>
											Business Growth
										</Typography>
									</Box>
									<Box
										sx={{
											display: "flex",
											alignItems: "center",
											gap: "5px",
											alignItems: "flex-start",
											justifyContent: "flex-start",
										}}
									>
										<AppImage
											src={GreenCheckIcon}
											alt="Green Check Icon"
											sx={{
												mt: "10px",
											}}
										/>
										<Typography
											variant="subtitle1"
											component="p"
											sx={{
												fontSize: "21px",
												fontWeight: 600,
												fontFamily:
													"Manrope, sans-serif",
											}}
										>
											Exploring new areas of Opportunities
										</Typography>
									</Box>
									<Box
										sx={{
											display: "flex",
											alignItems: "center",
											gap: "5px",
											alignItems: "flex-start",
											justifyContent: "flex-start",
										}}
									>
										<AppImage
											src={GreenCheckIcon}
											alt="Green Check Icon"
											sx={{
												mt: "10px",
											}}
										/>
										<Typography
											variant="subtitle1"
											component="p"
											sx={{
												fontSize: "21px",
												fontWeight: 600,
												fontFamily:
													"Manrope, sans-serif",
											}}
										>
											Improve Customer Experience
											Excellence
										</Typography>
									</Box>
									<Box
										sx={{
											display: "flex",
											alignItems: "center",
											gap: "5px",
										}}
									>
										<AppImage
											src={GreenCheckIcon}
											alt="Green Check Icon"
										/>
										<Typography
											variant="subtitle1"
											component="p"
											sx={{
												fontSize: "21px",
												fontWeight: 600,
												fontFamily:
													"Manrope, sans-serif",
											}}
										>
											Scaling Business
										</Typography>
									</Box> */}
								</Box>
							</Box>
						</Box>
					</Grid>
				</Grid>
			</Box>
		</>
	);
}
