import BaseLayout from "layouts";
import React from "react";
import ContactUs from "sections/ContactUsPageSections/ContactUsPageSection";

export default function ContactUsPage() {
  return (
    <BaseLayout pageTitle={`Contact Us`}>
      <ContactUs />
    </BaseLayout>
  );
}
