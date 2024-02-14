import { Box } from "@mui/material";
import React from "react";
import FMHeroSection from "./FMHeroSection";
import FMContentSection from "./FMContentSection";
import FMWarehouseTracking from "./FMWarehouseTracking";
import FMWarehouseAdditionalMods from "./FMWarehouseAdditionalMods";

export default function FeaturesMultiLocation() {
  return (
    <Box
      sx={{
        maxWidth: "1440px",
        mx: "auto",
      }}
    >
      <FMHeroSection />
      <FMContentSection />
      <FMWarehouseTracking />
      <FMWarehouseAdditionalMods />
    </Box>
  );
}
