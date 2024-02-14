import { Box, Typography } from "@mui/material";
import React from "react";

export default function ContentSection({ headerText,headerDesc }) {
  return (
    <Box
      sx={{
        // maxWidth: "1440px",
        // mx: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        paddingBottom: "64px",
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "28px", sm: "28px", md: "60px" },
          fontWeight: 800,
          lineHeight: { xs: "34px", md: "85px" },
          color: "#4F44E0",
          fontFamily: "Manrope, sans-serif",
          maxWidth: "80%",
          marginX: {
            xs: "auto",
          },
        }}
      >
        {headerText || "Lorem ipsum dolor sit amet"} <br />
      </Typography>
      <Typography
        sx={{
          color: "#151515",
          fontSize: "16px",
          fontWeight: 600,
          maxWidth: "80%",
          lineHeight: { xs: "34px", md: "35px" },
        }}
      >
        {headerDesc ||
          "Lorem ipsum dolor sit amet consectetur. Donec et dolor enim leo sed odio arcu lectus. Lectus in enim pellentesque id eget sed. Nascetur elementum vel fringilla elit ipsum quis enim posuere. Quis sit."}
      </Typography>
    </Box>
  );
}
