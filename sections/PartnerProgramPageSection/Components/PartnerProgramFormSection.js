import { Box, Grid, Typography } from "@mui/material";
import AppLink from "components/Common/AppLink";
import PrimaryButton from "components/Common/Buttons/PrimaryButton";
import BaseCard from "components/Common/Cards/BaseCard";
import Enterprises from "components/Common/Icons/PricingPageIcons/Enterprises";
import { useRouter } from "next/router";
import React from "react";
import FormSection from "sections/ContactUsPageSections/ContactUsFormSection";
import FormForPartnerProgramSection from "./FormForPartnerProgramSection";

export default function PartnerProgramFormSection() {
  const router = useRouter();
  return (
    <>
      <Grid
        container
        // spacing={2}
        sx={{
          // py: "36px",
          // maxWidth: "1440px",
          margin: "auto",
          justifyContent: "center",
        }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          //   order={{ md: 2, xs: 1 }}
          sx={{
            py: { xs: 0, sm: 0, md: 10 },
            background: "#F9FAFF",
          }}
        >
          <Box
            sx={{
              background: "#F9FAFF",
              px: { xs: 0, sm: 0, md: 0 },
              mt: {
                xs: 4,
                md: 0,
              },
              py: {
                md: 10,
              },
              maxWidth: "600px",
              ml: { xs: "16px", sm: "16px", md: "196px" },
              mr: { xs: "16px", sm: "16px", md: "0px" },
              // mx: "auto",
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: ["28px", "62px"],
                fontWeight: "600",
                color: "#000",
                paddingBottom: ["4px", "0px"],
              }}
            >
              Become a Partner
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                fontSize: ["16px", "18px"],
                fontWeight: "500",
                color: "#313131",
                paddingBottom: ["12px", "25px"],
              }}
            >
              Once someone sees what <AppLink href="/">bluecom.ai</AppLink> can
              do for them, it&apos;s a no-brainer. Help us make the
              introduction, and when they close, you&apos;ll get paid. Every
              single time.
            </Typography>
            <PrimaryButton
              onClick={() =>
                window.open(
                  `https://calendly.com/bluecom/30min?back=1&month`,
                  "_blank"
                )
              }
              // href="/contact-us"
              sx={{
                fontSize: ["13px", "16px"],
                fontWeight: "600",
                border: "1px solid #4F44E0",

                height: "52px",
                fontSize: " 16px !important",
                px: "20px !important",
              }}
            >
              Connect With Us
            </PrimaryButton>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          sx={{
            px: { xs: 1.5, md: 1.5 },
            py: { xs: 5, sm: 5, md: 10 },
          }}
          order={{ md: 2, xs: 1 }}
        >
          <Box
            sx={{
              maxWidth: { md: "720px" },
              px: { md: "40px" },
            }}
          >
            <FormForPartnerProgramSection />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
