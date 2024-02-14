import { Box, Grid, Typography } from "@mui/material";
import AppLink from "components/Common/AppLink";
import PrimaryButton from "components/Common/Buttons/PrimaryButton";
import PartnerCalenderIcon from "components/Common/Icons/PartnerProgramIcon/PartnerCalenderIcon";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function PartnersWithUsBottomSection() {
  const router = useRouter();
  return (
    <Box
      sx={{
        backgroundColor: "#F9FAFF",
        py: { xs: 14, sm: 14, md: 10 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "16px",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "24px", sm: "24px", md: "42px" },
            fontWeight: "800",
            color: "#313131",
          }}
        >
          Partner with us
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "16px", sm: "16px", md: "24px" },
            fontWeight: "600",
            color: "#313131",
            textAlign: "center",
            maxWidth: "800px",
          }}
        >
          Join forces with <AppLink href="/">bluecom.ai</AppLink> to deliver
          best-in-class technology for product information and inventory
          management.{" "}
        </Typography>
        <PrimaryButton
          sx={{
            height: { md: "52px" },
            fontSize: { md: "16px !important" },
            fontWeight: 600,
            px: "20px !important",
          }}
          onClick={() => router.push("/partner-program")}
          startIcon={<PartnerCalenderIcon />}
        >
          Join Today
        </PrimaryButton>
      </Box>
    </Box>
  );
}
