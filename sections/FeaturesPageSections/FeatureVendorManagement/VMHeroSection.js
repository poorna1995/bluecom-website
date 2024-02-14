import React from "react";
import FeaturesHeroSection from "../FeaturesHeroSection";
import VMHeroImage from "public/images/Features/VendorManagement/vm-hero-image.png";

export default function VMHeroSection() {
  return (
    <FeaturesHeroSection
      headerTitle={"Vendor Management Module"}
      headerImage={VMHeroImage}
    />
  );
}
