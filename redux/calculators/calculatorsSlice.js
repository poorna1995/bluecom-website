import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	amazonFBAInputs: {},
	amazonFBAOutputs: {
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
	},
};

const calculatorsSlice = createSlice({
	name: "calculatorsData",
	initialState,
	reducers: {
		setAmazonFBACalculatorInputsData(state, action) {
			state.amazonFBAInputs = action.payload;
		},
		setAmazonFBACalculatorOutputsData(state, action) {
			state.amazonFBAOutputs = action.payload;
		},
		resetAmazonFBACalculatorOutputsData(state) {
			state.amazonFBAOutputs = initialState.amazonFBAOutputs;
		},
	},
});

export const {
	setAmazonFBACalculatorInputsData,
	setAmazonFBACalculatorOutputsData,
	resetAmazonFBACalculatorOutputsData,
} = calculatorsSlice.actions;

export default calculatorsSlice.reducer;
