import React from "react";
import FeaturesProductPublishingComponent from "../FeaturesProductPublishingComponent";
import FMWarehouseAdditional from "public/images/Features/MultiLocation/fm-warehouse-additional.png";

export default function FMWarehouseAdditionalMods() {
  return (
    <FeaturesProductPublishingComponent
      headerName={"Warehouse Addition and Modification"}
      handleImageLeft={FMWarehouseAdditional}
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
