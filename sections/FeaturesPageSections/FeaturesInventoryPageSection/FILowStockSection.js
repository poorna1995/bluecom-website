import React from "react";
import FeaturesSynchronizationComponent from "../FeaturesSynchronizationComponent";
import LowSTockImage from "public/images/Features/TrackInventory/track-inventory-low-stock.png";

export default function FILowStockSection() {
  return (
    <FeaturesSynchronizationComponent
      headerTitle={"Low Stock Alerts"}
      handleImage={LowSTockImage}
      ListData={ListData}
    />
  );
}

const ListData = [
  {
    description:
      "generates alerts when stock levels reach a predefined threshold",
  },
  {
    description:
      "generates alerts when stock levels reach a predefined threshold",
  },
];
