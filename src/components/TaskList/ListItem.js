import React, { useState } from "react";
import {
  ListItem as MuiListItem,
  Checkbox,
  TextField,
  ListItemText,
  Stack,
} from "@mui/material";
import IconButtons from "./IconButtons";

const ListItem = ({
  todo,
  id,
  handleCompleteToggle,
  handleEditTodo,
  handleDeleteTodo,
}) => {
  const [onEdit, setOnEdit] = useState(false);
  const [editValue, setEditValue] = useState(todo.name);
  const [isEmpty, setIsEmpty] = useState(false);

  const handleOnEdit = () => {
    setOnEdit(true);
  };

  const handleSave = () => {
    if (!editValue.trim()) {
      setIsEmpty(true);
      return;
    }

    setIsEmpty(false);
    setOnEdit(false);
    handleEditTodo(editValue, id);
  };

  const handleDelete = () => {
    handleDeleteTodo(id);
  };

  return (
    <MuiListItem
      disableGutters
      secondaryAction={
        <Stack direction="row" spacing={1}>
          <IconButtons
            onEdit={onEdit}
            handleSave={handleSave}
            handleDelete={handleDelete}
            handleOnEdit={handleOnEdit}
            isComplete={todo.complete}
          />
        </Stack>
      }
      style={{
        backgroundColor: todo.complete ? "#f0f0f0" : " #d5dbdb  ",
        borderRadius: "15px",
        marginBottom: "10px",
        padding: "10px",
      }}
    >
      {onEdit ? (
        <div>
          <TextField
            value={editValue}
            onChange={(e) => {
              setEditValue(e.target.value);
              setIsEmpty(false);
            }}
            variant="outlined"
            style={{ borderColor: "#2ecc71" }}
            placeholder={isEmpty ? "Value can't be empty" : ""}
          />
        </div>
      ) : (
        <>
          <Checkbox
            checked={todo.complete}
            onChange={() => handleCompleteToggle(id)}
            style={{ color: "#3498db" }}
          />
          <ListItemText
            primary={todo.name}
            style={{
              color: todo.complete ? "#777" : "#3498db",
              textDecoration: todo.complete ? "line-through" : "none",
            }}
          />
        </>
      )}
    </MuiListItem>
  );
};

export default ListItem;
