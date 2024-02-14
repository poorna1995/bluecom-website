import { Box } from "@mui/material";
import DescriptionText from "components/Common/Typography/BodyText/DescriptionText";
import SectionTitleText from "components/Common/Typography/HeadingText/SectionTitleText";
import React from "react";
import FlashFreeChip from "./FlashFreeChip";
import FlashIcon from "./Icons/FlashIcon";

export default function CalculatorHeaderComponent() {
	return (
		<Box sx={{ textAlign: "center", mt: "22px" }}>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					width: "fit-content",
					mx: "auto",
					gap: "0.5rem",
					alignItems: "center",
				}}
			>
				<Box
					sx={{ display: "flex", alignItems: "center", gap: "1rem" }}
				>
					<SectionTitleText
						sx={{
							fontSize: "52px",
							fontWeight: "700",
							lineHeight: "62px",
							fontFamily: "Plus Jakarta Sans, sans-serif",
							color: "#151515",
							mb: "12px",
						}}
					>
						Reorder Quantity Calculator
					</SectionTitleText>
					<FlashFreeChip flashIcon={<FlashIcon />} label={"FREE"} />
				</Box>
			</Box>
			<DescriptionText
				sx={{
					fontSize: "16px",
					fontWeight: "600",
					fontFamily: "Plus Jakarta Sans, sans-serif",
					color: "#151515",
				}}
			>
				A simple tool to know how much you need to buy before the
				Inventory goes OOS
			</DescriptionText>
		</Box>
	);
}
