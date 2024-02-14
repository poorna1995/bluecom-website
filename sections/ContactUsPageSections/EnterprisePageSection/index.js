import { Box, Grid, Typography } from "@mui/material";
import BaseCard from "components/Common/Cards/BaseCard";
import React from "react";
import FormSection from "../ContactUsFormSection";
import Enterprises from "components/Common/Icons/PricingPageIcons/Enterprises";
import EcomJourneyCard from "sections/BlogsPageSections/component/EcomJourneyCard";

export default function EnterprisePageSection() {
  return (
    <>
      <Grid
        container
        // spacing={4}
        sx={{
          py: "36px",
          maxWidth: "1440px",
          margin: "auto",
          justifyContent: "center",
        }}
      >
        <Grid item xs={12} sm={6} md={6}>
          <BaseCard>
            <Box sx={{ px: [1, 4, 12] }}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: ["28px", "62px"],
                  fontWeight: "800",
                  color: "#313131",
                  paddingBottom: ["12px", "25px"],
                  lineHeight: "1.3",
                }}
              >
                Unlock the Growth Potential of Your Business with{" "}
                <span
                  style={{
                    color: "#4F44E0",
                  }}
                >
                  bluecom.ai{" "}
                </span>
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "500",
                  color: "#313131",
                  paddingBottom: "25px",
                }}
              >
                Share a few details about yourself, and our dedicated team will
                connect with you to provide in-depth information about our
                product and address any inquiries you may have.
              </Typography>
            </Box>
          </BaseCard>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          sx={{
            p: [1.5, 0],
          }}
        >
          <FormSection
            pagetitle={<Enterprises />}
            desc="Affordable tools small businesses 
                    need to manage their inventory and assets."
            info=" Please provide us with the essential details about your business in the form below"
            button="Send Enquiry"
          />
        </Grid>

        {/* <Box
          sx={{
            maxWidth: "100%",
            pt: "36px",
          }}
        >
          <EcomJourneyCard />
        </Box> */}
      </Grid>
    </>
  );
}
