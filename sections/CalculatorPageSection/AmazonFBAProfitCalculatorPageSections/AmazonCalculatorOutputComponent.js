import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import getCurrencyValue from "../../../utils/currencyConversion/getCurrencyValue";
import getFormattedNumber from "utils/numberFormat/getFormattedNumber";
const mapState = ({ calculatorsData }) => ({
	amazonFBAInputs: calculatorsData.amazonFBAInputs,
	amazonFBAOutputs: calculatorsData.amazonFBAOutputs,
});

// const initialState = {
// 	netProfit: 0,
// 	profitMargin: 0,
// 	totalRevenue: 0,
// 	productSales: 0,
// 	totalShippingCollected: 0,
// 	totalCost: 0,
// 	productCost: 0,
// 	shippingCostToAmazon: 0,
// 	otherCost: 0,
// 	ppcCost: 0,
// 	promotionalCost: 0,
// 	otherFee: 0,
// 	costOfReturns: 0,
// 	referralFee: 0,
// 	fbaFee: 0,
// };

export default function AmazonCalculatorOutputComponent() {
	const { amazonFBAInputs, amazonFBAOutputs } = useSelector(mapState);
	const result = amazonFBAOutputs;
	return (
		<Box
			sx={{
				backgroundColor: "#fff",
				p: 4,
				border: "1px solid rgba(18, 18, 18, 0.10)",
				borderRadius: "20px",
			}}
		>
			<Typography
				sx={{
					color: "#121212",
					fontSize: "32px",
					fontFamily: "Plus Jakarta Sans",
					fontStyle: "normal",
					fontWeight: 700,
					lineHeight: "normal",
				}}
			>
				Result{" "}
			</Typography>
			{ALL_RESULT_FIELDS.map((field, index) => {
				if (field.component === "stat") {
					return (
						<Box
							key={index}
							sx={{
								display: "flex",
								mt: 1,
								pb: field.hasDivider && 1,
								borderBottom:
									field.hasDivider &&
									"1px solid rgba(18, 18, 18, 0.10)",
						
							}}
						>
							<span
								style={{
									borderRadius: "50px",
									padding: "10px",
									background: "#F9FAFF",
									boxShadow:
										"0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									width: "44px",
									height: "44px",
								}}
							>
								{field.icon}
							</span>
							<Box
								sx={{
									ml: 2,
								}}
							>
								<span
									style={{
										color: "#121212",
										fontFamily: "Plus Jakarta Sans",
										fontSize: "16px",
										fontStyle: "normal",
										fontWeight: 600,
										lineHeight: "normal",
									}}
								>
									{field.label}
								</span>
								<br />
								<span
									style={{
										color:
											Number(result[field.key]) >= 0
												? "#039855"
												: "#F14F4A",
										fontFamily: "Plus Jakarta Sans",
										fontSize: " 32px",
										fontStyle: "normal",
										fontWeight: 700,
										lineHeight: "normal",
									}}
								>
									{field.showAs === "currency" &&
										getCurrencyValue(
											Number(result[field.key]),
											"USD",
										)}
									{field.showAs === "percentage" &&
										`${getFormattedNumber(
											Number(result[field.key]),
										)}%`}
								</span>
							</Box>
						</Box>
					);
				}
				return (
					<Box
						key={index}
						sx={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
							my: 2,
							pb: field.hasDivider && 1,
							borderBottom:
								field.hasDivider &&
								"1px solid rgba(18, 18, 18, 0.10)",
						}}
					>
						<Typography
							sx={{
								color: "#121212",
								fontSize: "16px",
								fontFamily: " Plus Jakarta Sans",
								fontStyle: "normal",
								fontWeight: 600,
								lineHeight: "normal",
							}}
						>
							{field.label}
						</Typography>
						<Typography
							sx={{
								color: "#121212",
								fontSize: "20px",
								fontFamily: " Plus Jakarta Sans",
								fontStyle: "normal",
								fontWeight: 700,
								lineHeight: "normal",
							}}
						>
							{field.showAs === "currency" &&
								getCurrencyValue(result[field.key], "USD")}
							{field.showAs === "percentage" &&
								`${getFormattedNumber(result[field.key])}%`}
						</Typography>
					</Box>
				);
			})}
		</Box>
	);
}

const ALL_RESULT_FIELDS = [
	{
		label: "Net Profit",
		key: "netProfit",
		showAs: "currency",
		component: "stat",
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
			>
				<path
					d="M22 12V17C22 20 20 22 17 22H7C4 22 2 20 2 17V12C2 9.28 3.64 7.38 6.19 7.06C6.45 7.02 6.72 7 7 7H17C17.26 7 17.51 7.00999 17.75 7.04999C20.33 7.34999 22 9.26 22 12Z"
					stroke="#4F44E0"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M17.7514 7.05C17.5114 7.01 17.2614 7.00001 17.0014 7.00001H7.00141C6.72141 7.00001 6.45141 7.02001 6.19141 7.06001C6.33141 6.78001 6.53141 6.52001 6.77141 6.28001L10.0214 3.02C11.3914 1.66 13.6114 1.66 14.9814 3.02L16.7314 4.79002C17.3714 5.42002 17.7114 6.22 17.7514 7.05Z"
					stroke="#4F44E0"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M22 12.5H19C17.9 12.5 17 13.4 17 14.5C17 15.6 17.9 16.5 19 16.5H22"
					stroke="#4F44E0"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		),
	},
	{
		label: "Profit Margin",
		key: "profitMargin",
		showAs: "percentage",
		component: "stat",
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
			>
				<path
					d="M3.9889 14.6604L2.46891 13.1404C1.84891 12.5204 1.84891 11.5004 2.46891 10.8804L3.9889 9.36039C4.2489 9.10039 4.4589 8.59038 4.4589 8.23038V6.08036C4.4589 5.20036 5.1789 4.48038 6.0589 4.48038H8.2089C8.5689 4.48038 9.0789 4.27041 9.3389 4.01041L10.8589 2.49039C11.4789 1.87039 12.4989 1.87039 13.1189 2.49039L14.6389 4.01041C14.8989 4.27041 15.4089 4.48038 15.7689 4.48038H17.9189C18.7989 4.48038 19.5189 5.20036 19.5189 6.08036V8.23038C19.5189 8.59038 19.7289 9.10039 19.9889 9.36039L21.5089 10.8804C22.1289 11.5004 22.1289 12.5204 21.5089 13.1404L19.9889 14.6604C19.7289 14.9204 19.5189 15.4304 19.5189 15.7904V17.9403C19.5189 18.8203 18.7989 19.5404 17.9189 19.5404H15.7689C15.4089 19.5404 14.8989 19.7504 14.6389 20.0104L13.1189 21.5304C12.4989 22.1504 11.4789 22.1504 10.8589 21.5304L9.3389 20.0104C9.0789 19.7504 8.5689 19.5404 8.2089 19.5404H6.0589C5.1789 19.5404 4.4589 18.8203 4.4589 17.9403V15.7904C4.4589 15.4204 4.2489 14.9104 3.9889 14.6604Z"
					stroke="#4F44E0"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M9 15L15 9"
					stroke="#4F44E0"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M14.4945 14.5H14.5035"
					stroke="#4F44E0"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M9.49451 9.5H9.50349"
					stroke="#4F44E0"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		),
		hasDivider: true,
	},
	{
		label: "Total Revenue",
		key: "totalRevenue",
		showAs: "currency",
	},
	{
		label: "Product Sales",
		key: "productSales",
		showAs: "currency",
	},
	{
		label: "Total Shipping Collected",
		key: "totalShippingCollected",
		showAs: "currency",
		hasDivider: true,
	},
	{
		label: "Total Cost",
		key: "totalCost",
		showAs: "currency",
	},
	{
		label: "Product Cost",
		key: "productCost",
		showAs: "currency",
	},
	{
		label: "Shipping Cost to Amazon",
		key: "shippingCostToAmazon",
		showAs: "currency",
	},
	{
		label: "Other Costs",
		key: "otherCost",
		showAs: "currency",
	},
	{
		label: "PPC Cost",
		key: "ppcCost",
		showAs: "currency",
	},
	{
		label: "Promotional Cost",
		key: "promotionalCost",
		showAs: "currency",
	},
	{
		label: "Others",
		key: "otherFee",
		showAs: "currency",
	},
	{
		label: "Cost Of Returns",
		key: "costOfReturns",
		showAs: "currency",
	},
	{
		label: "Referral Fees",
		key: "referralFee",
		showAs: "currency",
	},
	{
		label: "FBA Fees",
		key: "fbaFee",
		showAs: "currency",
	},
];
