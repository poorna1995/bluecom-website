import { Box } from "@mui/material";
import { GetStartedAndScheduleDemo } from "components/Common/Buttons/GetStartedAndScheduleDemo";
import DescriptionText from "components/Common/Typography/BodyText/DescriptionText";
import React from "react";

export default function EcomJourneyCard({ mx }) {
  return (
    <Box
      sx={{
        backgroundColor: "#F9FAFF",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        py: "136px",
        borderRadius: "30px",
        mt: "50px",
        // mb: "5.875rem",
        mx: mx ? mx : "0px",
      }}
    >
      <DescriptionText
        sx={{
          pb: "30px",
          color: "#FFB800",
          fontSize: "16px",
          fontWeight: "800",
          fontFamily: "Manrope, sans-serif",
        }}
      >
        SUPERCHARGE YOUR BUSINESS
      </DescriptionText>
      <DescriptionText
        sx={{
          pb: "20px",
          color: "#0E0B3D",
          fontSize: "42px",
          fontWeight: "800",
          fontFamily: "Manrope, sans-serif",
        }}
      >
        Start Your Ecommerce Operations Journey with bluecom
      </DescriptionText>

      <GetStartedAndScheduleDemo />
    </Box>
  );
}
