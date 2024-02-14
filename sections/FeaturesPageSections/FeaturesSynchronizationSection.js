import React from "react";
import FeaturesSynchronizationComponent from "./FeaturesSynchronizationComponent";
import ProductdataSyncImage from "public/images/Features/ManageProductsSection/ProductdataSyncImage.png";

export default function FeaturesSynchronizationSection() {
  return (
    <FeaturesSynchronizationComponent
      headerTitle={"Product Synchronization"}
      handleImage={ProductdataSyncImage}
      ListData={ListData}
    />
  );
}

const ListData = [
  { description: "Real Time Synchronization" },
  { description: "Consistent information across  integrated channels" },
  { description: "Automated updates across integrated platforms" },
];
