import { Box } from "@mui/material";
import React from "react";
import FeaturesInventoryHS from "./FeaturesInventoryHS";
import FeaturesInventoryContentSection from "./FeaturesInventoryContentSection";
import FIManagementSection from "./FIManagementSection";
import FIChannelSpecificSection from "./FIChannelSpecificSection";
import FILowStockSection from "./FILowStockSection";

export default function FeaturesInventoryPageSection() {
  return (
    <Box
      sx={{
        maxWidth: "1440px",
        mx: "auto",
      }}
    >
      <FeaturesInventoryHS />
      <FeaturesInventoryContentSection />
      <FIManagementSection />
      <FIChannelSpecificSection />
      <FILowStockSection />
      
    </Box>
  );
}
