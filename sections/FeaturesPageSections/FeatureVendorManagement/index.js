import { Box } from "@mui/material";
import React from "react";
import VMHeroSection from "./VMHeroSection";
import VMContentSection from "./VMContentSection";
import VMProductRepository from "./VMProductRepository";
import VMPOTracker from "./VMPOTracker";

export default function FeaturesVendorManagement() {
  return (
    <Box
      sx={{
        maxWidth: "1440px",
        mx: "auto",
      }}
    >
      <VMHeroSection />
      <VMContentSection />
      <VMProductRepository />
      <VMPOTracker />
    </Box>
  );
}
