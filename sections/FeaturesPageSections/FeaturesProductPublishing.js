import React from "react";
import FeaturesProductPublishingComponent from "./FeaturesProductPublishingComponent";
import ProductPublishingImage from "public/images/Features/ManageProductsSection/ProductPublishingImage.png";

export default function FeaturesProductPublishing() {
  return (
    <FeaturesProductPublishingComponent
      headerName={"Product Publishing"}
      handleImageLeft={ProductPublishingImage}
      productData={productData}
    />
  );
}

const productData = [
  { description: "Create a single product listings" },
  { description: "Choose between single or bulk listing options." },
  { description: "Review and revise any modifications." },
  { description: "Publish products seamlessly across channels." },
];
