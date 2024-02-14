import React from "react";
import FeaturesProductPublishingComponent from "../FeaturesProductPublishingComponent";
import FeaturesInventory from "public/images/Features/TrackInventory/track-inventory-channel-specific.png";

export default function FIChannelSpecificSection() {
  return (
    <FeaturesProductPublishingComponent
      headerName={"Channel-Specific Inventory Allocation"}
      handleImageLeft={FeaturesInventory}
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
