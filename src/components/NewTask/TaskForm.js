import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";

const TaskForm = ({
  open,
  onClose,
  todoInput,
  todoName,
  isEmpty,
  setTodoName,
  setIsEmpty,
  handleAddTodo,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: { minWidth: "300px", width: "50%", maxWidth: "600px" },
      }}
    >
      <DialogTitle>Add New Task</DialogTitle>
      <DialogContent style={{ paddingTop: 5 }}>
        <TextField
          autoFocus
          label={isEmpty ? "Task can't be empty" : "Type your New Task here"}
          fullWidth
          variant="outlined"
          inputRef={todoInput}
          value={todoName}
          onChange={(e) => {
            setTodoName(e.target.value.toLowerCase());
            setIsEmpty(false);
          }}
          InputProps={{
            style: { color: isEmpty ? "#e74c3c" : "initial" },
          }}
          InputLabelProps={{
            style: { color: isEmpty ? "#e74c3c" : "initial" },
          }}
          error={isEmpty}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleAddTodo} color="primary" disabled={isEmpty}>
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default TaskForm;
