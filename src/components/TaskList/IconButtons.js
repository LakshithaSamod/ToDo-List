import React from "react";
import { Stack, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";

const IconButtons = ({
  onEdit,
  handleSave,
  handleDelete,
  isComplete,
  handleOnEdit,
}) => {
  return (
    <Stack direction="row" spacing={1}>
      <IconButton
        id="editBtn"
        disabled={isComplete}
        onClick={onEdit ? handleSave : handleOnEdit}
        style={{ color: onEdit ? "#3498db" : "#2ecc71" }}
      >
        {onEdit ? <SaveIcon /> : <EditIcon />}
      </IconButton>
      <IconButton
        id="delBtn"
        onClick={handleDelete}
        style={{ color: "#e74c3c" }}
      >
        <DeleteIcon />
      </IconButton>
    </Stack>
  );
};

export default IconButtons;
