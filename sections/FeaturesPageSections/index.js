import { Box, Typography } from "@mui/material";
import React from "react";
import FeaturesHeroSection from "./FeaturesHeroSection";
import FeaturesSynchronization from "./FeaturesSynchronizationComponent";
import ContentSection from "./ContentSection";
import ProductCataloging from "./ProductCataloging";
import FeaturesProductHierarchy from "./FeaturesProductHierarchy";
import FeaturesProductPublishing from "./FeaturesProductPublishing";
import FeaturesSynchronizationSection from "./FeaturesSynchronizationSection";

export default function FeaturesPageSection() {
  return (
    <Box
      sx={{
        maxWidth: "1440px",
        mx: "auto",
      }}
    >
      <FeaturesHeroSection />
      <ContentSection />
      <FeaturesSynchronizationSection />
      <FeaturesProductPublishing />
      <ProductCataloging />
      <FeaturesProductHierarchy />
    </Box>
  );
}
