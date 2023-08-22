import React, { useState } from "react";
import { Button } from "@mui/material";
import AddTodoPopUp from "./AddTodoPopUp";
import AddIcon from "@mui/icons-material/Add";

const NewTask = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleClickOpen}
        sx={{ fontSize: "1.2rem", padding: "12px", marginBottom: "6px" }}
      >
        <AddIcon />
        &nbsp;&nbsp;Add New
      </Button>
      <AddTodoPopUp open={open} onClose={handleClose} />
    </>
  );
};

export default NewTask;
