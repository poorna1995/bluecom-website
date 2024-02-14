import React from "react";
import FeaturesSynchronizationComponent from "../FeaturesSynchronizationComponent";
import VMProductRepositoryImage from "public/images/Features/VendorManagement/vm-product-repo.png";

export default function VMProductRepository() {
  return (
    <FeaturesSynchronizationComponent
      headerTitle={"Vendor Products Repository"}
      handleImage={VMProductRepositoryImage}
      ListData={ListData}
    />
  );
}

const ListData = [
  {
    description:
      "Comprehensive solution to efficiently manage and track all the products supplied by the vendors",
  },
  { description: "Track stock quantities accurately" },
  { description: "Track stock quantities accurately" },
];
