import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import React from "react";
import { MdClose } from "react-icons/md";

const BaseDialog = ({
  open,
  handleClose,
  children,
  title,
  hideCloseButton,
  dialogActions,
  buttonColor,dialogPaperStyles
}) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      scroll="paper"
      PaperProps={{
        sx: {
          borderRadius: "16px",
          maxWidth: "1000px",
          // zIndex:'3000'
          ...dialogPaperStyles
        },
      }}
      sx={{
        zIndex: 3000,
      }}
    >
      {!hideCloseButton && (
        <IconButton
          onClick={() => handleClose()}
          sx={{
            position: "absolute",
            top: "10px",
            right: "10px",
            color: buttonColor ? buttonColor : "",
          }}
        >
          <MdClose />
        </IconButton>
      )}
      {title && <DialogTitle>{title}</DialogTitle>}
      <DialogContent sx={{ p: "0" }}>{children}</DialogContent>
      {dialogActions && <DialogActions>{dialogActions}</DialogActions>}
    </Dialog>
  );
};

export default BaseDialog;
