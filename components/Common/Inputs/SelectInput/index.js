import { Box, InputLabel, useTheme } from "@mui/material";
import React from "react";
import Select from "react-select";

const FormSelectInput = ({
	title,
	required,
	options,
	labelStyles,
	noPadding,
	styles,
	containerStyles,
	inputRef,
	...props
}) => {
	const ref = React.createRef();

	const theme = useTheme();
	const customStyles = {
		control: (styles) => ({
			...styles,
			paddingTop: "6px",
			paddingBottom: "7px",
			borderRadius: "8px",
			":hover": {
				borderColor: theme.palette.grey[800],
			},
			":focus-within": {
				borderColor: theme.palette.primary.main,
			},
		}),
		menu: (provided) => ({
			...provided,
			zIndex: 99999,
			// fontFamily: "Mulish, sans-serif",
		}),
		indicatorSeparator: (styles) => ({
			...styles,
			display: "none",
		}),
		singleValue: (styles) => ({
			...styles,
			fontWeight: "600",
		}),
	};

	return (
		<Box
			sx={{
				paddingTop: noPadding ? "0px" : "24px",
				width: "100%",
				...containerStyles,
			}}
			ref={inputRef}
		>
			{title && (
				<InputLabel
					style={
						labelStyles
							? labelStyles
							: {
									color: "#222222",
									// margin: theme.spacing(1),
									marginLeft: 0,
									marginBottom: "8px",
									fontSize: "14px",
									fontWeight: 500,
									lineHeight: "20px",
									letterSpacing: "-3%",
							  }
					}
				>
					{title}
					{required && "*"}
				</InputLabel>
			)}
			<Select
				{...props}
				ref={ref}
				styles={{ ...customStyles, ...styles }}
				closeMenuOnSelect
				theme={(th) => ({
					...th,
					// borderRadius: 0,
					colors: {
						...th.colors,
						primary: theme.palette.primary.main,
					},
					borderColor: th.primary,
				})}
				options={options}
			/>
		</Box>
	);
};

export default FormSelectInput;
