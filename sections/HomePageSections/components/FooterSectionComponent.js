import { Box, Divider, Grid, Typography } from "@mui/material";
import AppImage from "components/Common/AppImage";
import logo from "public/images/07Footer/BluecomLogoWhite.svg";
import AppLink from "components/Common/AppLink";

import React from "react";
import DownloadWhitePaperComponent from "./DownloadWhitePaperComponent";
import { BorderBottom } from "@mui/icons-material";

export default function FooterSectionComponent() {
  const [openDialog, setOpenDialog] = React.useState(false);
  const handleDialogOpen = () => {
    setOpenDialog(true);
  };
  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const handleDownloadWhitePaper = () => {
    handleDialogOpen();
  };
  return (
    <Box
      sx={{
        background: "#4F44E0",
        p: { xs: "40px", md: "56px 64px" },
        color: "#fff",
        fontWeight: "600",
        maxWidth: "100%",
        margin: "auto",
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          maxWidth: "1440px",
          margin: "auto",
        }}
      >
        <Box
          sx={{
            pb: "24px",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: ["left", "center"],
            justifyContent: "space-between",
            borderBottom: "1px solid #FFFFFF55",
            gap: "1rem",
          }}
        >
          <AppImage src={logo} width={"fit-content"} height={22} />

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "row", md: "row" },
              alignItems: { xs: "center", md: "center" },
              justifyContent: {
                xs: "space-between",
                md: "flex-end",
              },
              gap: ["0.2rem", "3rem"],
              marginTop: { xs: "1rem", md: "0" },
              flexWrap: "wrap",
              rowGap: { xs: "1.5rem !important" },
            }}
          >
            <AppLink
              href="/"
              sx={{
                fontSize: ["13px", "16px"],
                fontWeight: "600",
                color: "#fff",
              }}
            >
              Home
            </AppLink>
            <AppLink
              href="/pricing"
              sx={{
                fontSize: ["13px", "16px"],
                fontWeight: "600",
                color: "#fff",
              }}
            >
              Pricing
            </AppLink>
            <AppLink
              href="/blogs"
              sx={{
                fontSize: ["13px", "16px"],
                fontWeight: "600",
                color: "#fff",
              }}
            >
              Blogs
            </AppLink>
            <AppLink
              href=""
              // href="/assets/bluecom-whitepaper.pdf"
              // download
              // target="_blank"
              onClick={() => handleDownloadWhitePaper()}
              sx={{
                fontSize: ["13px", "16px"],
                fontWeight: "600",
                color: "#fff",
              }}
            >
              Download White Paper
            </AppLink>
            <AppLink
              href="/calculator"
              sx={{
                fontSize: ["13px", "16px"],
                fontWeight: "600",
                color: "#fff",
              }}
            >
              Calculator
            </AppLink>
            <AppLink
              href="/legal/terms-and-conditions"
              sx={{
                fontSize: ["13px", "16px"],
                fontWeight: "600",
                color: "#fff",
              }}
            >
              Terms & Conditions
            </AppLink>
            <AppLink
              href="/legal/privacy-policy"
              sx={{
                fontSize: ["13px", "16px"],
                fontWeight: "600",
                color: "#fff",
              }}
            >
              Privacy Policy
            </AppLink>
            <AppLink
              href="/contact-us"
              sx={{
                fontSize: ["13px", "16px"],
                fontWeight: "600",
                color: "#fff",
              }}
            >
              Contact Us
            </AppLink>
          </Box>
        </Box>

        <Typography sx={{ pt: "25px", fontSize: { xs: "12px", md: "14px" } }}>
          © 2023. All rights reserved
        </Typography>
        <DownloadWhitePaperComponent
          openDialog={openDialog}
          handleDialogClose={handleDialogClose}
        />
      </Box>
    </Box>
  );
}
