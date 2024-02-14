import React from "react";
import FeaturesProductPublishingComponent from "../FeaturesProductPublishingComponent";
import VMPOTrackerImage from "public/images/Features/VendorManagement/vm-po-tracker-image.png"

export default function VMPOTracker() {
  return (
    <FeaturesProductPublishingComponent
      headerName={"Vendor PO Tracker"}
      handleImageLeft={VMPOTrackerImage}
      productData={productData}
    />
  );
}

const productData = [
  {
    description:
      "flexibility in allotting inventory quantities to different channels based on demand and priorities.",
  },
  {
    description:
      "flexibility in allotting inventory quantities to different channels based on demand and priorities.",
  },
];
