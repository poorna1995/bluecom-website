import { Box, Typography } from "@mui/material";
import SectionTitleText from "components/Common/Typography/HeadingText/SectionTitleText";
import React from "react";
import CalenderIcon from "./Icons/CalenderIcon";
import CircularGraphIcon from "./Icons/CircularGraphIcon";
import ShopBagIcon from "./Icons/ShopBagIcon";

export default function CalculatorReport({
	forcastPerDay,
	forcastLeadTime,
	reorder,
}) {
	const reportsData = [
		{
			report: "Forcast Per Day",
			icon: <CalenderIcon />,
			value: forcastPerDay,
		},
		{
			report: "Forcast (2 Lead Times)",
			icon: <CircularGraphIcon />,
			value: forcastLeadTime,
		},
		{ report: "Reorder Qty(Now)", icon: <ShopBagIcon />, value: reorder },
	];
	const report = reportsData.map((item, index) => {
		return (
			<Box
				sx={{ display: "flex", gap: "1.25rem", mt: "2.125rem" }}
				key={index}
			>
				<Box
					sx={{
						background: "#F9FAFF",
						width: "fit-content",
						height: "fit-content",
						p: "13px",
						borderRadius: "10rem",
						display: "flex",
						alignItems: "center",
						"& svg path": {
							stroke: "#4F44E0",
						},
					}}
				>
					{item.icon}
				</Box>
				<Box>
					<SectionTitleText
						sx={{
							mb: "8px",
							color: "#000",
							fontSize: "16px",
							fontWeight: "600",
							fontFamily: "Manrope, sans-serif",
						}}
					>
						{item.report}
					</SectionTitleText>
					<Typography
						sx={{
							fontSize: "32px",
							fontWeight: "700",
							fontFamily: "Manrope, sans-serif",
							color: "#000",
						}}
					>
						{item.value}
					</Typography>
				</Box>
			</Box>
		);
	});

	return (
		<Box
			sx={{
				background: "#fff",
				p: "28px",
				border: "1px solid rgba(18, 18, 18, 0.10)",
				borderRadius: "12px",
				height: "100%",
			}}
		>
			<SectionTitleText sx={{ color: "#000" }}>Report</SectionTitleText>

			{report}
		</Box>
	);
}
