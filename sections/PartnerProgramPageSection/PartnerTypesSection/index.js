import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import PartnerCard from "./PartnerCard";
import AppLink from "components/Common/AppLink";

export default function PartnerTypesSection() {
  return (
    <Box
      sx={{
        background: "#131313",
        py: 16,
        px: "16px",
      }}
    >
      <Box sx={{ maxWidth: "1440px", margin: "auto" }}>
        <Typography
          sx={{
            color: "#FFF",
            // fontFamily: " General Sans",
            fontSize: ["28px", "52px"],
            fontWeight: 600,
            // lineHeight: "64px",
            // lineHeight: "20px",
          }}
        >
          Hop on Board
        </Typography>
        <Typography
          sx={{
            color: "#FFF",
            // fontFamily: " General Sans",
            fontSize: { xs: "16px", sm: "16px", md: "18px" },
            fontWeight: 400,
            // lineHeight: "29px",
          }}
        >
          Join forces with <AppLink href="/">bluecom.ai</AppLink> to deliver
          best-in-class technology for product information and inventory
          management.
        </Typography>
        <Grid
          container
          columnSpacing={3}
          alignItems={"stretch"}
          sx={{ mt: { md: 3 } }}
        >
          {data.map((item, index) => {
            return (
              <Grid item xs={12} sm={6} md={4} key={index} height={"100%"}>
                <PartnerCard key={index} data={item} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
}

const data = [
  {
    title: "Agency Partner",
    description: `Our ambassadors, experts, thought leaders, and kindred eCommerce friends. Digital marketing agencies, Dev & Design, Consultants, Strategists, come join the community.`,
  },
  {
    title: "Technology Partner",
    description: `Our connections into the digital world - let's link systems, integrate tech stacks, and build best-in-class experiences within the online realm.`,
  },
  {
    title: "Affiliate Partner",
    description: `The influencers, the networkers, the newsworthy, and the notable. Join our affiliate program and share the word through your lens.`,
  },
];
