import { Box, Slider, Typography } from "@mui/material";
import React from "react";

const styles = {
  color: "#fff",
  "& .value-display": {
    fontSize: ["18px", "30px"],
    fontWeight: 600,
    lineHeight: ["18px", "36px"],
    // mb: 4,
    background: "#000",
    // px: 2,
    // pb: 1,
    mt: 2,
    borderTopLeftRadius: "8px",
    borderTopRightRadius: "8px",
    p: {
      xs: "12px 8px 12px 8px",
      sm: "12px 8px 12px 8px",
      md: "24px 16px 24px 16px",
    },
  },
  "& label": {
    // mt: 2,
    pt: 2,
    fontSize: "16px",
    lineHeight: "19px",
  },
};
export default function CalculatorRangeSlider() {
  const [value, setValue] = React.useState(0);
  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };
  const getResult = () => {
    let result = (value * 10 * 75 * 12) / 2;
    return result;
  };

  return (
    <Box sx={{ ...styles }}>
      <label>Number of referrals</label>
      <div className="value-display">{value * 10}</div>
      <Slider
        aria-label="Always visible"
        defaultValue={0}
        onChange={handleSliderChange}
        // getAriaValueText={valuetext}
        step={0.1}
        valueLabelDisplay="off"
        sx={{
          mt: -2.5,
        }}
      />
      <Typography
        sx={{
          "& .result": {
            fontSize: ["24px", "48px"],
            fontWeight: 700,
          },
          "& .time": {
            fontSize: "16px",
            fontWeight: 700,
          },
        }}
      >
        <span className="result"> $ {getResult()}</span>{" "}
        <span className="time">/ year</span>
      </Typography>
    </Box>
  );
}
