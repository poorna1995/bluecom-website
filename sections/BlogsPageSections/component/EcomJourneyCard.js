import { Box, Grid } from "@mui/material";
import { GetStartedAndScheduleDemo } from "components/Common/Buttons/GetStartedAndScheduleDemo";
import DescriptionText from "components/Common/Typography/BodyText/DescriptionText";
import React from "react";

export default function EcomJourneyCard() {
  return (
    <Box
      sx={{
        // maxWidth: "100%",
        backgroundColor: "#F9FAFF",
      }}
    >
      <Box
        sx={{
          maxWidth: "1440px",
          // width: "100%",
          mx: "auto",
          py: { md: "80px", xs: "100px" },
          // px: ["0", "120px"],
          // pl: [1.5, "0"],
          // pr: [1.5, "0"],
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            p: {
              xs: "0px",
              sm: "0px",
              md: "16px",
              lg: "0px",
              xl: "0px",
            },
          }}
        >
          <Grid item xs={12} sm={12} md={6}>
            <DescriptionText
              sx={{
                color: "#0E0B3D",
                // fontSize: ["24px", "42px"],
                fontSize: {
                  xs: "24px",
                  sm: "24px",
                  md: "32px",
                  lg: "42px",
                  xl: "42px",
                },
                fontWeight: "800",
                fontFamily: "Manrope, sans-serif",
                textAlign: {
                  xs: "center",
                  sm: "center",
                  md: "left",
                },
              }}
            >
              Start Your Ecommerce Operations Journey with bluecom
            </DescriptionText>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Box
              sx={
                {
                  // p: [0, 1.5],
                  // maxWidth: "100%",
                }
              }
            >
              <DescriptionText
                sx={{
                  pb: "20px",
                  color: "#0E0B3D",
                  // fontSize: ["16px", "24px"],
                  fontSize: {
                    xs: "16px",
                    sm: "16px",
                    md: "18px",
                    lg: "24px",
                    xl: "24px",
                  },
                  fontWeight: "600",
                  fontFamily: "Manrope, sans-serif",
                  textAlign: {
                    xs: "center",
                    sm: "center",
                    md: "left",
                  },
                  px: 1,
                }}
              >
                Our AI approach helps to build the scale we need for your
                business
              </DescriptionText>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: {
                    xs: "center",
                    md: "flex-start",
                  },
                  alignItems: {
                    xs: "center",
                    md: "flex-start",
                  },
                }}
              >
                <GetStartedAndScheduleDemo />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
  return (
    <Box
      sx={{
        // maxWidth: "100%",
        backgroundColor: "#F9FAFF",
        pt: {
          sm: 8,
          md: 0,
        },
      }}
    >
      <Box
        sx={{
          maxWidth: "1440px",
          // width: "100%",
          mx: "auto",
          py: { md: "80px", xs: "100px" },
          // px: ["0", "120px"],
          // pl: [1.5, "0"],
          // pr: [1.5, "0"],
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6}>
            <DescriptionText
              sx={{
                color: "#0E0B3D",
                fontSize: { xs: "24px", md: "42px" },
                fontWeight: "800",
                fontFamily: "Manrope, sans-serif",
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Start Your Ecommerce Operations Journey with bluecom
            </DescriptionText>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Box
              sx={
                {
                  // p: [0, 1.5],
                  // maxWidth: "100%",
                }
              }
            >
              <DescriptionText
                sx={{
                  pb: "20px",
                  color: "#0E0B3D",
                  fontSize: { xs: "16px", md: "24px" },
                  fontWeight: "600",
                  fontFamily: "Manrope, sans-serif",
                  textAlign: { xs: "center", md: "left" },
                  px: "8px",
                }}
              >
                Our AI approach helps to build the scale we need for your
                business
              </DescriptionText>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: {
                    xs: "center",
                    md: "flex-start",
                  },
                  alignItems: {
                    xs: "center",
                    md: "flex-start",
                  },
                }}
              >
                <GetStartedAndScheduleDemo />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
