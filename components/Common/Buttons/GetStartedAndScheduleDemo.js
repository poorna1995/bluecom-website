import { Box } from "@mui/material";
import React from "react";
import { GetStarted } from "./GetStarted";
import { ScheduleDemo } from "./ScheduleDemo";

export const GetStartedAndScheduleDemo = ({
	style,
	flexDirection,
	flexFlow,
}) => {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: flexDirection ? flexDirection : "row",
				flexFlow: flexFlow ? flexFlow : "row",
				gap: { md: "1rem", xs: 1 },
				fontFamily: "Manrope, sans-serif",
				width: "fit-content",

				...style,
			}}
		>
			<ScheduleDemo
				mt={"1rem"}
				widthInput={{ md: "159.2px", xs: "160px" }}
				heightInput={{ md: "52px", xs: "48px" }}
				padding={{ md: "6px 24px", sm: "6px 16px", xs: "6px 16px" }}
			/>

			<GetStarted
				widthInput={"fit-content"}
				heightInput={{ md: "52px", xs: "48px" }}
				fontSize={["15px", "16px"]}
				fontWeight={"700"}
				padding={{ md: "6px 24px", sm: "6px 16px", xs: "6px 16px" }}
			/>
			{/* <ScheduleDemo mt={"1rem"} heightInput={"52px"} mr= "0px" /> */}
		</Box>
	);
};
