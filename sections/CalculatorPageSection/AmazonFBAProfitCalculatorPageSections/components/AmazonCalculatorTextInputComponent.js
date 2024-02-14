import { Box, styled } from "@mui/material";
import React from "react";

const StyledInput = styled("input")(({ theme }) => ({
	border: "none",
	"&:focus": {
		outline: "none",
	},
	padding: 4,
	paddingLeft: "10px",
}));

export default function AmazonCalculatorTextInputComponent({
	pageStyles,
	field,
	values,
	errorMessage,
	handleChange,
}) {
	return (
		<Box
			sx={{
				...pageStyles.textInputStyles,

				// width: "400px",
				"& .input-container": {
					background: "white",

					// outline: "1px solid #000",
					border: `1px solid #989898`,
					outline: `1px solid transparent`,
					borderRadius: "6px",
				},
				"& .input-container:focus-within": {
					// outline: "1px solid #000",
					// border: "1px solid #000",
					border: (theme) =>
						`1px solid ${theme.palette.primary.main}`,
					outline: (theme) =>
						`1px solid ${theme.palette.primary.main}`,
					borderRadius: "6px",
				},
			}}
		>
			<Box
				className="input-container"
				sx={{
					display: "flex",
					alignItems: "center",
					color: "#151515",
					fontFamily: "Plus Jakarta Sans",
					fontSize: "14px",
					fontStyle: "normal",
					fontWeight: 500,
					lineHeight: " normal",
				}}
			>
				<span
					style={{
						background: "rgba(79, 68, 224, 0.10)",
						padding: "8px",
						paddingLeft: "10px",
						paddingRight: "10px",
						borderTopLeftRadius: "6px",
						borderBottomLeftRadius: "6px",
					}}
				>
					{field.symbol}
				</span>
				<StyledInput
					sx={
						{
							// ...pageStyles.textInputStyles,
						}
					}
					// size="small"
					type={field.type}
					placeholder={field.placeholder}
					value={Number(values[field.input_key]).toString()}
					name={field.input_key}
					onChange={(e) =>
						handleChange(e, field.type, field.input_key, field)
					}
					helperText={errorMessage[field.input_key]}
					error={errorMessage[field.input_key] ? true : false}
					// InputProps={{
					// 	startAdornment: (
					// 		<InputAdornment position="start"></InputAdornment>
					// 	),
					// }}
				/>
			</Box>
		</Box>
	);
}
