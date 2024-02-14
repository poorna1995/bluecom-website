import { Box } from "@mui/material";
import SectionTitleText from "components/Common/Typography/HeadingText/SectionTitleText";
import React from "react";
import FreeLogo from "../components/Icons/FreeLogo";
import DescriptionText from "components/Common/Typography/BodyText/DescriptionText";
import FlashFreeChip from "../components/FlashFreeChip";
import FlashIcon from "../components/Icons/FlashIcon";

export default function AmazonCalculatorHeaderSection({ title, description }) {
	return (
		<Box sx={{ textAlign: "center", py: 4 }}>
			<Box
				sx={{
					display: "flex",
					// flexDirection: "column",
					width: "fit-content",
					mx: "auto",
					gap: "0.5rem",
					alignItems: "center",
					"& .hide-on-mobile": {
						display: { xs: "none", sm: "none", md: "block" },
					},
				}}
			>
				<SectionTitleText
					sx={{
						fontSize: { md: "40px", sm: "36px", xs: "28px" },
						fontWeight: "700",
						lineHeight: { md: "62px", sm: "45px", xs: "36px" },
						fontFamily: "Plus Jakarta Sans, sans-serif",
						color: "#151515",
						// mb: "12px",
						mr: 2,
					}}
				>
					{title}
				</SectionTitleText>
				<div className="hide-on-mobile">
					<FlashFreeChip
						flashIcon={<FlashIcon />}
						label={"FREE"}

						// fontSize={"12px"}
					/>
				</div>

				{/* <FreeLogo /> */}
			</Box>
			{/* <DescriptionText
				sx={{
					fontSize: "16px",
					fontWeight: "600",
					fontFamily: "Plus Jakarta Sans, sans-serif",
					color: "#151515",
				}}
			>
				{description}
			</DescriptionText> */}
		</Box>
	);
}
