import React from "react";
import PartnerProgramFormSection from "./Components/PartnerProgramFormSection";
import PartnersWithUsBottomSection from "./Components/PartnersWithUsBottomSection";
import PartnerTypesSection from "./PartnerTypesSection";
import PartnerRevenueCalculatorSection from "./PartnerRevenueCalculatorSection";

export default function PartnerProgramPageSection() {
	return (
		<>
			<PartnerProgramFormSection />
			<PartnerTypesSection />
			{/* <PartnerRevenueCalculatorSection /> */}
			<PartnersWithUsBottomSection />
		</>
	);
}
