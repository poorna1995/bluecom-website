import { Box, Typography } from "@mui/material";
import React from "react";
import BaseDialog from ".";
import OutlinedButton from "../Buttons/OutlinedButton";
import PrimaryButton from "../Buttons/PrimaryButton";
import CautionIcon from "../Icons/CautionIcon";

function DialogAsCaution({ title, message, onCancel, onDelete, open }) {
  const handleDeleteWarehouse = () => {
    onDelete();
  };

  const handleDeleteDialogClose = () => {
    onCancel();
  };
  return (
    <BaseDialog
      hideCloseButton
      open={open}
      handleClose={handleDeleteDialogClose}
    >
      <Box
        sx={{
          marginY: "8px",
          marginX: "8px",
          width: "400px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: "12px",
          "& svg": {
            mb: "16px",
          },
        }}
      >
        <CautionIcon />

        <Typography
          sx={{
            pT: "16px",
            fontSize: "22px",
            fontWeight: "600",
            lineHeight: "28px",
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            mt: "6px",
            fontSize: "14px",
            fontWeight: "500",
            lineHeight: "20px",
            textAlign: "center",
          }}
        >
          {message}
        </Typography>
        <Box
          sx={{
            display: "flex",
            mt: "12px",
            bottom: "0",
            width: "372px",
            pt: "16px",
          }}
        >
          <OutlinedButton
            onClick={handleDeleteDialogClose}
            fullWidth
            sx={{ height: "44px" }}
          >
            Cancel
          </OutlinedButton>
          <PrimaryButton
            onClick={handleDeleteWarehouse}
            fullWidth
            sx={{
              ml: 1,
              height: "44px",
              backgroundColor: "#D92D20",
              "&:hover": {
                background: "#d91304",
              },
            }}
          >
            Delete
          </PrimaryButton>
        </Box>
      </Box>
    </BaseDialog>
  );
}

export default DialogAsCaution;

// READ ME :
// this can be used to display warning while deleting something , or any other action that needs confirmation from user

// if you want to use this as a component , you can use it as :-

// <DialogAsCaution
// title="main title of dialogue"
// message="message you want to display"
// open={}
// onCancel={}
// onDelete={function to handle action}
// />

// example of this can be seen in sections->WarehousePageSection->index.js
