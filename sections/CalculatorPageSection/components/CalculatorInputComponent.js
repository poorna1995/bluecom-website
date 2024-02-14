import {
	Box,
	FormControl,
	Grid,
	IconButton,
	InputAdornment,
	MenuItem,
	Select,
	Tooltip,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import DescriptionText from "components/Common/Typography/BodyText/DescriptionText";
import SectionTitleText from "components/Common/Typography/HeadingText/SectionTitleText";
import * as React from "react";
import AmazonCalculatorInputComponent from "../AmazonFBAProfitCalculatorPageSections/AmazonCalculatorInputComponent";
import AmazonCalculatorTextInputComponent from "../AmazonFBAProfitCalculatorPageSections/components/AmazonCalculatorTextInputComponent";
import HelperTextIcon from "components/Common/Icons/CalculatorIcons/HelperTextIcon";

export default function CalculatorInputComponent({
	formValues = {},
	handleChange,
	handleKeyDown,
}) {
	const days = [
		{ days: 10, demand: 100, weight: 0.5, name: "L10" },
		// { days: 20, demand: 20, weight: 0.15, name: "L20" },
		{ days: 30, demand: 60, weight: 0.1, name: "L30" },
		{ days: 60, demand: 90, weight: 0.05, name: "L60" },
		{ days: 90, demand: 120, weight: 0.03, name: "L90" },
		{ days: 360, demand: 200, weight: 0.02, name: "L360" },
	];

	const inputs = [
		{
			label: "Product Minimum Order QTY*",
			name: "moq",
			placeholder: "0",
			tooltipText: "Minimum Order Quantity",
		},
		{
			label: "On Hand QTY*",
			name: "onHand",
			placeholder: "0",
			tooltipText: "On-hand quantity, also known as inventory quantity or stock level, refers to the total number of units of a product that a business currently has available in its inventory at a given time. It represents the physical count of products on hand that are ready to be sold or used for order fulfillment.",

		},
		{
			label: "PO QTY (in 2 lead times)",
			name: "poQty",
			placeholder: "0",
			tooltipText: "It is referred to the prospective inventory that will be received at warehouse/fulfillment center. On PO has promise dates from supplier, understanding the arrival dates of the placed inventory provides greater insights into calculating the total inventory during the period of interest.",

		},
		{
			label: "Safety Stock",
			name: "saftyStock",
			placeholder: "0",
			tooltipText: "Safety Stock",

		},
	];

	const inputsQty = inputs.map((input, index) => {
		return (
			<>
				<Grid item xs={12} md={8} lg={8} key={index} >
					<Box sx={{ display: "flex", alignItems: "center" }}>
						<DescriptionText
							sx={{
								fontSize: "16px",
								fontWeight: "700",
								fontFamily: "Plus Jakarta Sans, sans-serif",
								color: "#151515",
							}}
						>
							{input.label}
						</DescriptionText>
						<Tooltip
							title={input.tooltipText}
							arrow
							placement="top-start"
						>
							<IconButton>
								{" "}
								<HelperTextIcon />
							</IconButton>
						</Tooltip>
					</Box>
				</Grid>
				<Grid item xs={12} md={4} lg={4} key={index}>
					<Box
						sx={{
							// width: "400px",
							height: "36px",
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
							{/* <span
								style={{
									background: "rgba(79, 68, 224, 0.10)",
									padding: "9px",
									paddingLeft: "10px",
									paddingRight: "10px",
									borderTopLeftRadius: "6px",
									borderBottomLeftRadius: "6px",
									alignSelf: "center",
								}}
							>
								pcs
							</span> */}
							<TextField
								name={input.name}
								value={formValues[input.name]}
								id="outlined-number"
								type="tel"
								InputLabelProps={{
									shrink: true,
								}}
								inputProps={{
									style: { padding: "6.5px 10px" },
								}}
								sx={{
									width: "100%",
									"& .MuiOutlinedInput-root": {
										"& fieldset": {
											borderColor: "#989898", // Change the border color
											borderWidth: "1px", // Change the border width
											borderRadius: "6px",
											border: "none",
											"&:focus": {
												outline: "none",
											},
										},
									},
								}}
								placeholder={input.placeholder}
								onChange={handleChange}
								onKeyDown={handleKeyDown}
							/>
						</Box>
					</Box>
				</Grid>
			</>
		);
	});

	const demandProfile = days.map((item, index) => {
		return (
			<Grid item xs={12} md={4.2} lg={4.2} key={index}>
				<DescriptionText
					sx={{
						fontSize: "16px",
						fontWeight: "700",
						fontFamily: "Plus Jakarta Sans, sans-serif",

						color: "#151515",
						mb: "14px",
					}}
				>
					L{item.days} (last {item.days} days sales)
				</DescriptionText>
				<Box
					sx={{
						// width: "400px",
						height: "36px",
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
						{/* <span
							style={{
								background: "rgba(79, 68, 224, 0.10)",
								padding: "9px",
								paddingLeft: "10px",
								paddingRight: "10px",
								borderTopLeftRadius: "6px",
								borderBottomLeftRadius: "6px",
								alignSelf: "center",
							}}
						>
							days
						</span> */}
						<TextField
							name={item.name}
							value={formValues[item.name]}
							id="outlined-number"
							type="tel"
							InputLabelProps={{
								shrink: true,
							}}
							inputProps={{ style: { padding: "6.5px 10px" } }}
							sx={{
								width: "100%",
								"& .MuiOutlinedInput-root": {
									"& fieldset": {
										borderColor: "#989898", // Change the border color
										borderWidth: "0px", // Change the border width
										borderRadius: "6px",
										border: "none",
									},
									"&:focus": {
										outline: "none",
									},
								},
							}}
							placeholder={`Enter last ${item.days} days sales`}
							onChange={handleChange}
							onKeyDown={handleKeyDown}
						/>
					</Box>
				</Box>
			</Grid>
		);
	});

	return (
		<>
			<Grid
				container
				xs={12}
				md={12}
				lg={12}
				alignItems={"center"}
				rowGap={{ md: "24px", xs: "12px" }}
			>
				<Grid item xs={12} md={8} lg={8}>
					<Box sx={{
						display: "flex", alignItems: "center", flex: "1"
					}}>
						<DescriptionText
							sx={{
								display: "flex",
								fontSize: "16px",
								fontWeight: "700",
								fontFamily: "Plus Jakarta Sans, sans-serif",

								color: "#151515",
							}}
						>
							Product Lead Time*
						</DescriptionText>
						<Tooltip
							title={"Lead time of a supplier refers to the time it takes for a supplier to fulfill an order from the moment it is placed until the products are delivered or made available for pickup. It is an important consideration in supply chain management anc inventory planning for e-commerce businesses. Understanding and effectively managing supplier lead time is crucial to ensure timely order fulfillment, maintain customer satisfaction, and optimize inventory levels."}
							arrow
							placement="top-start"
						>
							<IconButton>
								{" "}
								<HelperTextIcon />
							</IconButton>
						</Tooltip>
					</Box>
				</Grid>
				<Grid item xs={12} md={4} lg={4}>
					{/* <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "flex-end",
              height: "36px",
              flex: "1",
              border:"1px solid #989898",
              borderRadius:"6px 6px 6px 6px",
            }}
          > */}

					<Box
						sx={{
							// width: "400px",
							height: "36px",
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
							<TextField
								id="outlined-number"
								type="tel"
								InputProps={{
									min: 0,
									max: 100,
									pattern: "[0-9]*",
								}}
								inputProps={{
									style: { padding: "6.5px 10px" },
								}}
								sx={{
									flex: "1.5",
									fontSize: "14px",
									fontWeight: "500",
									fontFamily: "Plus Jakarta Sans, sans-serif",
									color: "#15151580",
									borderRadius: "6px",
									background: "#fff",
									display: "flex",
									alignItems: "center",
									padding: "0px",

									"& .MuiOutlinedInput-root ": {
										"& fieldset": {
											borderColor: "#fff", // Change the border color
											borderWidth: "0px", // Change the border width
											borderRadius: "0px 0 0 0px",
											outline: "#fff",
										},
									},
									"& .MuiOutlinedInput-root:focus-within ": {
										"& fieldset": {
											borderColor: "#fff", // Change the border color
											borderWidth: "0px", // Change the border width
											borderRadius: "0px 0 0 0px",
											outline: "#fff",
										},
									},
									"& .MuiOutlinedInput-root:hover ": {
										"& fieldset": {
											borderColor: "#fff", // Change the border color
											borderWidth: "0px", // Change the border width
											borderRadius: "0px 0 0 0px",
											outline: "#fff",
										},
									},
								}}
								onChange={handleChange}
								onKeyDown={handleKeyDown}
								name="leadTime"
								value={formValues.leadTime}
								placeholder="0"
							/>
							<Select
								name="period"
								onChange={handleChange}
								value={formValues.period}
								inputProps={{ "aria-label": "Without label" }}
								sx={{
									flex: "1",
									backgroundColor: "#4F44E033",
									color: "#000",
									fontSize: "14px",
									fontWeight: "500",
									fontFamily: "Plus Jakarta Sans, sans-serif",
									borderColor: "#fff",
									borderRadius: "0px 5px 5px 0px",
									height: "36px",
									"&:focus": {
										outline: "none",
									},
								}}
							>
								<MenuItem value={"days"}>Days</MenuItem>
								<MenuItem value={"week"}>Weeks</MenuItem>
							</Select>
						</Box>
					</Box>
				</Grid>

				{inputsQty}
			</Grid>

			<SectionTitleText
				sx={{
					mb: "24px",
					mt: "50px",
					fontSize: "16px",
					fontWeight: "700",
					fontFamily: "Plus Jakarta Sans, sans-serif",
					textTransform: "uppercase",
					color: "#151515",
				}}
			>
				Demand Profile
			</SectionTitleText>

			<Grid container spacing={3} columnGap={34} >
				{demandProfile}
			</Grid>
		</>
	);
}
