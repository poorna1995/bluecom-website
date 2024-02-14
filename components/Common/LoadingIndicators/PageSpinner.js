import React from "react";
import Lottie from "lottie-react";
import LoadingSpinner from "../LoadingIndicators/LoadingSpinner.json";
import { Box } from "@mui/material";

const PageSpinner = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Lottie
          animationData={LoadingSpinner}
          style={{ width: "250px", height: "250px" }}
        />
      </Box>
    </Box>
  );
};

export default PageSpinner;
