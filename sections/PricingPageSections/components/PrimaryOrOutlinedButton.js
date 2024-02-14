import React from "react";
import { GetStartedOutlinedButton } from "./GetStartedOutlinedButton";
import { GetStartedPrimaryButton } from "./GetStartedPrimaryButton";

export default function PrimaryOrOutlinedButton({
  outlinedButton,
  primaryButton,
  functionPass,
}) {
  let ButtonType = null;

  if (outlinedButton === true) {
    ButtonType = (
      <GetStartedOutlinedButton
        widthInput={"80%"}
        heightInput={"fit-content"}
        fontSize={"16px"}
        fontWeight={"700"}
        padding={"10px 24px"}
        mt={"0px"}
        mr={"0"}
        functionName={functionPass}
        buttonName={outlinedButton}
        sx={{
          alignSelf: "center",
          borderRadius: "10px",
          mb: "24px",
        }}
      />
    );
  } else if (primaryButton === true) {
    ButtonType = (
      <GetStartedPrimaryButton
        widthInput={"80%"}
        heightInput={"fit-content"}
        fontSize={"16px"}
        fontWeight={"700"}
        padding={"10px 24px"}
        mt={"0px"}
        mr={"0"}
        functionName={functionPass}
        buttonName={primaryButton}
        sx={{
          alignSelf: "center",
          borderRadius: "10px",
          mb: "24px",
        }}
      />
    );
  }

  return <div>{ButtonType}</div>;
}
