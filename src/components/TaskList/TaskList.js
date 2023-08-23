import React, { useContext } from "react";
import ListItem from "./ListItem";
import { DataContext } from "../Store/DataProvider";
import { List } from "@mui/material";
import {
  updateTodoCompleteStatus,
  updateTodoName,
  deleteTodo,
} from "../TaskAPIs/TaskAPI";
import LoadingUI from "../UI/LoadingUI";

const TaskList = () => {
  const [todos, setTodos, isLoading] = useContext(DataContext);

  const handleCompleteToggle = async (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, complete: !todo.complete } : todo
    );
    setTodos(newTodos);
    try {
      await updateTodoCompleteStatus(
        id,
        newTodos.find((todo) => todo.id === id)?.complete
      );
    } catch (error) {
      console.error("Error updating complete status:", error);
    }
  };

  const handleEditTodo = async (editValue, id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, name: editValue } : todo
    );
    setTodos(newTodos);

    try {
      await updateTodoName(id, editValue);
    } catch (error) {
      console.error("Error updating todo name:", error);
    }
  };

  const handleDeleteTodo = async (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);

    try {
      await deleteTodo(id);
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  return (
    <List>
      {isLoading ? (
        <LoadingUI text={"Loading Tasks..."} />
      ) : (
        todos.map((todo) => (
          <ListItem
            todo={todo}
            key={todo.id}
            id={todo.id}
            handleCompleteToggle={handleCompleteToggle}
            handleEditTodo={handleEditTodo}
            handleDeleteTodo={handleDeleteTodo}
          />
        ))
      )}
    </List>
  );
};

export default TaskList;
