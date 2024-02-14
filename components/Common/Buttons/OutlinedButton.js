import { Button, styled } from "@mui/material";
import React from "react";

const StyledButton = styled(Button)(({ theme, ...props }) => ({
  textTransform: "initial",
  paddingRight: "24px",
  paddingLeft: "24px",
  height: "42px",
  fontWeight: 700,
  fontSize: "14px",
  lineHeight: "19px",
  background: "white",

  borderRadius: "5px",
  color: theme.palette.primary.main,

  border: "1px solid",
  borderColor: theme.palette.primary.main,

  "&:hover": {
    background: "white",
    borderColor: theme.palette.primary.main,
  },
}));

const OutlinedButton = ({ children, icon, ...props }) => {
  return (
    <StyledButton
      // variant="outlined"
      startIcon={icon}
      sx={{
        ...props.sx,
      }}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default OutlinedButton;
