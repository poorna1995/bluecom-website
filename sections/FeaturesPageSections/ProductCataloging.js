import React from "react";
import FeaturesSynchronizationComponent from "./FeaturesSynchronizationComponent";
import ProductCatalogingImage from "public/images/Features/ManageProductsSection/ProductCatalogingImage.png";

export default function ProductCataloging() {
  return (
    <FeaturesSynchronizationComponent
      headerTitle={"Product Cataloging"}
      handleImage={ProductCatalogingImage}
      ListData={ListData}
    />
  );
}

const ListData = [
  { description: "Centralized Product Catalog" },
  { description: "Product Inventory in One Place" },
  { description: "View Multiple Sales Channels" },
  { description: "Simplified Variant/Item Display" },
];
