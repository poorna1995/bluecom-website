import * as React from "react";
import { styled } from "@mui/material/styles";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import FormatColorFillIcon from "@mui/icons-material/FormatColorFill";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Box, Typography } from "@mui/material";

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  "& .MuiToggleButtonGroup-grouped": {
    margin: theme.spacing(0.5),
    border: 0,
    "&.Mui-disabled": {
      border: 0,
    },
    "&:not(:first-of-type)": {
      borderRadius: "10px",
      //   padding: "20px 25px",
      // width: "122px",
      px: "24px !important",
      fontSize: {
        xs: "14px !important",
        md: "18px !important",
      },
      // height: "50px",
      height: {
        xs: "40px",
        md: "50px",
      },
      color: "#000000",
      backgroundColor: "#ffffff", // Specify the background color for inactive buttons
      "&.Mui-selected": {
        backgroundColor: "#4F44E0", // Specify the background color for the active button
        color: "#ffffff",
      },
    },
    "&:first-of-type": {
      borderRadius: "10px",
      //   padding: "20px 25px",
      // width: "122px",
      // height: "50px",
      height: {
        xs: "40px",
        md: "50px",
      },
      px: "24px !important",
      // fontSize: "18px",
      fontSize: {
        xs: "14px !important",
        md: "18px !important",
      },
      fontWeight: "700",
      fontFamily: "Manrope, sans-serif",
      color: "#000000",
      backgroundColor: "#ffffff", // Specify the background color for inactive buttons
      "&.Mui-selected": {
        backgroundColor: "#4F44E0", // Specify the background color for the active button
        color: "#ffffff",
      },
    },
  },
}));

export default function ToggleMonthAndAnnualButton({
  billPeriod,
  handleToggle,
}) {
  return (
    <Paper
      elevation={0}
      sx={{
        display: "flex",
        border: "1px solid rgba(14, 11, 61, 0.1)",
        flexWrap: "wrap",
        borderRadius: "15px",
        padding: "4px",
      }}
    >
      <StyledToggleButtonGroup
        size="small"
        value={billPeriod}
        exclusive
        onChange={handleToggle}
        aria-label="text alignment"
      >
        <ToggleButton value="Month" aria-label="left aligned">
          <Box>
            <Typography
              sx={{
                px: "16px",
                textTransform: "none",
                // fontSize: "18px",
                fontWeight: "700",
                lineHeight: "30px",
                fontFamily: "Manrope, sans-serif",
              }}
            >
              Monthly
            </Typography>
          </Box>
          {/* Monthly */}
        </ToggleButton>
        <ToggleButton value="Annual" aria-label="centered">
          <Box>
            <Typography
              sx={{
                px: "16px",
                textTransform: "none",
                // fontSize: "18px",
                fontWeight: "700",
                lineHeight: "30px",
                fontFamily: "Manrope, sans-serif",
              }}
            >
              Annually
            </Typography>
          </Box>
          {/* Annually */}
        </ToggleButton>
      </StyledToggleButtonGroup>
    </Paper>
  );
}
