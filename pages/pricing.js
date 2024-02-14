import BaseLayout from "layouts";
import React from "react";
import PricingPageSections from "sections/PricingPageSections";
import AnalyticsAndReportingPage from "sections/PricingPageSections/components/AnalyticsAndReportingPage";
import ContactUs from "sections/ContactUsPageSections/ContactUsPageSection";

export default function PricingPage() {
  return (
    <BaseLayout>
      <PricingPageSections />
      {/* <AnalyticsAndReportingPage /> */}
    </BaseLayout>
  );
}
