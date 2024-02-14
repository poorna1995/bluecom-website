import BaseLayout from "layouts";
import { useRouter } from "next/router";
import React from "react";
import FeaturesPageSection from "sections/FeaturesPageSections";
import FeaturesVendorManagement from "sections/FeaturesPageSections/FeatureVendorManagement";
import FeaturesInventoryPageSection from "sections/FeaturesPageSections/FeaturesInventoryPageSection";
import FeaturesMultiLocation from "sections/FeaturesPageSections/FeaturesMultiLocation";

const FeaturesTypes = {
  "manage-product": {
    title: "Product Cataloging",
    component: FeaturesPageSection,
  },
  "track-inventory": {
    title: "Inventory Management",
    component: FeaturesInventoryPageSection,
  },
  "multi-location": {
    title: "Multi-Location Inventory",
    component: FeaturesMultiLocation,
  },
  "vendor-management": {
    title: "Vendor Management",
    component: FeaturesVendorManagement,
  },
};

export default function FeaturePageData() {
  const router = useRouter();
  const { type } = router.query;
  const RenderComponent = (type && FeaturesTypes[type]?.component) ?? "";
  const COMPONENT_TITLE = (type && FeaturesTypes[type]?.title) ?? "";
  if (type)
    return (
      <BaseLayout pageTitle={COMPONENT_TITLE}>
        <RenderComponent />
      </BaseLayout>
    );

  // return (
  //   <BaseLayout pageTitle={`Features`}>
  //     <FeaturesPageSection />
  //   </BaseLayout>
  // );
}
