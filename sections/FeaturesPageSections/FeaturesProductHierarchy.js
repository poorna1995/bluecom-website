import React from "react";
import FeaturesProductPublishingComponent from "./FeaturesProductPublishingComponent";
import ProductHierarchyImage from "public/images/Features/ManageProductsSection/ProductHierarchyImage.png";

export default function FeaturesProductHierarchy() {
  return (
    <FeaturesProductPublishingComponent
      headerName={"Product Hierarchy"}
      handleImageLeft={ProductHierarchyImage}
      productData={productData}
    />
  );
}

const productData = [
  { description: "Create and  Manage Variant-Specific Information" },
  { description: "Create Custom Variant Combinations with Ease" },
  { description: "Flexibility in defining Attributes for Variants" },
  { description: "Assign variant level SKU and inventory" },
  { description: "Manage Distinct Digital Assets for each Variant" },
];
