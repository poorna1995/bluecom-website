import { Grid } from "@mui/material";
import React, { useState } from "react";

import CalculatorInputComponent from "./CalculatorInputComponent";
import CalculatorReport from "./CalculatorReport";
import CalculatorControlButtons from "./CalculatorControlButtons";
import appFetch from "utils/appFetch";

export default function CalculatorComponent() {
	const [formValues, setFormValues] = useState({
		leadTime: "",
		period: "days",
		moq: "",
		onHand: "",
		poQty: "",
		saftyStock: "",
		L10: "",
		L20: "",
		L30: "",
		L60: "",
		L90: "",
		L360: "",
	});

	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormValues((prevValues) => ({
			...prevValues,
			[name]: value,
		}));
	};

	const handleKeyDown = (e) => {
		// Get the key code
		const keyCode = e.keyCode || e.which;

		// Allow only numbers (0-9) and specific keyboard keys
		const validKeyCodes = [
			8, // Backspace
			9, // Tab
			13, // Enter
			27, // Escape
			46, // Delete
			48, // 0
			49, // 1
			50, // 2
			51, // 3
			52, // 4
			53, // 5
			54, // 6
			55, // 7
			56, // 8
			57, // 9
			//numberic keypad
			96, // 0
			97, // 1
			98, // 2
			99, // 3
			100, // 4
			101, // 5
			102, // 6
			103, // 7
			104, // 8
			105, // 9
		];

		if (!validKeyCodes.includes(keyCode)) {
			e.preventDefault();
		}
	};
	const [forcastPerDay, setForcastPerDay] = useState(0);
	const [forcastLeadTime, setForcastLeadTime] = useState(0);
	const [reorder, setReorder] = useState(0);

	const compareValue = (value1, value2) => {
		console.log(value1, value2, "value1 and value2");
		if (value1 > value2) {
			return true;
		} else {
			return false;
		}
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const URL = `https://api.bluecom.ai/api/calculator/calculateReOrderQty`;

		// if (compareValue(formValues.L10, formValues.L30)) {
		//   console.log("test");
		//   alert("L10 should be less than L30");
		//   return;
		// } else if (compareValue(formValues.L30, formValues.L60)) {
		//   alert("L30 should be less than L60");
		//   return;
		// } else if (compareValue(formValues.L60, formValues.L90)) {
		//   alert("L60 should be less than L90");
		//   return;
		// } else if (compareValue(formValues.L90, formValues.L360)) {
		//   alert("L90 should be less than L360");
		//   return;
		// }
		console.log(typeof formValues.period);
		const data = {
			lead_time: Number(formValues.leadTime),
			moq: Number(formValues.moq),
			on_hand_qty: Number(formValues.onHand),
			po_qty: Number(formValues.poQty),
			safety_stock: Number(formValues.saftyStock),
			last_10_days: Number(formValues.L10),
			last_30_days: Number(formValues.L30),
			last_60_days: Number(formValues.L60),
			last_90_days: Number(formValues.L90),
			last_360_days: Number(formValues.L360),
			frequency: formValues.period,
		};
		appFetch(URL, data)
			.then((res) => {
				console.log(res);

				setForcastPerDay(Math.ceil(res.result.forecast_per_day));
				setForcastLeadTime(Math.ceil(res.result.forecast_2_lead_time));
				setReorder(
					Math.ceil(res.result.reorder_quantity) >= 0
						? Math.ceil(res.result.reorder_quantity)
						: 0,
				);
			})
			.catch((err) => console.log(err));
	};

	// let calculatedForcastPerDayValue =
	//   (formValues.L10 / 10) * 0.5 +
	//   (formValues.L20 / 20) * 0.15 +
	//   (formValues.L30 / 30) * 0.1 +
	//   (formValues.L60 / 60) * 0.05 +
	//   (formValues.L90 / 90) * 0.03 +
	//   (formValues.L360 / 360) * 0.02;

	// let leadTime = calculatedForcastPerDayValue * formValues.leadTime * 2;
	// let adjustedInventory =
	//   Number(formValues.onHand) +
	//   Number(formValues.poQty) -
	//   Number(formValues.saftyStock);
	// let reorder = leadTime - adjustedInventory;

	// setForcastPerDay(calculatedForcastPerDayValue.toFixed(3));
	// setForcastLeadTime(leadTime.toFixed(3));
	// setReorder(reorder.toFixed(3));
	// };
	const handleReset = () => {
		let resetFormValues = {};
		Object.keys(formValues).forEach((key) => {
			if (key !== "period") {
				resetFormValues[key] = 0;
			}
		});
		resetFormValues.period = formValues.period;
		setFormValues(resetFormValues);
		setForcastPerDay(0);
		setForcastLeadTime(0);
		setReorder(0);
	};

	return (
		<Grid container spacing={5} padding={{ md: 5, xs: 3 }}>
			<Grid item order={1} xs={12} md={8} lg={8}>
				<CalculatorInputComponent
					formValues={formValues}
					handleChange={handleChange}
					handleKeyDown={handleKeyDown}
				/>
			</Grid>
			<Grid item order={{ xs: 3, md: 2 }} xs={12} md={4} lg={4}>
				<CalculatorReport
					forcastPerDay={forcastPerDay}
					forcastLeadTime={forcastLeadTime}
					reorder={reorder}
				/>
			</Grid>
			<Grid item order={{ md: 3, xs: 2 }} xs={12} md={12} lg={12}>
				<CalculatorControlButtons
					handleCalculate={handleSubmit}
					handleReset={handleReset}
				/>
			</Grid>
		</Grid>
	);
}
