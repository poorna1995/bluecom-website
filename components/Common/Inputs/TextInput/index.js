import { InputLabel, styled, TextField } from "@mui/material";
import React from "react";

const StyledContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  maxWidth: "600px",
  height: "100%",
  width: "100%",
  margin: "auto",
  marginTop: "24px",
}));

const StyledLabel = styled(InputLabel)(({ theme }) => ({
  color: "#222222",
  margin: theme.spacing(1),
  marginLeft: 0,
  marginBottom: "8px",
  fontSize: "14px",
  fontWeight: 500,
  lineHeight: "17px",
  // letterSpacing: "-3%",
}));
const TextInput = ({
  title,
  required,
  containerStyles,
  value,
  onChange,
  inputStyles,
  labelStyles,
  ...props
}) => {
  return (
    <StyledContainer style={containerStyles}>
      {title && (
        <StyledLabel sx={labelStyles} required={required}>
          {title}
        </StyledLabel>
      )}
      <TextField
        inputProps={{
          sx: {
            paddingTop: "15px",
            paddingBottom: "14px",
            borderRadius: "8px",
            fontWeight: 500,
            // height:"26px"
            ...inputStyles,
          },
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "8px",
          },
        }}
        fullWidth
        variant="outlined"
        value={value}
        onChange={onChange}
        {...props}
      />
    </StyledContainer>
  );
};

export default TextInput;
