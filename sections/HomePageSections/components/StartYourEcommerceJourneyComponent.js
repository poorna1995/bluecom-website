import { Box, Grid } from "@mui/material";
import { GetStartedAndScheduleDemo } from "components/Common/Buttons/GetStartedAndScheduleDemo";
import DescriptionText from "components/Common/Typography/BodyText/DescriptionText";
import SectionTitleText from "components/Common/Typography/HeadingText/SectionTitleText";
import React from "react";

export default function StartYourEcommerceJourneyComponent() {
  return (
    <Grid
      container
      sx={{
        backgroundColor: "#F9FAFF",
        // p: "72px 130px 60px 108px",
        p: { xs: "16px", md: "0px" },
      }}
    >
      <Grid item xs={12} sm={12} md={6}>
        <Box>
          <SectionTitleText
            sx={{
              fontSize: "42px",
              fontWeight: "800",
              color: "#0D0E21",
              lineHeight: "53px",
            }}
          >
            Start your ecommerce <br />
            Journey
          </SectionTitleText>
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={8}>
        <DescriptionText
          sx={{ fontSize: "24px", fontWeight: "600", color: "#313131" }}
        >
          Our AI approach helps to build the scale we need <br /> for your
          business
        </DescriptionText>

        <GetStartedAndScheduleDemo />
      </Grid>
    </Grid>
  );
}
