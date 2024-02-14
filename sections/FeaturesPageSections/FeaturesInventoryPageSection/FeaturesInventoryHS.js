import React from "react";
import FeaturesHeroSection from "../FeaturesHeroSection";
import FeaturesInventoryHeroImage from "public/images/Features/TrackInventory/track-inventory-hero-section.png";

export default function FeaturesInventoryHS() {
  return (
    <FeaturesHeroSection
      headerTitle={"Track inventory"}
      headerName={"across multiple locations"}
      headerImage={FeaturesInventoryHeroImage}
    />
  );
}
