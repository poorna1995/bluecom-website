import React from "react";
import FeaturesSynchronizationComponent from "../FeaturesSynchronizationComponent";
import TrackInventoryImage from "public/images/Features/TrackInventory/track-inventory-level-management.png";

export default function FIManagementSection() {
  return (
    <FeaturesSynchronizationComponent
      headerTitle={"Item-Level Inventory Management"}
      handleImage={TrackInventoryImage}
      ListData={ListData}
    />
  );
}

const ListData = [
  { description: "Track stock quantities accurately" },
  { description: "Track stock quantities accurately" },
  { description: "Track stock quantities accurately" },
];
