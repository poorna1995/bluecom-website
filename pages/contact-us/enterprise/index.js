import BaseLayout from "layouts";
import React from "react";
import EnterprisePageSection from "sections/ContactUsPageSections/EnterprisePageSection";

export default function EnterpriseEnquiryPage() {
	return (
		<BaseLayout pageTitle={`Enterprise enquiry`}>
			<EnterprisePageSection />
		</BaseLayout>
	);
}
