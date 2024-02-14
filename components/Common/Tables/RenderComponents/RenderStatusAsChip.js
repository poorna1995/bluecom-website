import { Chip } from "@mui/material";
import React from "react";

function RenderStatusAsChip({ status }) {
  let color = "";
  let label = "";
  let backgroundColor = "";

  switch (status) {
    case "open":
      color = "#0E955C";
      label = "active";
      break;
    case "draft":
      color = "#DC6803";
      backgroundColor = "#FFE7CA";
      label = "Worksheet";
      break;

    default:
      color = "";
      label = status;
      break;
  }

  return (
    <Chip
      sx={{
        fontSize: "12px",
        fontWeight: "600",
        color: color,
        backgroundColor: backgroundColor,
        borderRadius: "30px",
        textTransform: "capitalize",

        height: "25px",
      }}
      label={label}
    />
  );
}

export default RenderStatusAsChip;
