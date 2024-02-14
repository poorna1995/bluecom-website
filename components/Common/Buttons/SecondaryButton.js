import { Button, styled } from "@mui/material";
import React from "react";

const StyledButton = styled(Button)(({ theme, ...props }) => ({
  textTransform: "initial",

  paddingRight: "40px",
  paddingLeft: "40px",
  fontWeight: 600,
  fontSize: "14px",
  lineHeight: "28px",
  background: "#eaeaea",
  color: "#2c2c2c",

  "&:hover": { background: "#eaeaea", color: "#2c2c2c" },
}));

const SecondaryButton = ({ children, ...props }) => {
  return (
    <StyledButton variant="contained" disableElevation {...props}>
      {children}
    </StyledButton>
  );
};

export default SecondaryButton;
