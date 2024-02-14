import React from "react";
import FlashIcon from "./Icons/FlashIcon";
import { Chip } from "@mui/material";

export default function FlashFreeChip({ flashIcon, label, ...prop }) {
  const chipStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 10px",
    height: "fit-content",
    width: "fit-content",
    border: "1px solid #A6F4C5",
    borderRadius: "2rem",
    background: "#ECFDF3",
    fontSize: "16px",
    color: "#039855",
    fontFamily: "Plus Jakarta Sans",
    fontWeight: "600",
    ...prop,
  };
  return (
    <>
      <Chip style={chipStyle} icon={flashIcon} label={label}></Chip>
    </>
  );
}
