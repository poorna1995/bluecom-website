import { Box, Typography } from "@mui/material";
import React from "react";
import CircleIcon from "@mui/icons-material/Circle";

export default function BilledAndTrailComponent({ period }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
      }}
    >
      <Typography
        style={{
          fontSize: "16px",
          fontWeight: "500",
          color: "#0E0B3D",
        }}
      >
        Billed {period}
      </Typography>
      <CircleIcon sx={{ fontSize: "8px" }} />
      <Typography
        style={{
          fontSize: "16px",
          fontWeight: "500",
          color: "#0E0B3D",
        }}
      >
        14 Days Free Trial
      </Typography>
    </Box>
  );
}
