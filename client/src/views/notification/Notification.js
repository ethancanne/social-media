import React, { useState, forwardRef, useContext } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import notificationContext from "../../context/page/pageContext";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

const Notification = () => {
  const { isShowingNotification, message, type, removeNotification } =
    useContext(notificationContext);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    removeNotification();
  };

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar
        open={isShowingNotification}
        autoHideDuration={6000}
        onClose={handleClose}>
        <Alert onClose={handleClose} severity={type} sx={{ width: "100%" }}>
          {JSON.stringify(message)}
        </Alert>
      </Snackbar>
    </Stack>
  );
};

export default Notification;
