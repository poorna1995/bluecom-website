import React from "react";
import { Chip } from "@mui/material";

function StatusAsChip({ status, marginTop, fontSize, fontWeight }) {
  let color = "";
  let label = "";
  let background = "";

  switch (status) {
    case "active":
      color = "#12B76A";
      label = "Active";
      background = "#FFF0C3";
      break;
    case "draft":
      color = "#F79009";
      label = "Draft";
      background = "#FFF0C3";
      break;

    default:
      color = "";
      label = status;
      break;
  }

  return (
    <Chip
      sx={{
        fontSize: fontSize ? fontSize : "12px",
        fontWeight: fontWeight ? fontWeight : "600",
        color: color,
        backgroundColor: background,
        borderRadius: "30px",
        marginTop: marginTop ? marginTop : "-20px",
        marginRight: "-8px",
        height: "23px",
        width: label?.length > 7 ? `${label.length * 9}px` : "70px",
      }}
      label={label}
    />
  );
}

export default StatusAsChip;
