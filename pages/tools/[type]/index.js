import BaseLayout from "layouts";
import { useRouter } from "next/router";
import React from "react";
import CalculatorPageSection from "sections/CalculatorPageSection";
import AmazonFBAProfitCalculatorPageSections from "sections/CalculatorPageSection/AmazonFBAProfitCalculatorPageSections";

const calculatorTypes = {
	"amazon-fba": {
		title: "Amazon FBA Profit Calculator",
		component: AmazonFBAProfitCalculatorPageSections,
	},
	"reorder-quantity": {
		title: "Reorder Quantity Calculator",
		component: CalculatorPageSection,
	},
};

export default function CalculatorPage() {
	const router = useRouter();
	const { type } = router.query;
	const RenderComponent = (type && calculatorTypes[type]?.component) ?? "";
	const COMPONENT_TITLE = (type && calculatorTypes[type]?.title) ?? "";
	if (type)
		return (
			<BaseLayout pageTitle={COMPONENT_TITLE}>
				<RenderComponent />
			</BaseLayout>
		);
}
