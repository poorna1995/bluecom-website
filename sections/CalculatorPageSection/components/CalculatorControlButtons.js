import { Box, Button } from "@mui/material";
import OutlinedButton from "components/Common/Buttons/OutlinedButton";
import PrimaryButton from "components/Common/Buttons/PrimaryButton";
import React from "react";

export default function CalculatorControlButtons({
	handleCalculate,
	handleReset,
}) {
	return (
		<Box
			sx={{
				display: "flex",
				width: "fit-content",
				margin: "0 auto",
				// gap: "1.25rem",
        // width: "100%",
        // display: "flex",
        // justifyContent: "flex-end",
        // alignItems: "center",
        // marginTop: "32px",
      
			}}
		>
			<PrimaryButton
				onClick={handleCalculate}
				sx={{
					height: { md: "58px", xs: "48px" },
					fontSize: { md: "16px", xs: "14px" },
					fontFamily: "Plus Jakarta Sans",
					fontStyle: "normal",
					fontWeight: 700,
					lineHeight: "20px",
					borderRadius: "8px",
				}}
			>
				Calculate Now
			</PrimaryButton>
			<OutlinedButton
				sx={{
					textTransform: "none",
					ml: 2,
					mr: { md: 4, xs: 0 },
					height: { md: "58px", xs: "48px" },
					fontSize: { md: "16px", xs: "14px" },
					fontFamily: "Plus Jakarta Sans",
					fontStyle: "normal",
					fontWeight: 700,
					lineHeight: "20px",
					borderRadius: "8px",
					border: (theme) => `2px solid #4F44E0`,
				}}
				onClick={handleReset}
			>
				Reset
			</OutlinedButton>
		</Box>
	);
}
