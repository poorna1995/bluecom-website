import {
	Box,
	Button,
	IconButton,
	InputAdornment,
	OutlinedInput,
	TextField,
	Tooltip,
	Typography,
} from "@mui/material";
import PrimaryButton from "components/Common/Buttons/PrimaryButton";
import HelperTextIcon from "components/Common/Icons/CalculatorIcons/HelperTextIcon";
import FormSelectInput from "components/Common/Inputs/SelectInput";
import TextInput from "components/Common/Inputs/TextInput";
import { is } from "date-fns/locale";
import { enqueueSnackbar } from "notistack";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
	resetAmazonFBACalculatorOutputsData,
	setAmazonFBACalculatorInputsData,
	setAmazonFBACalculatorOutputsData,
} from "redux/calculators/calculatorsSlice";
import getCurrencyValue from "utils/currencyConversion/getCurrencyValue";
import AmazonCalculatorTextInputComponent from "./components/AmazonCalculatorTextInputComponent";
import OutlinedButton from "components/Common/Buttons/OutlinedButton";
const pageStyles = {
	inputRowStyles: {
		display: "flex",
		flexDirection: { xs: "column", md: "row", sm: "row" },
		justifyContent: "space-between",
		alignItems: { md: "center", xs: "flex-start", sm: "flex-start" },
		marginBottom: "8px",
		px: {
			md: "16px",
			sm: "16px",
			xs: "8px",
		},
		// paddingRight: "16px",
		// paddingLeft: "16px",
		flex: 1,
	},
	inputLabelStyles: {
		color: " #151515",
		fontSize: "16px",
		fontFamily: "Plus Jakarta Sans",
		fontStyle: "normal",
		fontWeight: 500,
		lineHeight: " normal",
		// width: "320px",
		flex: 0.3,
		mb: {
			xs: 1,
		},
	},
	textInputStyles: {
		borderRadius: "10px",
		background: "white",
		width: { md: "320px", sm: "320px", xs: "100%" },

		flex: 0.3,
		"& .MuiOutlinedInput-root": {
			borderRadius: "10px",
		},
	},
	selectInputStyles: {
		control: (styles) => ({
			...styles,
			// paddingTop: "6px",
			// paddingBottom: "7px",
			borderRadius: "8px",
			width: "100%",
			// ":hover": {
			// 	borderColor: theme.palette.grey[800],
			// },
			// ":focus-within": {
			// 	borderColor: theme.palette.primary.main,
			// },
		}),
		// menu: (provided) => ({
		// 	...provided,
		// 	zIndex: 99999,
		// 	// fontFamily: "Mulish, sans-serif",
		// }),
		// indicatorSeparator: (styles) => ({
		// 	...styles,
		// 	display: "none",
		// }),
	},
};

const initialState = {
	listingPrice: "",
	consumerShippingFee: "",
	unitCost: "",
	shippingCostToAmazon: "",
	otherCost: "",
	ppcCost: "",
	promotionalCost: "",
	others: "",
	damagedGoods: "",
	returnRate: "",
	category: "",
	fbaFees: "",
	unitsSold: "",
};
const outputsInitialState = {
	netProfit: 0,
	profitMargin: 0,
	totalRevenue: 0,
	productSales: 0,
	totalShippingCollected: 0,
	totalCost: 0,
	productCost: 0,
	shippingCostToAmazon: 0,
	otherCost: 0,
	ppcCost: 0,
	promotionalCost: 0,
	otherFee: 0,
	costOfReturns: 0,
	referralFee: 0,
	fbaFee: 0,
};
export default function AmazonCalculatorInputComponent() {
	const [values, setValues] = useState(initialState);
	const [outputs, setOutputs] = useState(outputsInitialState);
	const [results, setResults] = useState(initialState);

	const dispatch = useDispatch();
	const [errorMessage, setErrorMessage] = useState({});
	const handleChange = (e, type, input_key, field) => {
		if (type === "select") {
			if (input_key === "category") {
				setResults({
					...results,
					[field.output_key]: getInputResult(values, field, input_key)
						.referralFee,
					[input_key]: e.value,
				});
			}

			return setValues({ ...values, [input_key]: e.value });
		}
		const { name, value } = e.target;
		if (value < 0) {
			setErrorMessage({
				...errorMessage,
				[name]: "Value can't be negative",
			});
			return enqueueSnackbar("Value can't be negative", {
				variant: "error",
			});
		}
		if (value >= 0) {
			setErrorMessage({
				...errorMessage,
				[name]: "",
			});
		}
		setResults({
			...results,
			[field.output_key]: getInputResult(values, field, input_key),
			[input_key]: Number(e.target.value),
		});

		return setValues({
			...values,
			[e.target.name]: Number(e.target.value),
		});
	};
	console.table(results, "result");
	console.log(getField("category"));
	// console.log({ values, errorMessage, results });
	const handleCalculate = () => {
		dispatch(setAmazonFBACalculatorInputsData(values));
		// {
		// 	getInputResult(values, field, field.input_key);
		// }

		const totalRevenue =
			getTotalRevenue(values.listingPrice, values.consumerShippingFee) *
			values.unitsSold;
		const productSales = results.listingPrice * values.unitsSold;
		const totalShippingCollected =
			results.consumerShippingFee * values.unitsSold;
		const productsCost = results.unitCost * values.unitsSold;
		const shippingCostToAmazon =
			results.shippingCostToAmazon * values.unitsSold;
		const otherCost = results.otherCost * values.unitsSold;
		const ppcCost =
			getInputResult(values, getField("ppcCost"), "ppcCost") *
			values.unitsSold;
		const promotionalCost =
			getInputResult(
				values,
				getField("promotionalCost"),
				"promotionalCost",
			) * values.unitsSold;
		const otherFee =
			getInputResult(values, getField("others"), "others") *
			values.unitsSold;
		const costOfReturns =
			getInputResult(values, getField("returnRate"), "returnRate") *
			values.unitsSold;
		const referralFee =
			getInputResult(values, getField("category"), "category")
				?.referralFee * values.unitsSold;
		const fbaFee = values.fbaFees * values.unitsSold;
		const totalCost =
			productsCost +
			shippingCostToAmazon +
			otherCost +
			ppcCost +
			promotionalCost +
			otherFee +
			costOfReturns +
			referralFee +
			fbaFee;
		const netProfit = totalRevenue - totalCost;
		const profitMargin = (netProfit / totalRevenue) * 100;
		// const costOfReturns = 0;
		const result = {
			netProfit: netProfit,
			profitMargin,
			totalRevenue,
			productSales,
			totalShippingCollected,
			totalCost: totalCost,
			productCost: productsCost,
			shippingCostToAmazon,
			otherCost,
			ppcCost,
			promotionalCost,
			otherFee,
			costOfReturns,
			referralFee,
			fbaFee,
		};

		dispatch(setAmazonFBACalculatorOutputsData(result));
	};
	const handleReset = () => {
		setValues(initialState);
		setResults(initialState);
		setOutputs(outputsInitialState);
		dispatch(resetAmazonFBACalculatorOutputsData());
	};

	return (
		<Box
			sx={{
				paddingRight: { md: "16px", sm: "16px", xs: "8px" },
				paddingLeft: { md: "16px", sm: "16px", xs: "8px" },
			}}
		>
			{INPUT_FIELDS_FOR_CALCULATOR.map((inputField, index) => {
				return (
					<Box key={index}>
						<Typography
							component="h2"
							sx={{
								color: "#151515",
								fontSize: "18px",
								fontFamily: "Plus Jakarta Sans",
								fontStyle: "normal",
								fontWeight: 700,
								lineHeight: "normal",
								textTransform: "uppercase",
								mb: 0,
								pb: 0,
								marginBlockStart: 0,
								marginBlockEnd: 0,
								// paddingTop: "16px",
								// paddingBottom: "16px",
							}}
						>
							{inputField.title}{" "}
							<Tooltip
								title={inputField.tooltipText}
								arrow
								placement="top-start"
							>
								<IconButton>
									{" "}
									<HelperTextIcon />
								</IconButton>
							</Tooltip>
						</Typography>
						{inputField.fields.map((field, i) => {
							if (field.type === "select") {
								return (
									<Box
										key={i}
										sx={{
											...pageStyles.inputRowStyles,
										}}
									>
										<Typography
											sx={{
												...pageStyles.inputLabelStyles,
											}}
										>
											{field.label}
										</Typography>
										<FormSelectInput
											sx={{
												borderRadius: "10px",
											}}
											// type={field.type}
											placeholder={field.placeholder}
											value={
												values[field.input_key] && {
													label: values[
														field.input_key
													],
													value: values[
														field.input_key
													],
												}
											}
											name={field.input_key}
											onChange={(e) => {
												handleChange(
													e,
													field.type,
													field.input_key,
													field,
												);
												setResults((prevState) => ({
													...prevState,
													[field.output_key]:
														getInputResult(
															values,
															field,
															field.input_key,
															field.output_key,
														)?.referralFee,
													charges: getInputResult(
														values,
														field,
														field.input_key,
														field.output_key,
													)?.charges,
												}));
											}}
											onBlur={(e) => {
												console.log(
													"onblur called in results",
												);
											}}
											styles={{
												...pageStyles.selectInputStyles,
											}}
											containerStyles={{
												// maxWidth: "320px",
												marginTop: "0px",
												flex: {
													lg:0.3,
													md: 0.4,
													sm: 0.3,
													xs: 1,
												},
												width: {
													md: "320px",
													xs: "100%",
													sm: "320px",
												},
											}}
											noPadding={true}
											options={field.options}
										/>{" "}
										<span
											style={{
												flex: 0.3,
												// justifySelf: "flex-end",
												width: "100%",
												textAlign: "right",
											}}
										>
											{field.input_key === "category" ? (
												<>
													{Array.isArray(
														getInputResult(
															values,
															field,
															field.input_key,
															field.output_key,
														)?.charges,
													) &&
														getInputResult(
															values,
															field,
															field.input_key,
															field.output_key,
														)?.charges.map(
															(item) => {
																return (
																	<span
																		key={
																			index
																		}
																	>
																		{`$${item.amount}: ${item.charge}%`}
																		<br />
																	</span>
																);
															},
														)}
													{`Referral Fee:${
														getInputResult(
															values,
															field,
															field.input_key,
															field.output_key,
														)?.referralFee
													}`}
												</>
											) : (
												<>
													{getInputResult(
														values,
														field,
														field.input_key,
														field.output_key,
													)}
												</>
											)}
										</span>
									</Box>
								);
							}
							return (
								<Box
									key={i}
									sx={{
										...pageStyles.inputRowStyles,
									}}
								>
									<Typography
										component="label"
										sx={{
											...pageStyles.inputLabelStyles,
										}}
									>
										{field.label}
									</Typography>

									<AmazonCalculatorTextInputComponent
										errorMessage={errorMessage}
										field={field}
										values={values}
										handleChange={handleChange}
										pageStyles={pageStyles}
									/>
									{/* <TextField
										sx={{
											...pageStyles.textInputStyles,
										}}
										size="small"
										type={field.type}
										placeholder={field.placeholder}
										value={Number(
											values[field.input_key],
										).toString()}
										name={field.input_key}
										onChange={(e) =>
											handleChange(
												e,
												field.type,
												field.input_key,
												field,
											)
										}
										helperText={
											errorMessage[field.input_key]
										}
										error={
											errorMessage[field.input_key]
												? true
												: false
										}
										InputProps={{
											startAdornment: (
												<InputAdornment position="start">
													{field.symbol}
												</InputAdornment>
											),
										}}
									/> */}
									<span
										style={{
											flex: 0.3,
											width: "100%",
											textAlign: "right",
										}}
									>
										{/* {(values[field.input_key] &&
											`$ ${values[field.input_key]}`) ??
											`$0`} */}
										{
											// getInputResult(
											// 	values,
											// 	field,
											// 	field.input_key,
											// 	field.output_key,
											// ) &&
											getCurrencyValue(
												getInputResult(
													values,
													field,
													field.input_key,
													field.output_key,
												),
												"USD",
											)
										}
									</span>
								</Box>
							);
						})}
					</Box>
				);
			})}
			<Box
				style={{
					width: "100%",
					display: "flex",
					justifyContent: "flex-end",
					alignItems: "center",
					marginTop: "32px",
				}}
			>
				<PrimaryButton
					sx={{
						height: { md: "58px", xs: "48px" },
						fontSize: { md: "16px", xs: "14px" },
						fontFamily: "Plus Jakarta Sans",
						fontStyle: "normal",
						fontWeight: 700,
						lineHeight: "20px",
						borderRadius: "8px",
					}}
					onClick={handleCalculate}
				>
					Calculate now
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
		</Box>
	);
}
const getField = (input_key) => {
	return INPUT_FIELDS_FOR_CALCULATOR.map((item) =>
		item.fields.find((field) => {
			return field.input_key === input_key;
		}),
	).filter((item) => item)[0];
};
const getTotalCost = (values) => {};
const getSumOfItems = (array = [], key) => {
	const getSum = array.reduce((a, b) => a + (b[key] || 0), 0);
	console.log({ getSum });
	return getSum;
};

const getCharge = (values, field, totalRevenue) => {
	if (field.input_key === "category") {
		const getKey = values[field.input_key];
		const option = field.options.find(
			(item) => item.value === values[field.input_key],
		);
		if (option && option?.isMultiLevel) {
			const getAllItemsCharges =
				option && getSumOfItems(option.charges, "amount");
			console.log({ getAllItemsCharges, getKey });
			const getCharges =
				option && calculateCharges(option.charges, totalRevenue);
			const text = getCharges;
			return text;
		}

		const result = option?.charge ?? 0;

		console.log({ values, field, getKey, result });
		return {
			amount: totalRevenue,
			charge: result,
		};
	}
	return;
};
// written with the help of co-pilot to calculate the charges
const calculateCharges = (charges, inputAmount) => {
	let remainingAmount = inputAmount;
	const result = charges.map((charge, index) => {
		const { level, amount, charge: chargePercentage } = charge;
		if (remainingAmount <= 0) {
			return {
				amount: 0,
				charge: 0,
			};
		}
		if (amount) {
			const amountToCharge = Math.min(remainingAmount, amount);
			const chargeAmount = (amountToCharge * chargePercentage) / 100;
			remainingAmount -= amountToCharge;
			return {
				amount: amountToCharge,
				charge: chargeAmount,
			};
		} else {
			const previousChargesAmount = charges
				.slice(0, index)
				.reduce((total, charge) => total + charge.amount, 0);
			const remainingAmountToCharge =
				remainingAmount - previousChargesAmount;
			const chargeAmount =
				(remainingAmountToCharge * chargePercentage) / 100;
			remainingAmount = previousChargesAmount;
			return {
				amount: inputAmount - remainingAmount,
				charge: chargeAmount,
			};
		}
	});
	const output = result.map((charge, index) => {
		const { amount, charge: chargeAmount } = charge;
		if (amount === 0 && index === 0) {
			return { amount: 0, charge: charges[index].charge };
		} else if (amount === 0) {
			return { amount: 0, charge: charges[index].charge };
		}
		return { amount, charge: charges[index].charge };
	});
	return output;
};
const METHODS = {
	GET_COST_PERCENTAGE: "getPercentage",
	GET_COST_CURRENCY: "getCurrency",
	GET_RETURN_RATE: "getReturnRate",
	GET_FBA_FEES: "getFbaFees",
	GET_REFERRAL_FEES: "getReferralFees",
	GET_TOTAL_REVENUE: "getTotalRevenueWithUnitsSold",
};

const getInputResult = (values, field, input_key, output_key) => {
	const value = values[input_key];
	const totalRevenue = getTotalRevenue(
		values["listingPrice"],
		values["consumerShippingFee"],
	);
	if (field.method === METHODS.GET_COST_CURRENCY) {
		const resultField = values[field.input_key];
		console.log({ resultField });
		// setResults({
		// 	...results,
		// 	[field.output_key]: resultField,
		// });
		return `${resultField}` ?? 0;
	}
	if (field.method === METHODS.GET_COST_PERCENTAGE) {
		const result = getPercentCost(totalRevenue, value);
		// setResults({
		// 	...results,
		// 	[field.output_key]: result,
		// });
		return result ?? 0;
	}
	if (field.method === METHODS.GET_TOTAL_REVENUE) {
		const result = getTotalRevenueWithUnitsSold(totalRevenue, value);
		// setResults({
		// 	...results,
		// 	[field.output_key]: result,
		// });

		return result ?? 0;
	}
	if (field.method === METHODS.GET_REFERRAL_FEES) {
		const { referralFee, charges } = getReferralFees(
			totalRevenue,
			values,
			value,
			field,
		);
		const chargesArray = Array.isArray(charges) ? charges : [charges];
		// setResults({
		// 	...results,
		// 	[field.output_key]: referralFee,
		// 	charges: chargesArray,
		// });

		console.log({ referralFee, charges });
		return { referralFee: referralFee ?? 0, charges: chargesArray };
	}

	if (field.method === METHODS.GET_RETURN_RATE) {
		const result = getReturnRate(
			totalRevenue,
			values,
			value,
			getField("category"),
		);
		// setResults({
		// 	...results,
		// 	[field.output_key]: result,
		// });
		return result ?? 0;
	}
};
const getTotalRevenue = (listingPrice, consumerShippingFee) => {
	const totalRevenue = listingPrice + consumerShippingFee;
	return totalRevenue;
};
const getPercentCost = (totalRevenue, input) => {
	// return the percentage of the total revenue
	const percentage = (input * totalRevenue) / 100;
	return percentage;
};
const getReturnRate = (totalRevenue, values, input, field) => {
	const referralFees = getReferralFees(
		totalRevenue,
		values,
		input,
		field,
	).referralFee;
	let fbaFees = values.fbaFees;
	let unitCost = values.unitCost;
	const isDamaged = values.damagedGoods.toLowerCase() === "damaged";

	// let totalFees = 0;

	// if (isDamaged) {
	let totalFeesWithUnitCost = unitCost + fbaFees + (referralFees * 20) / 100;
	// }

	let totalFeesWithoutUnitCost = fbaFees + (referralFees * 20) / 100;
	let totalFees = isDamaged
		? totalFeesWithUnitCost
		: totalFeesWithoutUnitCost;
	//   const totalReturn = totalFees * (returnRate / 100);
	//   return totalReturn;
	// const totalFees = fbaFees + referralFees * (20 / 100);
	const totalReturn = totalFees * (input / 100);
	// Math.ceil(totalReturn)
	console.log({ totalReturn, totalFees, values });
	return totalReturn;
};
const getFbaFees = (totalRevenue, input) => {};

const getListOfCharges = (values, field, referralCost) => {
	const getReferralCostPercentage = getCharge(
		values,
		field,
		Number(referralCost),
	);
	return getReferralCostPercentage;
};

const getReferralFees = (totalRevenue, values, input, field) => {
	const getPromotionCost = getPercentCost(
		totalRevenue,
		values?.promotionalCost,
	);
	const getReferralCost = Number(totalRevenue) - Number(getPromotionCost);
	const getReferralCostPercentage = getCharge(
		values,
		field,
		Number(getReferralCost),
	);
	// get sum of all items in array

	const referralFee = getReferralFeesFromInputs(getReferralCostPercentage);

	return { referralFee, charges: getReferralCostPercentage };
};
const getReferralFeesFromInputs = (input) => {
	const getSumOfItems = (array) => {
		const sum = array.reduce((a, b) => a + b, 0);
		return sum;
	};

	const result = Array.isArray(input)
		? getSumOfItems(
				input.map((item) => {
					return getPercentCost(item.amount, item.charge);
				}),
		  )
		: getPercentCost(input.amount, input.charge);
	return result;
};
const getTotalRevenueWithUnitsSold = (totalRevenue, unitsSold) => {
	const amount = totalRevenue * unitsSold;
	return amount;
};
const categories = [
	{
		label: "Amazon Device Accessories",
		charge: 45,
	},
	{
		label: "Books (including Collectible Books)",
		charge: 15,
	},
	{
		label: "Camera and Photo",
		charge: 8,
	},
	{
		label: "Cell Phone Devices ",
		charge: 8,
	},
	{
		label: "Consumer Electronics",
		charge: 8,
	},
	{
		label: "Home & Garden",
		charge: 15,
	},
	{
		label: "Music",
		charge: 15,
	},
	{
		label: "Musical Instruments",
		charge: 15,
	},
	{
		label: "Office Products",
		charge: 15,
	},
	{
		label: "Outdoors",
		charge: 15,
	},
	{
		label: "Kitchen",
		charge: 15,
	},

	{
		label: "Personal Computers",
		charge: 8,
	},
	{
		label: "Software & Computers/Video Games",
		charge: 15,
	},
	{
		label: "Sports (excluding Sports Collectibles)",
		charge: 15,
	},
	{
		label: "Toys & Games",
		charge: 15,
	},
	{
		label: "Video & DVD",
		charge: 15,
	},
	{
		label: "Video Game Consoles ",
		charge: 8,
	},
	{
		label: "Everything Else",
		charge: 15,
	},
	{
		label: "3D Printed Products",
		charge: 12,
	},
	{
		label: "Clothing & Accessories (including activewear)",
		charge: 17,
	},
	{
		label: "Collectible Books",
		charge: 15,
	},
	{
		label: "Gift Cards",
		charge: 20,
	},
	{
		label: "Industrial & Scientific (including Food Service and Janitorial & Sanitation)",
		charge: 12,
	},
	{
		label: "Luggage & Travel Accessories",
		charge: 15,
	},
	{
		label: "Shoes Handbags & Sunglasses",
		charge: 15,
	},
	{
		label: "Watches",
		charge: 16,
		isMultiLevel: true,
		// first 1500 is 16% and then 3% for the rest
		charges: [
			{
				level: 1,
				amount: 1500,
				charge: 16,
			},
			{
				level: 2,

				charge: 3,
			},
		],
	},
	{
		label: "Jewelry",
		charge: 15,
		isMultiLevel: true,
		// first 250 is 20% and then 5% for the rest
		charges: [
			{
				level: 1,
				amount: 250,
				charge: 20,
			},
			{
				level: 2,
				charge: 5,
			},
		],
	},
	{
		label: "Grocery & Gourmet Food",
		charge: 8,
	},
	{
		label: "Health & Personal Care (including Personal Care Appliances)",
		charge: 8,
	},
	{
		label: "Beauty",
		charge: 8,
	},

	{
		label: "Electronics Accessories",
		charge: 8,
		isMultiLevel: true,
		// first 100 is 15% and then 8% for the rest
		charges: [
			{
				level: 1,
				amount: 100,
				charge: 15,
			},
			{
				level: 2,
				charge: 8,
			},
		],
	},
	{
		label: "Furniture (including outdoor furniture)",
		charge: 15,
		isMultiLevel: true,
		// multilevel goes like this => first 200 is 15% and then 10% for the rest
		charges: [
			{
				level: 1,
				amount: 200,
				charge: 15,
			},
			{
				level: 2,
				charge: 10,
			},
		],
	},
	{
		label: "Baby Products (excluding Baby Apparel)",
		charge: 8,
	},
	{
		label: "Tools & Home Improvement",
		charge: 15,
	},
	{
		label: "Base Equipment Power Tools",
		charge: 12,
	},
	{
		label: "Automotive & Powersports",
		charge: 12,
	},
	{
		label: "Tires & Wheels Products",
		charge: 10,
	},
	{
		label: "Mattresses",
		charge: 15,
	},
	{
		label: "Amazon Explore",
		charge: 30,
	},
	{
		label: "Pet Supplies",
		charge: 15,
	},
	{
		label: "Pet Supplies (Veterinary Diets)",
		charge: 22,
	},
	{
		label: "Full-Size Appliances",
		charge: 8,
	},
	{
		label: "Compact Appliances (including Microwaves and Compact Refrigerators)",
		charge: 15,
		isMultiLevel: true,
		//multilevel goes like this => first 300 is 15, then above 300 it is 8
		charges: [
			{
				level: 1,
				amount: 300,
				charge: 15,
			},
			{
				level: 2,
				charge: 8,
			},
		],
	},
	{
		label: "Collectible Coins",
		charge: 15,
		isMultiLevel: true,
		//multi level goes like this => first 250 is 15, then 750 is 10 and then above 1000 is 6
		charges: [
			{
				level: 1,
				amount: 250,
				charge: 15,
			},
			{
				level: 2,
				amount: 750,
				charge: 10,
			},
			{
				level: 3,
				charge: 6,
			},
		],
	},
	{
		label: "Entertainment Collectibles",
		charge: 15,
		isMultiLevel: true,
		// multilevel goes like this=> first 100 is 25, then 900 is 10 and then above 1000 is 6
		charges: [
			{
				level: 1, //100
				amount: 100,
				charge: 25,
			},
			{
				level: 2, //900
				amount: 900,
				charge: 10,
			},
			{
				level: 3, //above 1000
				charge: 6,
			},
		],
	},
	{
		label: "Fine Art",
		charge: 15,
		isMultiLevel: true,
		// multilevel goes like this=> first 100 is 20, then 900 is 15, then 4000 is 10 and then above 5000 is 5
		charges: [
			{
				level: 1, //100
				amount: 100,
				charge: 20,
			},
			{
				level: 2, //900
				amount: 900,
				charge: 15,
			},
			{
				level: 3, //4000
				amount: 4000,
				charge: 10,
			},
			{
				level: 4, //above 5000
				charge: 5,
			},
		],
	},
	{
		label: "Sports Collectibles",
		charge: 15,
		isMultiLevel: true,
		// multilevel goes like this=> first 100 is 15, then 900 is 10, then above 1000 is 6
		charges: [
			{
				level: 1, //100
				amount: 100,
				charge: 15,
			},
			{
				level: 2, //900
				amount: 900,
				charge: 10,
			},
			{
				level: 3, //above 1000

				charge: 6,
			},
		],
	},
];

const categoriesWithLabel = categories.map((category) => ({
	...category,
	label: category.label,
	value: category.label,
}));
const INPUT_FIELDS_FOR_CALCULATOR = [
	{
		title: "Revenue",
		tooltipText: `Revenue includes two parts: Item Price and Shipping.

		Item Price: the current price of the product.
		
		Shipping: the shipping fee given by the buyer, which may vary form different regions.`,
		fields: [
			{
				label: "Listing Price",
				type: "number",
				placeholder: "Enter Listing Price",
				input_key: "listingPrice",
				symbol: "$",
				method: METHODS.GET_COST_CURRENCY,
				output_key: "listingPrice",
			},
			{
				label: "Consumer Shipping Fee",
				type: "number",
				placeholder: "Enter Consumer Shipping Fee",
				input_key: "consumerShippingFee",
				symbol: "$",
				method: METHODS.GET_COST_CURRENCY,
				output_key: "consumerShippingFee",
			},
		],
	},
	{
		title: "Cost Of Goods",
		tooltipText: `Cost of Goods includes purchasing cost, ship to Amazon fee and other costs.

		Purchasing cost can be estimated for similar products in 1688.com`,
		fields: [
			{
				label: "Unit Cost",
				type: "number",
				placeholder: "Enter Unit Cost",
				input_key: "unitCost",
				symbol: "$",
				method: METHODS.GET_COST_CURRENCY,
				output_key: "unitCost",
			},
			{
				label: "Shipping Cost to Amazon",
				type: "number",
				placeholder: "Enter Shipping Cost to Amazon",
				input_key: "shippingCostToAmazon",
				symbol: "$",
				method: METHODS.GET_COST_CURRENCY,
				output_key: "shippingCostToAmazon",
			},
			{
				label: "Other Cost",
				type: "number",
				placeholder: "Enter Other Cost",
				input_key: "otherCost",
				symbol: "$",
				method: METHODS.GET_COST_CURRENCY,
				output_key: "otherCost",
			},
		],
	},
	{
		title: "Marketing Cost",
		tooltipText: `Marketing Cost includes PPC cost and promotion costs on Amazon, and others.

		PPC cost on Amazon can be set to 50% for upfront spending.
		
		Promotion costs, such as Deals(LD/BD/DOTD, and others), coupon, promotion(Percentage Off, Buy One Get One) and others.
		
		Other marketing costs, such as Google advertising, Facebook advertising, and other promotional costs.`,
		fields: [
			{
				label: "PPC Cost",
				type: "number",
				placeholder: "Enter PPC Cost",
				input_key: "ppcCost",
				symbol: "%",
				method: METHODS.GET_COST_PERCENTAGE,
				output_key: "ppcCost",
			},
			{
				label: "Promotional Cost",
				type: "number",
				placeholder: "Enter Promotional Cost",
				input_key: "promotionalCost",
				symbol: "%",
				method: METHODS.GET_COST_PERCENTAGE,
				output_key: "promotionalCost",
			},
			{
				label: "Others",
				type: "number",
				placeholder: "Enter Others",
				input_key: "others",
				symbol: "%",
				method: METHODS.GET_COST_PERCENTAGE,
				output_key: "others",
			},
		],
	},
	{
		title: "After-Sales Cost",
		tooltipText: `After-sales cost mainly includes refund rate (preferably less than 10%).

		After-Sales Cost (with damaged product) = (FBA Fulfillment Fees + Referral Fees * 20%) * Return Rate
		
		After-Sales Cost (without damaged product) = (Product Cost + FBA Fulfillment Fees + Referral Fees * 20%) * Return Rate`,
		fields: [
			{
				label: "Are the Goods Damaged?",
				type: "select",
				placeholder: "Ex: Damaged?",
				input_key: "damagedGoods",
				options: [
					{
						label: "Damaged",
						value: "Damaged",
					},
					{
						label: "Undamaged",
						value: "Undamaged",
					},
				],
				output_key: "damagedGoods",
			},
			{
				label: "Return Rate",
				type: "number",
				placeholder: "Enter Return Rate",
				input_key: "returnRate",
				symbol: "%",
				method: METHODS.GET_RETURN_RATE,
				output_key: "returnRate",
			},
		],
	},
	{
		title: "Amazon Fees",
		tooltipText: `Amazon Fees includes Referral Fees and FBA Fees

		Referral Fees: system fills automatically according to different categories
		
		FBA Fees: system calculates and fills automatically based on volume and weight
		
		Tip: The above values can also be modified by yourself.`,
		fields: [
			{
				label: "Category",
				type: "select",
				placeholder: "Select Category",
				input_key: "category",
				options: categoriesWithLabel,
				method: METHODS.GET_REFERRAL_FEES,
				output_key: "referralFee",
			},
			{
				label: "FBA Fees",
				type: "number",
				placeholder: "Enter FBA Fees",
				input_key: "fbaFees",
				symbol: "$",
				method: METHODS.GET_COST_CURRENCY,
				output_key: "fbaFees",
			},
		],
	},
	{
		title: "Units Sold",
		tooltipText: `Monthly sales of products, which can be estimated based on competitors' products.`,
		fields: [
			{
				label: "Units Sold",
				type: "number",
				placeholder: "Enter Units Sold",
				input_key: "unitsSold",
				symbol: "pcs",
				method: METHODS.GET_TOTAL_REVENUE,
				output_key: "unitsSold",
			},
		],
	},
];
