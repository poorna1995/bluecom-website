import React from "react";
import AmazonCalculatorHeaderSection from "./AmazonCalculatorHeaderSection";
import AmazonCalculatorComponent from "./AmazonCalculatorComponent";

export default function AmazonFBAProfitCalculatorPageSections() {
	return (
		<div>
			<AmazonCalculatorHeaderSection
				title={`Amazon FBA Profit Calculator`}
				description={`A simple tool to know how much you need to buy before the Inventory goes OOS `}
			/>
            <AmazonCalculatorComponent/>
		</div>
	);
}
