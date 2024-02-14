import { Box, Typography } from "@mui/material";
import AppImage from "components/Common/AppImage";
import React from "react";

export default function ThankYouPageSection() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          justifyContent: "center",
          padding: "100px",
          border: "1px solid #E5E5E5",
        }}
      >
        <AppImage
          src="/successGIF.gif"
          alt="Thank you!"
          width={110}
          height={110}
          loop={false}
        />
        <Typography
          sx={{
            fontSize: "32px",
            fontWeight: "700",
            color: "#222222",
          }}
        >
          Thank you!
        </Typography>
        <Typography
          sx={{
            fontSize: "18px",
            fontWeight: "500",
            color: "#313131",
          }}
        >
          Someone from our Team will get in touch with you shortly.
        </Typography>
      </Box>
    </>
  );
}
