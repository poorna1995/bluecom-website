import { Box, Typography } from "@mui/material";
import React from "react";

export default function PartnerCard({ data }) {
  return (
    <Box
      sx={{
        px: 3,
        borderLeft: {
          xs: "4px solid #6D63EB",
          sm: "4px solid #6D63EB",
          md: "7px solid #6D63EB",
        },
        my: { xs: 4, sm: 4, md: 8 },
        height: "100%",
      }}
    >
      <Typography
        sx={{
          color: "#fff",
          fontSize: { xs: "24px", sm: "24px", md: "32px" },
          fontWeight: 600,
          lineHeight: " 40px",
          pb: { xs: 1, sm: 1, md: 2 },
        }}
      >
        {data.title}
      </Typography>
      <Typography
        sx={{
          color: "#fff",
          fontSize: { xs: "16px", sm: "16px", md: "18px" },
          fontWeight: 400,
          lineHeight: "29px",
        }}
      >
        {data.description}
      </Typography>
    </Box>
  );
}
