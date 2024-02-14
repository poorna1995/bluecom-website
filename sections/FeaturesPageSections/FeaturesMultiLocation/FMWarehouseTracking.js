import React from "react";
import FeaturesSynchronizationComponent from "../FeaturesSynchronizationComponent";
import FMWarehouseTrackingImage from "public/images/Features/MultiLocation/fm-warehouse-inventory-tracking.png";

export default function FMWarehouseTracking() {
  return (
    <FeaturesSynchronizationComponent
      headerTitle={"Warehouse Inventory Tracking"}
      handleImage={FMWarehouseTrackingImage}
      ListData={ListData}
    />
  );
}

const ListData = [
  { description: "Track stock quantities accurately" },
  { description: "Track stock quantities accurately" },
  { description: "Track stock quantities accurately" },
];
