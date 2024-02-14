import React from "react";
import OutlinedButton from "./OutlinedButton";
import { CircularProgress } from "@mui/material";
import PrimaryButton from "./PrimaryButton";
import BookDemoIcon from "../Icons/BookDemoIcon";

export const ScheduleDemo = ({
  mt,
  ml,
  mr,
  fontSize,
  fontWeight,
  padding,
  widthInput,
  heightInput,
  lineHeight,
  ...props
}) => {
  function handleLogin() {
    handleClick();
    // router.push("/auth/login");
    window.open(`https://calendly.com/bluecom/30min?back=1&month`, "_blank");
  }

  const [hovered, setHovered] = React.useState(false);
  const [pressed, setPressed] = React.useState(false);
  const [focused, setFocused] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleMouseDown = () => {
    setPressed(true);
  };

  const handleMouseUp = () => {
    setPressed(false);
  };

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  const handleClick = () => {
    setLoading(true);
    // Perform loading action here
    setTimeout(() => {
      setLoading(false);
      setHovered(false);
      setFocused(false);
    }, 2000);
  };
  return (
    <PrimaryButton
      startIcon={<BookDemoIcon />}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onFocus={handleFocus}
      onBlur={handleBlur}
      sx={{
        minWidth: widthInput ? widthInput : "199px",
        height: heightInput ? heightInput : "56px",
        fontSize: fontSize ? fontSize : ["16px", "18px"],
        fontWeight: fontWeight ? fontWeight : "700",
        padding: padding ? padding : "6px 24px",
        lineHeight: lineHeight ? lineHeight : "",
        mt: mt ? mt : "0",
        mr: mr ? mr : ["0", "0", "1rem"],
        ml: ml ? ml : "0",

        // backgroundColor: "#EAEAEA",
        // border: "1px solid #EAEAEA",
        color: "#fff",
        width: "fit-content",
        fontFamily: "Manrope, sans-serif",
        borderRadius: "8px",
        backgroundColor: pressed
          ? "#0A0092"
          : hovered
          ? "#0C00AF  "
          : focused
          ? "##4F44E0"
          : loading
          ? "##4F44E0"
          : "#4F44E0",

        border: focused ? "1px solid #4F44E0" : "0px solid #fff",
        outline: focused ? "2px solid #4F44E0" : "none",

        "&:hover": {
          backgroundColor: "#0C00AF",
          border: hovered ? "0px solid #fff" : "0px solid #fff",
        },
        "&:focus": {
          border: focused ? "1px solid #fff" : "0px solid #fff",
          outline: focused ? "2px solid #7C99FF" : "none",
        },
        ...props,
      }}
      {...loading}
      onClick={() => handleLogin()}
    >
      {loading ? (
        <CircularProgress size={20} color="inherit" sx={{ color: "#FFF" }} />
      ) : (
        "Book a Demo"
      )}
    </PrimaryButton>
  );
};
